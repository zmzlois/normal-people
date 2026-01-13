import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Mdx } from "@/components/mdx";
import { Metadata } from "next";
import { baseUrl } from "@/utils/fetchFont";
import { extractHeadings } from "@/utils/extract-headings";
import { TableOfContents } from "@/components/blog-table-of-contents";

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
  const blog = allBlogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return { title: "Blog not found" };
  }

  const queryParams = new URLSearchParams({
    title: blog.title,
    date: blog.date,
    author: blog.author,
    description: blog.description,
  });

  return {
    title: blog.title,
    description: blog.description,
    authors: {
      name: blog.author,
      url: "https://x.com/zmzlois",
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://loiszhao.com/blogs/${blog.slug}`,
      images: [{ url: `/api/og?${queryParams}` }],
    },
    twitter: {
      title: blog.title,
      description: blog.description,
      card: "summary_large_image",
      images: [{ url: `/api/og?${queryParams}` }],
    },
    metadataBase: new URL(baseUrl),
  };
}

const BlogLayout = ({ params }: Props) => {
  const slug = params.slug;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    throw new Error(`Post not found for slug: ${params.slug}`, notFound());
  }

  // extract headings from the blog content
  // try to get raw content from _raw.source.body or fallback to empty string
  const rawContent = (blog as any)._raw?.source?.body || blog.body?.raw || "";
  const headings = extractHeadings(rawContent);

  return (
    <div className="relative">
      <article className="max-w-xl py-8 mx-auto">
        <header className="my-4 lg:mb-12 mb-8">
          <div className="text-center mb-6">
            <h1 className="md:my-3 my-1 lg:text-5xl text-3xl text-slate-50 font-black leading-tight">
              {blog.title}
            </h1>
            <time
              dateTime={blog.date}
              className="block mt-4 mb-3 text-sm text-gray-500 font-light"
            >
              {format(parseISO(blog.date), "LLLL d, yyyy")}
            </time>
            <p className="mt-4 mb-6 text-slate-300 italic font-light tracking-wide text-base max-w-lg mx-auto">
              {blog.description}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200/20">
            <Link href="/" className="flex items-center gap-3 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://miro.medium.com/v2/resize:fill:88:88/1*mNpyQjptIh3VCarIzRwkUA.jpeg"
                alt={blog.author}
                className="w-10 h-10 rounded-full transition-transform group-hover:scale-105"
              />
              <span className="text-sm font-light text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {blog.author}
              </span>
            </Link>
          </div>
        </header>
        <div className="my-8 prose prose-invert max-w-none">
          <Mdx code={blog.body.code} />
        </div>
      </article>
      {headings.length > 0 && <TableOfContents headings={headings} />}
    </div>
  );
};

export default BlogLayout;
