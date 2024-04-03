import { Background } from "./background";
import { Glass } from "./glass";

export default function GlassPage() {
  return (
    <div className="w-screen h-[12000px] block">
      <Background />
      <Glass />
    </div>
  );
}
