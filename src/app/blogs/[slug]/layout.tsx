import React from "react";

import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const slug = params.slug;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  const title = blog ? `${blog.title}` : "Blog";

  const description = blog ? blog.description : "By zmzlois";

  if (!blog) {
    throw new Error(`Post not found for slug: ${params.slug}`, notFound());
  }
  return (
    <>
      <div className="container mx-auto prose dark:prose-invert">
        {children}
      </div>
    </>
  );
}

export default layout;
