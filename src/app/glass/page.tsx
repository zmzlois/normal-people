import { Background } from "./background";
import { Glass } from "./glass";

export default function GlassPage() {
  return (
    <div className="w-screen h-[6500px] block">
      <Background />
      <Glass />
    </div>
  );
}
