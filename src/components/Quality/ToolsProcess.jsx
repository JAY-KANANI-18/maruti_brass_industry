import React from "react";

const ToolsProcess = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">QUALITY ASSURANCE</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Our Quality Tools & Process</h4>
              <p className="mt-10">Our state-of-the-art quality tools and rigorous processes ensure unparalleled precision in every component we manufacture.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".3s" style={{ backgroundImage: "url(/assets/img/01.jpg)" }}>
              <h6 className="mb-20">Precision Measurement Tools</h6>
              <ul>
                <li>Facing, Milling Machine Inspection</li>
                <li>Digital & Mitutoyo Vernier / Dial Vernier Caliper</li>
                <li>Digital Micro Meters</li>
                <li>Dial Gauges / Snap Gauges</li>
                <li>Special I.D Pin Gauges</li>
                <li>Thread Plug Gauges / Thread Ring Gauges</li>
                <li>Magnifying Eye Glass for every quality employee</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".5s" style={{ backgroundImage: "url(/assets/img/02.jpg)" }}>
              <h6 className="mb-20">Advanced Manufacturing Process</h6>
              <ul>
                <li>Profile Projection hi-tech machinery capable of 3D AutoCAD drawings</li>
                <li>Documentation: PDIR & Spectro Analysis Lab Report for brass extruded drawn rod materials</li>
                <li>TPTR Forms</li>
                <li>22+ Automatic machines</li>
                <li>24+ threading machines</li>
                <li>Each piece undergoes rigorous manual inspection for zero defects</li>
              </ul>
              <p className="mt-10"><strong>Zero Defect Engineering</strong> — Our commitment to excellence in every component</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsProcess;
