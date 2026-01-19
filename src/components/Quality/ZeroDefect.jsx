import React from "react";

const ZeroDefect = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">Zero Defect Policy</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Our Cornerstone of Quality Management</h4>
              <p className="mt-10">
                We believe every defect is preventable through meticulous engineering, manufacturing processes,
                and rigorous quality control. This commitment is central to delivering unparalleled excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".3s" style={{ backgroundImage: "url(/assets/img/01.jpg)" }}>
              <ul>
                <li>100% inspection of all critical components.</li>
                <li>Statistical Process Control (SPC) for continuous monitoring.</li>
                <li>Rigorous preventive maintenance schedules for all equipment.</li>
                <li>ISO 9001:2015 Certified</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroDefect;
