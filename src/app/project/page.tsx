import EnglishAnimate from "@/components/english-animate";
import ProjectHeader from "./_component/header";
import { Toaster, toast } from "sonner";
import Sonner from "./_component/sonner-experiment";
import { DepthBaseBlur } from "./_component/depth-base-blur";
export default function ProjectPage() {
  return (
    <div>
      {" "}
      <Toaster />
      <ProjectHeader />
      <div className="py-6 flex flex-col gap-4">
        {" "}
        <Sonner />
        <DepthBaseBlur />
      </div>
    </div>
  );
}
