import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import SkillsCircle from "../../components/Skills-circle";
import Downloads from "../../components/Downloads";
import QualityHero from "../../components/Quality/Hero";
import PillarsCols from "../../components/Quality/PillarsCols";
import CommitmentsCols from "../../components/Quality/CommitmentsCols";
import Certifications from "../../components/Quality/Certifications";
import ToolsSplit from "../../components/Quality/ToolsSplit";
import Steps from "../../components/Quality/Steps";
import ZeroDefect from "../../components/Quality/ZeroDefect";
import Recognition from "../../components/Quality/Recognition";
import MakeInIndia from "../../components/Quality/MakeInIndia";
import Video from "../../components/Video";
import LightLayout from "../../layouts/light";

const Quality = () => {
  return (
    <LightLayout>
      <PageHeader
        title="Quality Assurance"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "quality", url: "/quality" },
        ]}
        image="/assets/img/quality/quality-hero.png"
      />
      <QualityHero />
      <PillarsCols />
      <Steps />
      <ToolsSplit />
      <CommitmentsCols />
      <Video />
      <Certifications />
      <ZeroDefect />
      <Recognition />
      <MakeInIndia />
      <SkillsCircle />
      <Downloads />
    </LightLayout>
  );
};

export default Quality;
