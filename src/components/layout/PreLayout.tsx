
import Link from "next/link"

export default function PreLayout({
  children, href// will be a page or nested layout
}: {
  children: React.ReactNode,
  href: string
}) {
 


  return (
    <Link href={`${href}`} className=" w-[100vw] h-[100vh] text-center flex flex-col content-center items-center justify-center p-24">
            {children}   
      </Link>
               
  
  )
}
