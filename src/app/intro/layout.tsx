import BlogHeader from "@/components/layout/blogLayout";
import "../../styles/cv.css";
import type { Metadata } from "next";
const date = new Date();
export const metadata: Metadata = {
  title: "Lois Zhao - Portfolio",
  description: `Updated on ${date}`,
  openGraph: {
    type: "website",
    url: "https://normal-people.com",
    title: "Lois Zhao - Portfolio",
    description: `Updated on ${date}`,
    siteName: "Lois Zhao - Portfolio",
    images: [
      {
        url: "https://normal-people.com/og-image.png",
      },
    ],
  },
};
export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className=" bg-zinc-900">{children}</div>;
}
