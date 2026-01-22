import React from "react";
import PageHeader from "../../components/Page-header";
import Portfolio1 from "../../components/Portfolio1";
import LightLayout from "../../layouts/light";

const Products = () => {
  return (
    <LightLayout>
      <PageHeader
        title="Products"
        image="/assets/img/products/products-hero.png"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "products", url: "/products" },
        ]}
      />
      <Portfolio1 />
    </LightLayout>
  );
};

export default Products;
