import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";

const Infrastructure = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Infrastructure"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "infrastructure", url: "/infrastructure" },
        ]}
      />
      <section className="section-padding">
        <div className="container">
          <p>Overview of our manufacturing infrastructure. Content coming soon.</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Infrastructure;
