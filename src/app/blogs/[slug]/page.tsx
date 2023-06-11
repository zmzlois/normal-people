// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string
  }
}

export const generateStaticParams = async () =>
  allBlogs.filter((blog)=>blog.published).map((blog) => ({ slug: blog.slug }))

export const generateMetadata = ({ params }: Props) => {
  console.log('Checking params ------------------------------------')
  console.log('params', params, 'slug', params.slug)

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
      <div className="mb-8 text-center">
        <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(blog.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{blog.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
      />
    </article>
  )
}

export default BlogLayout
