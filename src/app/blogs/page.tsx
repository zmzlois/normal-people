import BlogCards from '@/components/BlogCards'
import { allBlogs } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

export default function Home() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className="mx-auto max-w-xl py-8">
      <div className="mb-8">
      <h1 className=" text-center text-2xl font-black">
        MindStorming
      </h1>
        <p className="text-md font-sm text-center">with writing</p> 
        </div>
      {posts.map((post, idx) => (
        <BlogCards key={idx} {...post} />
      ))}
    </div>
  )
}
