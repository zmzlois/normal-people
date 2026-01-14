"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

// mdx components type
type MDXComponentsType = {
  [key: string]: React.ComponentType<any>;
};

// helper for combining class names
function clsx(...args: (string | undefined | null | false)[]): string {
  return args.filter(Boolean).join(" ");
}

// helper to extract text content from react children (for copy functionality)
function extractTextFromChildren(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }
  if (React.isValidElement(children) && children.props?.children) {
    return extractTextFromChildren(children.props.children);
  }
  return "";
}

// code block wrapper with copy button
function CodeBlock({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    const text = extractTextFromChildren(children);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("failed to copy text:", err);
    }
  };

  return (
    <div className="relative group">
      <pre
        className={clsx(
          "mt-6 mb-4 rounded-lg bg-zinc-800 py-4 px-4 overflow-x-auto",
          className
        )}
        {...props}
      >
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label="Copy code"
        title="Copy code"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}

// helper function to generate id from heading text
function generateId(children: React.ReactNode): string {
  // extract text from children (handles strings, numbers, and nested elements)
  const extractText = (node: React.ReactNode): string => {
    if (typeof node === 'string' || typeof node === 'number') {
      return String(node);
    }
    if (Array.isArray(node)) {
      return node.map(extractText).join('');
    }
    if (React.isValidElement(node) && node.props?.children) {
      return extractText(node.props.children);
    }
    return '';
  };

  const text = extractText(children);
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// mdx components for styling rendered markdown content
export const components: MDXComponentsType = {
  h1: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(children);
    return (
      <h1
        id={id}
        className={clsx(
          "mt-8 scroll-m-20 text-4xl font-bold tracking-loose",
          className
        )}
        {...props}
      >
        <a
          href={`#${id}`}
          className="relative no-underline text-inherit cursor-pointer transition-all duration-500 hover:text-zinc-300 after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 after:bg-zinc-300 after:transition-all after:duration-500 hover:after:w-full"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', `#${id}`);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          aria-label={`Link to ${typeof children === 'string' ? children : 'section'}`}
        >
          {children}
        </a>
      </h1>
    );
  },
  h2: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(children);
    return (
      <h2
        id={id}
        className={clsx(
          "mt-10 scroll-m-20 text-3xl font-semibold tracking-loose first:mt-0",
          className
        )}
        {...props}
      >
        <a
          href={`#${id}`}
          className="relative no-underline text-inherit cursor-pointer transition-all duration-500 hover:text-zinc-300 after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 after:bg-zinc-300 after:transition-all after:duration-500 hover:after:w-full"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', `#${id}`);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          aria-label={`Link to ${typeof children === 'string' ? children : 'section'}`}
        >
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(children);
    return (
      <h3
        id={id}
        className={clsx(
          "mt-8 scroll-m-20 text-2xl font-semibold tracking-loose",
          className
        )}
        {...props}
      >
        <a
          href={`#${id}`}
          className="relative no-underline text-inherit cursor-pointer transition-all duration-500 hover:text-zinc-300 after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 after:bg-zinc-300 after:transition-all after:duration-500 hover:after:w-full"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', `#${id}`);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          aria-label={`Link to ${typeof children === 'string' ? children : 'section'}`}
        >
          {children}
        </a>
      </h3>
    );
  },
  h4: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(children);
    return (
      <h4
        id={id}
        className={clsx(
          "mt-8 scroll-m-20 text-xl font-semibold tracking-loose",
          className
        )}
        {...props}
      >
        <a
          href={`#${id}`}
          className="relative no-underline text-inherit cursor-pointer transition-all duration-500 hover:text-zinc-300 after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 after:bg-zinc-300 after:transition-all after:duration-500 hover:after:w-full"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', `#${id}`);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          aria-label={`Link to ${typeof children === 'string' ? children : 'section'}`}
        >
          {children}
        </a>
      </h4>
    );
  },
  h5: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(children);
    return (
      <h5
        id={id}
        className={clsx(
          "mt-8 scroll-m-20 text-lg font-semibold tracking-loose",
          className
        )}
        {...props}
      >
        <a
          href={`#${id}`}
          className="relative no-underline text-inherit cursor-pointer transition-all duration-500 hover:text-zinc-300 after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 after:bg-zinc-300 after:transition-all after:duration-500 hover:after:w-full"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', `#${id}`);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          aria-label={`Link to ${typeof children === 'string' ? children : 'section'}`}
        >
          {children}
        </a>
      </h5>
    );
  },
  h6: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = generateId(children);
    return (
      <h6
        id={id}
        className={clsx(
          "mt-8 scroll-m-20 text-base font-semibold tracking-loose",
          className
        )}
        {...props}
      >
        <a
          href={`#${id}`}
          className="relative no-underline text-inherit cursor-pointer transition-all duration-500 hover:text-zinc-300 after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 after:bg-zinc-300 after:transition-all after:duration-500 hover:after:w-full"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', `#${id}`);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          aria-label={`Link to ${typeof children === 'string' ? children : 'section'}`}
        >
          {children}
        </a>
      </h6>
    );
  },
  a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (!href) return null;
    const { href: _, ...linkProps } = props as React.ComponentProps<typeof Link>;
    return (
      <Link
        href={href}
        className={clsx(
          "font-light text-zinc-400 hover:text-zinc-50 transform transition underline underline-offset-4",
          className
        )}
        {...linkProps}
      />
    );
  },
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={clsx(
        "leading-7 text-slate-200 font-light [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={clsx("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={clsx("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={clsx("mt-2 font-light tracking-wide", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={clsx(
        "mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-400 [&>*]:text-zinc-400",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={clsx(
        "rounded-md border-2 border-sky-200 justify-self-center mt-4 mb-1",
        className
      )}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-zinc-200 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full my-6 overflow-x-auto">
      <table className={clsx("w-full border-collapse text-sm", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={clsx(
        "m-0 border-t border-zinc-700 p-0 even:bg-zinc-800/50",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={clsx(
        "border border-zinc-700 px-4 py-2 text-left font-semibold text-zinc-200 bg-zinc-800 [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={clsx(
        "border border-zinc-700 px-4 py-2 text-left text-zinc-300 [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <CodeBlock className={className} {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={clsx(
        "text-xs bg-zinc-800 p-1 rounded-md font-light font-mono whitespace-pre-wrap break-words",
        className
      )}
      {...props}
    />
  ),
  Image,
};
