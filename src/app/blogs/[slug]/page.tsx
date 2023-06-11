// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from "next/navigation";
import Link from 'next/link'
import { Mdx } from '@/components/Mdx';

type Props = {
  params: {
    slug: string
  }
}

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
      <div className="mb-8 text-center my-6">
        <h1 className="text-6xl font-black my-3">{blog.title}</h1>
        <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(blog.date), 'LLLL d, yyyy')}
        </time>
        <h3 className="text-md font-normal text-zinc-400 my-3">Author: <Link href="/" className="text-md text-zinc-400 font-normal hover:text-zinc-200 transition transform">{blog.author}</Link></h3>
        <Link href="/">
          <img src="https://miro.medium.com/v2/resize:fill:88:88/1*mNpyQjptIh3VCarIzRwkUA.jpeg" alt="author" className="rounded-full h-16 w-16 mx-auto" />
          </Link>
        <h3 className="text-md font-light tracking-wide my-3 text-start">Summary: {blog.description}</h3>
      </div>
      <div className="my-8">
        <Mdx code={blog.body.code} />
        </div>
    </article>
  )
}

export default BlogLayout
