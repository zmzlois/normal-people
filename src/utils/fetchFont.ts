import { fontParams } from "./zodParams";

export const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';



export const fetchFont = (family: string, weight?: number, text?: string) =>
    fetch(
        `${baseUrl}/api/font?${fontParams.toSearchString({
            family,
            weight,
            text,
        })}`,
    ).then((res) => res.arrayBuffer());