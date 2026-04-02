import "../../styles/cv.css";
import type { Metadata } from "next";
import Link from "next/link";
import EnglishAnimate from "@/components/english-animate";

const date = new Date();
export const metadata: Metadata = {
  metadataBase: new URL("https://loiszhao.com"),
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
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900">
      <div className="p-8 opacity-80">
        <Link href="/" aria-label="Back to home">
          <EnglishAnimate size="small" />
        </Link>
      </div>
      {children}
    </div>
  );
}
