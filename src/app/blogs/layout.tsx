import BlogHeader from "@/components/layout/blogLayout";

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:px-24 px-8">
      <BlogHeader />
      {children}
    </div>
  );
}
