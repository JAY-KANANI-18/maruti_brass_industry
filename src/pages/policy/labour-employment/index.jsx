import React from "react";
import MainLayout from "../../../layouts/main";
import PageHeader from "../../../components/Page-header";

const LabourEmployment = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Labour & Employment"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "policy", url: "/policy" },
          { id: 3, name: "labour & employment", url: "/policy/labour-employment" },
        ]}
      />
      <section className="section-padding">
        <div className="container">
          <p>Short policy summary will be shown here. Full content coming soon.</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default LabourEmployment;
