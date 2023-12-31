// pages/index.tsx
import Hero from "@/components/Hero";
import Testimoni from "@/components/Testimoni";
import Feature from "@/components/Feature"; // Assuming you have this component

export default function Home({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <Hero />
      <Feature isMobile={isMobile} />
      <Testimoni />
    </>
  );
}
