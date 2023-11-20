import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({
  children,
  isMobile,
}: {
  isMobile: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header isMobile={isMobile} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
