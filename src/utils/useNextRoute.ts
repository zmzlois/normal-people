"use client"

import { usePathname } from "next/navigation"


export const useNextRoute = () => {
    const [_, pre, path, number] = usePathname().split("/")


    const nextNumber = number ? Number(number) + 1 : 1;
    return `/${pre}/${path}/${nextNumber}`
}