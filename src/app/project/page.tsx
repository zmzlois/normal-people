import ProjectHeader from "./_component/header";
import { Toaster } from "sonner";
import { Project } from "./project";

export default function ProjectPage() {
  return (
    <div>
      <Toaster />
      <ProjectHeader />
      <div className="py-6 flex flex-col gap-4">
        <Project />
      </div>
    </div>
  );
}
