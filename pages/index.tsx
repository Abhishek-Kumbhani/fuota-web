import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/Layout";
import Pricing from "@/components/Pricing";
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
      <SeoHead title="LaslesVPN Landing Page" />
      <Layout isMobile={isMobile}>
        <Hero />
        <Feature isMobile={isMobile} />
        <Pricing />
      </Layout>
    </>
  );
}
