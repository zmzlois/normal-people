

import LeftIcon from "@/components/icons/left"
import Link from "next/link"
import BlogLayout from "@/components/layout/blogLayout"


export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
  }) {
 


  return (
    <div className="md:py-10 py-6 md:px-24 px-8 justify-between">
      <BlogLayout  />
      {children}
    </div>
  )
}
