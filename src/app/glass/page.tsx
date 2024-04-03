import { Background } from "./background";
import { Glass } from "./glass";
import { Audio } from "./audio";

export default function GlassPage() {
  return (
    <div className="w-screen h-[14000px] block">
      <Background />
      <Glass />
      <Audio />
    </div>
  );
}
