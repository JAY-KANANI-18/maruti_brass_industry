import React from "react";
import PageHeader from "../../components/Page-header";
import CTA from "../../components/CTA";
import LightLayout from "../../layouts/light";
import AboutIntro from "../../components/AboutUnique/AboutIntro";
import Capabilities from "../../components/AboutUnique/Capabilities";
import Milestones from "../../components/AboutUnique/Milestones";
import AboutCertifications from "../../components/AboutUnique/Certifications";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <LightLayout>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "about us", url: "/about" },
        ]}
        image="/assets/img/about/about-hero2.png"
      />
      <AboutIntro />
      <Capabilities />
      <Milestones />
      <AboutCertifications />
      {/* <CTA /> */}
    </LightLayout>
  );
};

export default About;
