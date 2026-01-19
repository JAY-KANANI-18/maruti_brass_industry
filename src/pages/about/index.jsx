import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs1 from "../../components/About-Us1";
import Services1 from "../../components/Services1";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials1 from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import VisionMissionValues from "../../components/VisionMissionValues";
import Industries from "../../components/Industries";
import Downloads from "../../components/Downloads";
import StatsBand from "../../components/StatsBand";
import CTA from "../../components/CTA";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "about us", url: "/about" },
        ]}
        image="/assets/img/pg1.jpg"
      />
      <AboutUs1 />
      <StatsBand />
      <VisionMissionValues />
      <Services1 />
      <Industries />
      <SkillsCircle />
      <Team1 />
      <Testimonials1 />
      <Downloads />
      <CTA />
    </MainLayout>
  );
};

export default About;
