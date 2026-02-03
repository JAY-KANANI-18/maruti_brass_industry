import React from "react";

const ToolsProcess = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">QUALITY ASSURANCE</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Quality Tools and Processes</h4>
              <p className="mt-10">Modern quality tools and disciplined processes deliver precise results in every component we produce.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".3s" style={{ backgroundImage: "url(/assets/img/01.jpg)" }}>
              <h6 className="mb-20">Precision Measurement Tools</h6>
              <ul>
                <li>Facing and milling machine inspection</li>
                <li>Digital and Mitutoyo vernier / dial vernier calipers</li>
                <li>Digital micrometers</li>
                <li>Dial gauges / snap gauges</li>
                <li>Special I.D. pin gauges</li>
                <li>Thread plug gauges / thread ring gauges</li>
                <li>Magnifying eye glass at each QC station</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".5s" style={{ backgroundImage: "url(/assets/img/02.jpg)" }}>
              <h6 className="mb-20">Advanced Manufacturing Process</h6>
              <ul>
                <li>Profile projector for measurements and 3D drawing support</li>
                <li>Documentation: PDIR and spectro analysis reports for brass extruded/drawn rods</li>
                <li>TPTR forms</li>
                <li>22+ automatic machines</li>
                <li>24+ threading machines</li>
                <li>Each piece undergoes thorough manual inspection to target zero defects</li>
              </ul>
              <p className="mt-10"><strong>Zero‑defect engineering</strong> — our commitment to excellence in every part</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsProcess;
