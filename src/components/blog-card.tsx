import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import type { PostMeta } from "@/lib/mdx";

interface BlogCardsProps {
  post: PostMeta;
}

function BlogCards({ post }: BlogCardsProps) {
  return (
    <div>
      <div className="my-1">
        <Link href={post.url} className="group">
          <div className="border-b-1 border-gray-200/20 px-4 py-6">
            <h2 className="mb-1 text-lg font-light tracking-wide text-zinc-300 group-hover:text-zinc-50 transition transform">
              {post.title}
            </h2>
            <time
              dateTime={post.date}
              className="mb-2 block text-xs text-gray-600 group-hover:text-gray-300 transition transform"
            >
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <div className="text-sm [&>*]:mb-1 [&>*:last-child]:mb-0 text-gray-400 group-hover:text-gray-100 transition transform">
              {post.description}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogCards;
