// mdx utilities for loading and parsing blog posts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blogs");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  published: boolean;
  featured?: boolean;
  tags?: string[];
  repository?: string;
  ogImage?: string;
  image?: string;
  url: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}

// get all mdx file slugs
function getPostSlugs(): string[] {
  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

// parse frontmatter from a single mdx file
function parsePost(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      slug,
      title: data.title || "",
      date: data.date ? new Date(data.date).toISOString() : "",
      description: data.description || "",
      author: data.author || "",
      published: data.published ?? false,
      featured: data.featured ?? false,
      tags: data.tags || [],
      repository: data.repository,
      ogImage: data.ogImage,
      image: data.image,
      url: `/blogs/${slug}`,
    },
    content,
  };
}

// get all posts sorted by date (newest first)
export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => parsePost(slug).meta);

  // sort by date descending
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// get a single post by slug
export function getPostBySlug(slug: string): Post {
  return parsePost(slug);
}

// get all unique tags from all posts
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tagSet.add(tag));
    }
  });

  return Array.from(tagSet).sort();
}

// get published posts only
export function getPublishedPosts(): PostMeta[] {
  return getAllPosts().filter((post) => post.published);
}

// get featured posts only
export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((post) => post.featured && post.published);
}
