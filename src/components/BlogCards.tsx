import React from 'react'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allBlogs, Blog } from 'contentlayer/generated'

function BlogCards(blog: Blog) {
  return (
    <div>
       <Link
            href={blog.url}
            className=""
          >
      <div className="mb-8">

        <h2 className="mb-1 text-xl text-blue-700 hover:text-blue-900 dark:text-blue-400">
         
            {blog.title}
         
        </h2>
        <time dateTime={blog.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(blog.date), 'LLLL d, yyyy')}
        </time>
        <div
          className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
          
          >{blog.description}</div>
      </div>
       </Link>
    </div>
  )
}

export default BlogCards
