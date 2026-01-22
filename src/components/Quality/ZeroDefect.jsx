import React from "react";

const ZeroDefect = () => {
  return (
    <section className="zero-defect section-padding">
      <div className="container">
        {/* Heading */}
        <div className="section-head text-center mb-70">
          <h6 className="wow fadeInDown">Zero Defect Policy</h6>
          <h4 className="playfont wow flipInX">
            Our Cornerstone of Quality Management
          </h4>
          <p className="mt-15">
            We believe every defect is preventable through meticulous engineering,
            disciplined manufacturing processes, and rigorous quality control.
            This commitment drives consistent, measurable excellence.
          </p>
        </div>

        {/* Content */}
        <div className="row">
  <div className="col-12">
    <div className="zero-defect-card full-width wow fadeInUp">

      <div className="zero-defect-grid">
        {/* LEFT – List */}
        <ul className="zero-defect-list">
          <li>100% inspection of all critical components</li>
          <li>Statistical Process Control (SPC) for continuous monitoring</li>
          <li>Rigorous preventive maintenance across all equipment</li>
          <li>ISO 9001:2015 certified quality management system</li>
        </ul>

        {/* RIGHT – Anchor */}
        <div className="zero-defect-anchor">
          <span className="anchor-label">Quality Promise</span>
          <h3>Zero<br />Defects</h3>
          <p>
            Built on discipline, driven by data,
            sustained by accountability.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default ZeroDefect;
