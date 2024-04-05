import { Background } from "./background";
import { Glass } from "./glass";
import { Audio } from "./audio";
import { Metadata, ResolvingMetadata } from "next";
import { siteConfig } from "@/components/cv-thing/side";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: "Glass in the forest",
    description: "Recreating Shuding's glass effect",
    authors: {
      name: siteConfig.name,
      url: "https://x.com/zmzlois",
    },
    openGraph: {
      title: "Glass in the forest",
      description: "Recreating Shuding's glass effect",
      url: `https://loiszhao.com/glass`,
      images: ["/glass-background.png"],
    },
    twitter: {
      title: "Glass in the forest",
      description: "Recreating Shuding's glass effect",
      card: "summary_large_image",
      images: ["/glass-background.png"],
    },
    metadataBase: new URL("https://loiszhao.com"),
  };
}

export default function GlassPage() {
  return (
    <div className="w-screen h-[14000px] block">
      <Background />
      <Glass width="w-[60vw]" />
      <Audio />
    </div>
  );
}
