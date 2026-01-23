/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import appData from "../data/app.json";

const LightLayout = ({ children, footerClass }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;

    const isMobile = () => window.innerWidth < 990;

    const updateLogo = () => {
      const scrolled = window.pageYOffset > 300;

      if (scrolled) {
        navbar.classList.add("nav-scroll");
        logo.src = isMobile()
          ? appData.mobileDarkLogo
          : appData.darkLogo;
      } else {
        navbar.classList.remove("nav-scroll");
        logo.src = isMobile()
          ? appData.mobileLightLogo
          : appData.lightLogo;
      }
    };

    // Initial check
    updateLogo();

    window.addEventListener("scroll", updateLogo);
    window.addEventListener("resize", updateLogo);

    return () => {
      window.removeEventListener("scroll", updateLogo);
      window.removeEventListener("resize", updateLogo);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style-light.css" />
      </Head>
      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <Footer classText={footerClass} />
    </>
  );
};

export default LightLayout;
