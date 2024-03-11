// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Mdx } from "../../../components/mdx";
import { title } from "process";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () =>
  allBlogs
    .filter((blog) => blog.published)
    .map((blog) => ({ slug: blog.slug }));

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  const queryParams = new URLSearchParams({
    title: blog!.title,
    date: blog!.date,
    author: blog!.author,
    description: blog!.description,
  });

  console.log("queryParams", queryParams);

  return {
    title: blog!.title,
    description: blog!.description,
    authors: {
      name: blog!.author,
      url: "https://x.com/zmzlois",
    },
    openGraph: {
      images: [{ url: `/api/og?${queryParams}` }],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: `/api/og?${queryParams}` }],
    },
    metadataBase: new URL("https://loiszhao.com"),
  };
}

const BlogLayout = ({ params }: Props) => {
  const slug = params.slug;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    throw new Error(`Post not found for slug: ${params.slug}`, notFound());
  }

  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="my-4 lg:mb-8 mb-4 text-center">
        <h1 className="md:my-3 my-1 lg:text-4xl text-2xl text-slate-50 font-black">
          {blog.title}
        </h1>
        <time dateTime={blog.date} className="mb-1 text-sm text-gray-600">
          {format(parseISO(blog.date), "LLLL d, yyyy")}
        </time>
        <h3 className="lg:my-3 my-2 font-normal text-base  text-slate-200">
          Author:{" "}
          <Link
            href="/"
            className="font-normal transition transform text-md text-slate-200 hover:text-zinc-200"
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
        <h3 className="mt-4 mb-2 text-slate-100 italic font-light tracking-wide text-md text-start">
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
