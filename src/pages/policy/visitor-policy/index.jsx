import React from "react";
import MainLayout from "../../../layouts/main";
import PageHeader from "../../../components/Page-header";

const VisitorPolicy = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Visitor Policy"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "policy", url: "/policy" },
          { id: 3, name: "visitor policy", url: "/policy/visitor-policy" },
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

export default VisitorPolicy;
