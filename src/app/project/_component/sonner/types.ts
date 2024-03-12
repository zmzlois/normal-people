import React from "react";

export type ToastTypes = "normal" | "action" | "success" | "info" | "warning" | "error" | "loading" | "default";

export type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>);

export type PromiseExternalToast = Omit<ExternalToast, "description">;

export interface ToastClassnames {
    toast?: string;
    title?: string;
    description?: string;
}

export interface ToastT {
    id: number | string;
    title?: string | React.ReactNode;
    type?: ToastTypes;
    icon?: React.ReactNode;
    jsx?: React.ReactNode;
    invert?: boolean;
    closeButton?: boolean;
    dismissible?: boolean;
    description?: React.ReactNode;
    duration?: number;
    delete?: boolean;
    important?: boolean;
    action?: {
        label: React.ReactNode;
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    };
    cancel?: {
        label: React.ReactNode;
        onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    };
    onDismiss?: (toast: ToastT) => void;
    onAutoClose?: (toast: ToastT) => void;
    promise: PromiseT;
    cancelButtonStyle?: React.CSSProperties;
    actionButtonStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    unstyled?: boolean; // can remove this
    className?: string;
    classNames?: ToastClassnames;
    descriptionClassName?: string;
    position?: Position;
}

export type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";

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
    default?: string;
}


export type ExternalToast = Omit<ToastT, "id" | "type" | "title" | "jsx" | "delete" | "promise"> & {
    id?: number | string;
}