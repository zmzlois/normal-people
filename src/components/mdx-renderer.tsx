"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "./mdx";

interface MdxRendererProps {
  source: MDXRemoteSerializeResult;
}

// client-side wrapper for mdx rendering with interactive components
export function MdxRenderer({ source }: MdxRendererProps) {
  return (
    <div className="mdx">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
