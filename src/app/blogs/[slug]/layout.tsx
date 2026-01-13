import React from "react";
import { BlogFooter } from "./footer";

// layout for individual blog post pages
function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      {children}
      <BlogFooter />
    </div>
  );
}

export default BlogPostLayout;
