import { Textarea } from "@/components/ui/textarea";

export default function TextareaPreview() {
  return (
    <div className="space-y-3">
      <Textarea placeholder="Tell us about your project…" />
      <Textarea placeholder="Disabled textarea" disabled />
    </div>
  );
}



