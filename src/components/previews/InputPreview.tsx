import { Input } from "@/components/ui/input";

export default function InputPreview() {
  return (
    <div className="space-y-3">
      <Input placeholder="Search components…" />
      <Input placeholder="Email address" type="email" />
      <Input placeholder="Disabled" disabled />
    </div>
  );
}

