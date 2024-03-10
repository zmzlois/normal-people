// Describing the state 

import React from "react"
import type { ExternalToast, ToastT, PromiseT, ToastTypes, ToastToDismiss, PromiseData } from "./types"
import type { NextResponse } from "next/server";
import type { ServerResponse } from "http";

let toastsCounter = 1;

// A toast component is actually an event-object followed with subscribe and dispatch pattern. When you click on a button to create a toast, you are actually dispatching an event to the toast component. The toast component is subscribed to the event and will create a toast based on the event.
// When you see multiple toasts, you are actually seeing multiple events being dispatched(or in here, published) and the deadling of "when this event will finished" yet reached. It might be common to use "useState" to manage and notify the state of the component. But "useState" api in React comes with several caveat. An object with builtin state and dispatch function is more stable and reduce website flashing.

class Observer {
    // TODO: why split the types of ToastT and ExternalToast?
    subscribers: Array<(toast: ExternalToast | ToastToDismiss) => void>;
    toasts: Array<ToastT | ToastToDismiss>;

    constructor() {
        this.subscribers = [];
        this.toasts = [];
    }

    // use arrow functions to maintain the correct `this` reference 
    subscribe = (subscriber: (toast: ToastT) => void) => {
        // push the initiated subscriber to the end of array
        this.subscribers.push(subscriber)

        return () => {
            // get the index of latest pushed subscriber
            const index = this.subscribers.indexOf(subscriber)
            // only remove the subscriber from the array
            this.subscribers.splice(index, 1)
        }
    }


    // if addToast and publish is doing the same thing, why do it twice? 
    publish = (data: ToastT) => {
        // loop through the array of subscribers and call each subscriber with their data (id, style etc), push the toast into the array, and then remove the toast 
        this.subscribers.forEach((subscriber) => subscriber(data))
    }

    addToast = (data: ToastT) => {
        this.publish(data);
    }

    create = (
        data: ExternalToast & {
            message?: string | React.ReactNode;
            type?: ToastTypes;
            promise?: PromiseT;
            jsx?: React.ReactElement; // React.createElement() used to construct virtual DOM;
        }
    ) => {
        const { message, ...rest } = data;

        // toast id might be a string, but why? for tracking?
        const id = typeof data?.id === "number" ? data.id : data.id?.length ? data.id : toastsCounter++;
        const alreadyExists = this.toasts.find((toast) => toast.id === id)

        const dismissible = data.dismissible === undefined ? true : data.dismissible;

        if (alreadyExists) {
            this.toasts = this.toasts.map((toast) => {
                if (toast.id === id) {
                    this.publish({ ...toast, ...data, id, title: message });
                    return {
                        ...toast,
                        ...data,
                        id,
                        dismissible,
                        title: message,
                    }
                }
                return toast;
            })
        } else {
            this.addToast({ title: message, ...rest, dismissible, id })
        }

        return id;
    }
    dismiss = (id?: number | string) => {

        // why needs to split toasts and subscribers at the first place?
        if (!id) {
            this.toasts.forEach((toast) => {
                this.subscribers.forEach((subscriber) => subscriber({ id: toast.id, dismiss: true }))
            })
        }

        this.subscribers.forEach((subscriber) => subscriber({ id, dismiss: true }))

        return id;
    }

    message = (message: string | React.ReactNode, data?: ExternalToast) => {
        return this.create({ message, ...data })
    }

    error = (message: string | React.ReactNode, data?: ExternalToast) => {
        return this.create({ message, type: "error", ...data })
    }

    success = (message: string | React.ReactNode, data?: ExternalToast) => {
        return this.create({ message, type: "success", ...data })
    }

    info = (message: string | React.ReactNode, data?: ExternalToast) => {
        return this.create({ message, type: "info", ...data })
    }

    warning = (message: string | React.ReactNode, data?: ExternalToast) => {
        return this.create({ message, type: "warning", ...data })
    }

    loading = (message: string | React.ReactNode, data?: ExternalToast) => {
        return this.create({ message, type: "loading", ...data })
    }

    promise = <ToastData>(promise: PromiseT<ToastData>, data?: PromiseData<ToastData>) => {
        if (!data) {
            return;
        }

        let id: string | number | undefined = undefined;

        if (data.loading !== undefined) {
            id = this.create({
                ...data,
                promise,
                type: "loading",
                message: data.loading,
                description: typeof data.description !== "function" ? data.description : undefined,
            })
        }

        const p = promise instanceof Promise ? promise : promise();

        let shouldDismiss = id !== undefined;


        p.then((response) => {

            // Things get confusing here. What is it responding to? Why? How's the type constructed? 
            // @ts-expect-error
            if (response && typeof response.ok === "boolean" && !response.ok) {
                shouldDismiss = false;
                // @ts-expect-error
                const message = typeof data.error === "function" ? data.error(`HTTP error! status: ${response.status}`) : data.error;
                // @ts-expect-error
                const description = typeof data.description === "function" ? data.description(`HTTP error! status: `) : data.description;

                this.create({ id, type: 'error', message, description })
            } else if (data.success !== undefined) {
                shouldDismiss = false;
                const message = typeof data.success === "function" ? data.success(response) : data.success;
                const description = typeof data.description === "function" ? data.description(response) : data.description;

                this.create({ id, type: 'success', message, description })
            }
        }).catch((error) => {
            if (data.error !== undefined) {
                shouldDismiss = false;
                const message = typeof data.error === 'function' ? data.error(error) : data.error;
                const description = typeof data.description === 'function' ? data.description(error) : data.description;
                this.create({ id, type: 'error', message, description });
            }
        })
            .finally(() => {
                if (shouldDismiss) {
                    // Toast is still in load state (and will be indefinitely — dismiss it)
                    this.dismiss(id);
                    id = undefined;
                }

                data.finally?.();
            });

        return id;
    }

    custom = (jsx: (id: number | string) => React.ReactElement, data?: ExternalToast) => {
        const id = data?.id || toastsCounter++;
        this.create({ jsx: jsx(id), ...data, id })

        return id;
    }

}

export const ToastState = new Observer();

const toastFunction = (message: string | React.ReactNode, data?: ExternalToast) => {
    const id = data?.id || toastsCounter++;

    ToastState.addToast({
        title: message,
        ...data,
        id,
    })

    return id;
}

const basicToast = toastFunction;

export const toast = Object.assign(basicToast, {
    success: ToastState.success,
    error: ToastState.error,
    info: ToastState.info,
    warning: ToastState.warning,
    loading: ToastState.loading,
    promise: ToastState.promise,
    custom: ToastState.custom,
    dismiss: ToastState.dismiss,
    message: ToastState.message,
})