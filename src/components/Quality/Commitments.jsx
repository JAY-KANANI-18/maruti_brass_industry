import React from "react";

const items = [
  "100% Manual as well as Machine Inspection",
  "Zero Defect Policy",
  "Statistical Process Control Monitoring",
  "In-house Quality Check Systems",
];

const Commitments = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">Our Promise</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Quality Commitments</h4>
              <p className="mt-10">Our unwavering commitment to quality ensures that every component we manufacture meets the highest standards of precision and reliability.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".3s" style={{ backgroundImage: "url(/assets/img/01.jpg)" }}>
              <ul>
                {items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitments;
