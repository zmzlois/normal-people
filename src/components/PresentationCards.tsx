import React from 'react'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'



function PresentationCards({ href, title, date, description }: {
    href: string
    title: string
    date: string
    description: string
} ) {
    
  return (
    <div>
    <div className=" my-1 ">
       <Link
            href={href}
            className=" group "
          >
      <div className="border-b-1 border-gray-200/20   px-4 py-6">

        <h2 className="mb-1 text-lg font-light tracking-wide text-zinc-300 group-hover:text-zinc-50 transition transform">
         
            {title}
         
        </h2>
        <time dateTime={date} className="mb-2 block text-xs text-gray-600 group-hover:text-gray-300 transition transform">
          {/* {format(parseISO(meta.date), 'LLLL d, yyyy')} */}
        </time>
        <div
          className="text-sm [&>*]:mb-1 [&>*:last-child]:mb-0 text-gray-400 group-hover:text-gray-100 transition transform"
          
          >{description}</div>
      </div>
       </Link>
      </div>
      </div>
  )
}

export default PresentationCards