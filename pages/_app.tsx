import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/SeoHead";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);

  return (
    <>
      <SeoHead title="FUOTA.IO | Easy FUOTA sessions with LNS Management" />
      <Layout isMobile={isMobile}>
        <Component {...pageProps} isMobile={isMobile} />
      </Layout>
    </>
  );
}

export default MyApp;
