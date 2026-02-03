import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="call-action section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="playfont mb-10">Custom-Built Components to Your Spec</h3>
            <p>
              Beyond brass, we engineer precision parts in copper, stainless steel, bronze,
              gold‑plated finishes, plastics and more.
            </p>
          </div>
          <div className="col-lg-4 text-lg-right mt-30 mt-lg-0">
            <Link href="/contact">
              <a className="btn-curve btn-color mr-10"><span>Request Custom Quote</span></a>
            </Link>
            <Link href="/products">
              <a className="btn-curve btn-bord"><span>View All Products</span></a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
