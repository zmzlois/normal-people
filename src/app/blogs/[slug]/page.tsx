// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from "next/navigation";
import Link from 'next/link'
import { Mdx } from '@/components/Mdx';
import { title } from 'process';

type Props = {
  params: {
    slug: string
  }
}

const blog = allBlogs.find((blog) => blog.slug )

export const generateStaticParams = async () =>
  allBlogs.filter((blog)=>blog.published).map((blog) => ({ slug: blog.slug }))

export const generateMetadata = ({ params }: Props) => {


  const blog = allBlogs.find(
    (blog) => `${blog.slug}` === params.slug
  )
  

  if (!blog)
    throw new Error(`Post not found for slug (metadata): ${params.slug}`)
  return { title: blog.title }
}

const BlogLayout = ({ params }: Props) => {
  const slug = params.slug;
  const blog = allBlogs.find((blog) => blog.slug === slug)

  if (!blog) {
    throw new Error(`Post not found for slug: ${params.slug}`, notFound()) 
   
  } 

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center my-4">
        <h1 className="text-4xl font-black my-3">{blog.title}</h1>
        <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(blog.date), 'LLLL d, yyyy')}
        </time>
        <h3 className="text-md font-normal text-zinc-400 my-3">Author: <Link href="/" className="text-md text-zinc-400 font-normal hover:text-zinc-200 transition transform">{blog.author}</Link></h3>
        <Link href="/" className="mb-2">
          <img src="https://miro.medium.com/v2/resize:fill:88:88/1*mNpyQjptIh3VCarIzRwkUA.jpeg" alt="author" className="rounded-full h-16 w-16 mx-auto" />
          </Link>
        <h3 className="text-md font-light tracking-wide mt-4 mb-2 text-start italic"> {blog.description}</h3>
      </div>
      <hr className="border-gray-200/30" />
      <div className="my-8">
        <Mdx code={blog.body.code} />
        </div>
    </article>
  )
}

export default BlogLayout
