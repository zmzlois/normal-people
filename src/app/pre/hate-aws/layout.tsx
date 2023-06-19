import { Indie_Flower } from "next/font/google";
import Link from "next/link"
import BlogHeader from "@/components/layout/blogLayout"



export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
  }) {
 
  

  return (

      <div>
  
              {children}
          
            </div>
   
  )
}
