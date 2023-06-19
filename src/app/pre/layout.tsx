

import { Indie_Flower } from "next/font/google"
import Link from "next/link"
import BlogHeader from "@/components/layout/blogLayout"

export const indie_flower = Indie_Flower({
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
})

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
  }) {
 


  return (
      <div className={`${indie_flower.className}`}>
              {children}      
    </div>
  )
}
