import { BlogList } from "@/components/blog-list";
import { getPublishedPosts, getAllTags } from "@/lib/mdx";

export default function BlogsPage() {
  const posts = getPublishedPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-xl py-8">
      <div className="mb-8">
        <h1 className="text-center text-2xl font-black text-slate-100">
          MindStorming
        </h1>
        <p className="text-md font-sm text-center text-slate-200">
          with writing
        </p>
      </div>
      <BlogList posts={posts} tags={tags} />
    </div>
  );
}
