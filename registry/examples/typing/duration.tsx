import { Typing } from "@/registry/components/loading-ui/typing";

export function TypingDuration() {
  return (
    <div className="flex items-end gap-8 *:w-16">
      <Typing className="animation-duration-[700ms]" />
      <Typing className="animation-duration-[1s]" />
      <Typing className="animation-duration-[1.5s]" />
    </div>
  );
}
