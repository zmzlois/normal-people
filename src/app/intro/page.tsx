import { Metadata } from "next";
import React from "react";
import Resume from "@/components/cv-thing/main";

export const metadata: Metadata = {
  title: "Zhaomian Zhao Resume",
  description: "Updated on 2023-07-10",
};

function ResumePage() {
  return (
    <div className="flex flex-col justify-center  antialiased">
      <Resume />
    </div>
  );
}

export default Resume;
