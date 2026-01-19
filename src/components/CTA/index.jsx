import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="call-action section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="playfont mb-10">Need a Custom Solution?</h3>
            <p>
              Not just Brass, we provide exceptionally engineered products made up of:
              Copper, Stainless steel, Bronze, Gold plated parts, Plastic parts and much more.
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
