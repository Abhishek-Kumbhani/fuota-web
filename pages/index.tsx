import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/Layout";
import Testimoni from "@/components/Testimoni";
import SeoHead from "@/components/SeoHead";

export const getServerSideProps = (ctx: any) => {
  const userAgent = ctx.req.headers["user-agent"];

  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  return {
    props: { isMobile },
  };
};

export default function Home({ isMobile }: any) {
  return (
    <>
      <SeoHead title="FUOTA.IO | Easy FUOTA sessions with LNS Management" />
      <Layout isMobile={isMobile}>
        <Hero />
        <Feature isMobile={isMobile} />
        <Testimoni />
      </Layout>
    </>
  );
}
