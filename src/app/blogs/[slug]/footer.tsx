import Link from "next/link";

export const BlogFooter = () => {
  return (
    <footer className="py-16 mt-16 border-t border-gray-200/20">
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/blogs"
              className="text-zinc-400 font-light tracking-wide hover:text-zinc-200 transition-colors underline underline-offset-4"
            >
              More articles
            </Link>
            <span className="text-zinc-600">•</span>
            <Link
              href="/"
              className="text-zinc-400 font-light tracking-wide hover:text-zinc-200 transition-colors underline underline-offset-4"
            >
              Home
            </Link>
            <span className="text-zinc-600">•</span>
            <Link
              href="/contact"
              className="text-zinc-400 font-light tracking-wide hover:text-zinc-200 transition-colors underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
          <p className="text-xs text-zinc-500 font-light">
            © {new Date().getFullYear()} Lois Zhao. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
