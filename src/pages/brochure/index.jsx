import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Downloads from "../../components/Downloads";

const Brochure = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Brochure"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "brochure", url: "/brochure" },
        ]}
      />
      <Downloads />
    </MainLayout>
  );
};

export default Brochure;
