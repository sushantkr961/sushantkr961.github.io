import { Desktop } from "@/components/desktop/Desktop";

export const metadata = {
  title: "Desktop Mode",
  description: "Sushant Kumar's portfolio as a macOS-style desktop.",
};

export default function DesktopPage() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <Desktop />
    </div>
  );
}
