"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
// MDX components type
type MDXComponentsType = {
  [key: string]: React.ComponentType<any>;
};

hljs.registerLanguage("javascript", javascript);

function clsx(...args: (string | undefined | null | false)[]): string {
  return args.filter(Boolean).join(" ");
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

const components: MDXComponentsType = {
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
          className="no-underline hover:underline text-inherit cursor-pointer transition-colors hover:text-zinc-300 hover:decoration-[0.5px] underline-offset-4"
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
          "mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-loose first:mt-0",
          className
        )}
        {...props}
      >
        <a
          href={`#${id}`}
          className="no-underline hover:underline text-inherit cursor-pointer transition-colors hover:text-zinc-300 hover:decoration-[0.5px] underline-offset-4"
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
          className="no-underline hover:underline text-inherit cursor-pointer transition-colors hover:text-zinc-300 hover:decoration-[0.5px] underline-offset-4"
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
          className="no-underline hover:underline text-inherit cursor-pointer transition-colors hover:text-zinc-300 hover:decoration-[0.5px] underline-offset-4"
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
          className="no-underline hover:underline text-inherit cursor-pointer transition-colors hover:text-zinc-300 hover:decoration-[0.5px] underline-offset-4"
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
          className="no-underline hover:underline text-inherit cursor-pointer transition-colors hover:text-zinc-300 hover:decoration-[0.5px] underline-offset-4"
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
    <div className="w-full my-6 overflow-y-auto">
      <table className={clsx("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={clsx(
        "m-0 border-t border-zinc-300 p-0 even:bg-zinc-100",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={clsx(
        "border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={clsx(
        "border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={clsx(
        "mt-6 mb-4 overflow-x-auto  rounded-lg bg-zinc-800 py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={clsx(
        " text-sm bg-zinc-800 p-1 rounded-md font-mono overflow-x-auto",
        className
      )}
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
