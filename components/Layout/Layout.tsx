import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, isMobile }: any) => {
  return (
    <>
      <Header isMobile={isMobile} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
