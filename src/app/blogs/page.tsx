import BlogCards from "@/components/blog-card";
import { allBlogs } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

export default function Home() {
  const allPosts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const posts = allPosts.filter((post) => post.published === true);

  return (
    <div className="mx-auto max-w-xl py-8">
      <div className="mb-8">
        <h1 className=" text-center text-2xl font-black text-slate-100">
          MindStorming
        </h1>
        <p className="text-md font-sm text-center text-slate-200">
          with writing
        </p>
      </div>
      {posts.map((post, idx) => (
        <BlogCards key={idx} {...post} />
      ))}
    </div>
  );
}
