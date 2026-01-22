import React from "react";
import PageHeader from "../../components/Page-header";
import Downloads from "../../components/Downloads";
import LightLayout from "../../layouts/light";

const Brochure = () => {
  return (
    <LightLayout>
      <PageHeader
        title="Brochure"
        image="/assets/img/brochure.png"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "brochure", url: "/brochure" },
        ]}
      />
      <Downloads />
    </LightLayout>
  );
};

export default Brochure;
