import React from "react";

import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Head from "next/head";

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
      <Head>
        <meta name="description" content={blog.description}></meta>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta
          name="og:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            // More info:
            // https://vercel.com/docs/concepts/projects/environment-variables
            `${
              process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
            }/api/og`
          }
        />
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta
          property="twitter:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            // More info:
            // https://vercel.com/docs/concepts/projects/environment-variables
            `${
              process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
            }/api/og`
          }
        ></meta>
        <meta
          name="twitter:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            // More info:
            // https://vercel.com/docs/concepts/projects/environment-variables
            `${
              process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
            }/api/og`
          }
        />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <meta property="twitter:title" content={title}></meta>
        <meta property="twitter:description" content={description}></meta>
      </Head>
      <div className="container mx-auto prose dark:prose-invert">
        {children}
      </div>
    </>
  );
}

export default layout;
