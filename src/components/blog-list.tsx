"use client";

import React, { useState, useMemo } from "react";
import Fuse from "fuse.js";
import BlogCards from "./blog-card";
import type { PostMeta } from "@/lib/mdx";

interface BlogListProps {
  posts: PostMeta[];
  tags: string[];
}

// search icon component
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

// x icon for clearing search/filter
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function BlogList({ posts, tags }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // set up fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ["title", "description", "tags"],
      threshold: 0.3,
      includeScore: true,
    });
  }, [posts]);

  // filter posts by search and tag
  const filteredPosts = useMemo(() => {
    let result = posts;

    // apply search filter
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      result = searchResults.map((r) => r.item);
    }

    // apply tag filter
    if (activeTag) {
      result = result.filter((post) => post.tags?.includes(activeTag));
    }

    return result;
  }, [posts, searchQuery, activeTag, fuse]);

  const hasFilters = searchQuery.trim() || activeTag;

  return (
    <div>
      {/* search and filter controls */}
      <div className="mb-8 space-y-4">
        {/* search input */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="Clear search"
            >
              <XIcon />
            </button>
          )}
        </div>

        {/* tag filter pills */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                activeTag === null
                  ? "bg-zinc-200 text-zinc-900"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                  activeTag === tag
                    ? "bg-zinc-200 text-zinc-900"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* results count when filtering */}
      {hasFilters && (
        <p className="text-sm text-zinc-500 mb-4">
          {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}{" "}
          found
          {activeTag && (
            <button
              onClick={() => {
                setActiveTag(null);
                setSearchQuery("");
              }}
              className="ml-2 text-zinc-400 hover:text-zinc-200 underline underline-offset-2"
            >
              Clear filters
            </button>
          )}
        </p>
      )}

      {/* post list */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <BlogCards key={post.slug} post={post} />)
      ) : (
        <p className="text-center text-zinc-500 py-8">
          No posts found. Try a different search or filter.
        </p>
      )}
    </div>
  );
}
