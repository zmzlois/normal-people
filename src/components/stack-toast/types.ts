import { info } from "console";
import React from "react"


// define the basic type of a toast
export type ToastTypes = "normal" | "action" | "success" | "info" | "warning" | "error" | "loading" | "default"



export type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>);

// ToastData should include server response that contains response.ok and response.status | or other types of data
export type PromiseData<ToastData = any> = PromiseExternalToast & {
    loading?: string | React.ReactNode;
    success?: string | React.ReactNode | ((data: ToastData) => string | React.ReactNode);
    error?: string | React.ReactNode | ((error: any) => string | React.ReactNode);
    description?: string | React.ReactNode | ((data: ToastData) => string | React.ReactNode);
    finally?: () => void | Promise<void>;

}
export type PromiseExternalToast = Omit<ExternalToast, "description">;

// is this external toast like a toast that is created by the user?
export type ExternalToast = Omit<ToastT, 'id' | 'type' | 'title' | 'jsx' | 'delete' | 'promise'> & {
    id?: number | string;
};

export interface ToastT {
    id?: number | string; // should leave this undefined?
    title?: string | React.ReactNode;
    type?: ToastTypes;
    icon?: React.ReactNode;
    jsx?: React.ReactNode;
    invert?: boolean;
    closeButton?: boolean;
    dismissible?: boolean;
    description?: string | React.ReactNode;
    duration?: number;
    delete?: boolean;
    important?: boolean;
    action?: {
        label: React.ReactNode;
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    };
    cancel?: {
        label: React.ReactNode;
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    };
    onDismiss?: (toast: ToastT) => void;
    onAutoClose?: (toast: ToastT) => void;
    promise?: PromiseT;
    cancelButtonStyle?: React.CSSProperties | string; // add string as a type in case its tailwind classes
    actionButtonStyle?: React.CSSProperties | string; // TODO: will see if this is needed as string
    style?: React.CSSProperties | string;
    unstyled?: boolean; // FIXME: do we need this
    className?: string;
    classNames?: ToastClassnames;
    descriptionClassName?: string;
    position?: Position;

}

export interface ToastClassnames {
    toast?: string;
    title?: string;
    description?: string;
    loader?: string;
    closeButton?: string;
    cancelButton?: string;
    actionButton?: string;
    success?: string;
    error?: string;
    info?: string;
    warning?: string;
    loading?: string;
    normal?: string;
    default?: string;
}

export type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";


export interface ToastToDismiss {
    id: number | string;
    dismiss: boolean;
}