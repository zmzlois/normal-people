// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Mdx } from "../../../components/Mdx";
import { title } from "process";

type Props = {
  params: {
    slug: string;
  };
};

const blog = allBlogs.find((blog) => blog.slug);

export const generateStaticParams = async () =>
  allBlogs
    .filter((blog) => blog.published)
    .map((blog) => ({ slug: blog.slug }));

export const generateMetadata = ({ params }: Props) => {
  const blog = allBlogs.find((blog) => `${blog.slug}` === params.slug);

  if (!blog)
    throw new Error(`Post not found for slug (metadata): ${params.slug}`);
  return { title: blog.title };
};

const BlogLayout = ({ params }: Props) => {
  const slug = params.slug;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    throw new Error(`Post not found for slug: ${params.slug}`, notFound());
  }

  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="my-4 mb-8 text-center">
        <h1 className="my-3 text-4xl font-black">{blog.title}</h1>
        <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(blog.date), "LLLL d, yyyy")}
        </time>
        <h3 className="my-3 font-normal text-md text-zinc-400">
          Author:{" "}
          <Link
            href="/"
            className="font-normal transition transform text-md text-zinc-400 hover:text-zinc-200"
          >
            {blog.author}
          </Link>
        </h3>
        <Link href="/" className="mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://miro.medium.com/v2/resize:fill:88:88/1*mNpyQjptIh3VCarIzRwkUA.jpeg"
            alt="author"
            className="w-16 h-16 mx-auto rounded-full"
          />
        </Link>
        <h3 className="mt-4 mb-2 italic font-light tracking-wide text-md text-start">
          {" "}
          {blog.description}
        </h3>
      </div>
      <hr className="border-gray-200/30" />
      <div className="my-8">
        <Mdx code={blog.body.code} />
      </div>
    </article>
  );
};

export default BlogLayout;
