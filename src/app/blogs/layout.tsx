import LeftIcon from "@/components/assets/icons";
import Link from "next/link";
import BlogHeader from "@/components/layout/blogLayout";
import { BlogFooter } from "./[slug]/footer";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" md:px-24 px-8">
      <BlogHeader />
      {children}
    </div>
  );
}
