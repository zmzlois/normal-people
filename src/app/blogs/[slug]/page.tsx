import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { baseUrl } from "@/utils/fetchFont";
import { extractHeadings } from "@/utils/extract-headings";
import { TableOfContents } from "@/components/blog-table-of-contents";
import { MdxRenderer } from "@/components/mdx-renderer";
import { getPostBySlug, getPublishedPosts } from "@/lib/mdx";

type Props = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const posts = getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { meta } = getPostBySlug(params.slug);

    const queryParams = new URLSearchParams({
      title: meta.title,
      date: meta.date,
      author: meta.author,
      description: meta.description,
    });

    return {
      title: meta.title,
      description: meta.description,
      authors: {
        name: meta.author,
        url: "https://x.com/zmzlois",
      },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: `https://loiszhao.com/blogs/${meta.slug}`,
        images: [{ url: `/api/og?${queryParams}` }],
      },
      twitter: {
        title: meta.title,
        description: meta.description,
        card: "summary_large_image",
        images: [{ url: `/api/og?${queryParams}` }],
      },
      metadataBase: new URL(baseUrl),
    };
  } catch {
    return { title: "Blog not found" };
  }
}

export default async function BlogPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  // extract headings from raw content for table of contents
  const headings = extractHeadings(content);

  // serialize mdx content for client-side rendering
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight as any],
    },
  });

  return (
    <div className="relative">
      <article className="max-w-xl py-8 mx-auto">
        <header className="my-4 lg:mb-12 mb-8">
          <div className="text-center mb-6">
            <h1 className="md:my-3 my-1 lg:text-5xl text-3xl text-slate-50 font-black leading-tight">
              {meta.title}
            </h1>
            <time
              dateTime={meta.date}
              className="block mt-4 mb-3 text-sm text-gray-500 font-light"
            >
              {format(parseISO(meta.date), "LLLL d, yyyy")}
            </time>
            <p className="mt-4 mb-6 text-slate-300 italic font-light tracking-wide text-base max-w-lg mx-auto">
              {meta.description}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200/20">
            <Link href="/" className="flex items-center gap-3 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://miro.medium.com/v2/resize:fill:88:88/1*mNpyQjptIh3VCarIzRwkUA.jpeg"
                alt={meta.author}
                className="w-10 h-10 rounded-full transition-transform group-hover:scale-105"
              />
              <span className="text-sm font-light text-zinc-400 group-hover:text-zinc-200 transition-colors">
                {meta.author}
              </span>
            </Link>
          </div>
        </header>
        <div className="my-8 prose prose-invert max-w-none">
          <MdxRenderer source={mdxSource} />
        </div>
      </article>
      {headings.length > 0 && <TableOfContents headings={headings} />}
    </div>
  );
}
