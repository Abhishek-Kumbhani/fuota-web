// pages/index.tsx
import Feature from "@/components/Feature"; // Assuming you have this component

export default function Features({ isMobile }: { isMobile: boolean }) {
  return <Feature isMobile={isMobile} />;
}
