import { Metadata } from "next";
import React from "react";
import Resume from "@/components/cv-thing/main";

function ResumePage() {
  return (
    <div className="flex flex-col justify-center  antialiased">
      <Resume />
    </div>
  );
}

export default Resume;
