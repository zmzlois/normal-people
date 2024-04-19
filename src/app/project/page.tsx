import EnglishAnimate from "@/components/english-animate";
import ProjectHeader from "./_component/header";
import { Toaster, toast } from "sonner";

import { Project } from "./project";
export default function ProjectPage() {
  return (
    <div>
      {" "}
      <Toaster />
      <ProjectHeader />
      <div className="py-6 flex flex-col gap-4">
        <Project />
      </div>
    </div>
  );
}
