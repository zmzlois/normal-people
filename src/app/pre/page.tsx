import React from "react";
import fs from "fs";
import path from "path";
import PresentationCards from "@/components/presentation-card";
import { allPresentations } from "./pre";
import BlogHeader from "@/components/layout/blogLayout";

const presentationsDirectory = path.join(process.cwd(), "/src/app/pre");
const fileNames = fs
  .readdirSync(presentationsDirectory)
  .filter((file) => !file.endsWith(".tsx"));

function Presentation() {
  return (
    <div className="w-screen h-auto px-8 py-6 md:py-10 md:px-24">
      <BlogHeader />
      <div className="max-w-xl py-8 mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-center ">Presentations</h1>
          <p className="text-center text-md font-sm">at different places.</p>
        </div>
        {allPresentations.map((file, idx) => (
          <PresentationCards
            key={idx}
            href={`/pre/${file.slug}`}
            title={file.title}
            date={file.date}
            description={file.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Presentation;
