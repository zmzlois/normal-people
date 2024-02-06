import BlogHeader from "@/components/layout/blogLayout";
import "../../styles/cv.css";
export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className=" bg-zinc-900">{children}</div>;
}
