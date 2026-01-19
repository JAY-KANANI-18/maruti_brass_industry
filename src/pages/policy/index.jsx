import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Link from "next/link";

const Policy = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Policy"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "policy", url: "/policy" },
        ]}
      />
      <section className="section-padding">
        <div className="container">
          <ul>
            <li><Link href="/policy/labour-employment"><a>Labour & Employment</a></Link></li>
            <li><Link href="/policy/harassment"><a>Harassment</a></Link></li>
            <li><Link href="/policy/visitor-policy"><a>Visitor Policy</a></Link></li>
          </ul>
        </div>
      </section>
    </MainLayout>
  );
};

export default Policy;
