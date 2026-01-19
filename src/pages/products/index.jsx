import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Portfolio1 from "../../components/Portfolio1";

const Products = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Products"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "products", url: "/products" },
        ]}
      />
      <Portfolio1 />
    </MainLayout>
  );
};

export default Products;
