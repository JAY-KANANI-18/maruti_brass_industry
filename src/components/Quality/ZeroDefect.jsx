import React from "react";

const ZeroDefect = () => {
  return (
    <section className="zero-defect section-padding">
      <div className="container">
        {/* Heading */}
        <div className="section-head text-center mb-70">
          <h6 className="wow fadeInDown">Zero Defect Policy</h6>
          <h4 className="playfont wow flipInX">
            The Foundation of Our Quality System
          </h4>
          <p className="mt-15">
            Every defect can be prevented through sound engineering, disciplined production,
            and rigorous checks. This mindset delivers consistent, measurable results.
          </p>
        </div>

        {/* Content */}
        <div className="row">
  <div className="col-12">
    <div className="zero-defect-card full-width wow fadeInUp">

      <div className="zero-defect-grid">
        {/* LEFT – List */}
        <ul className="zero-defect-list">
          <li>100% inspection of critical components</li>
          <li>SPC-based continuous monitoring</li>
          <li>Preventive maintenance across all equipment</li>
          <li>ISO 9001:2015 quality management system</li>
        </ul>

        {/* RIGHT – Anchor */}
        <div className="zero-defect-anchor">
          <span className="anchor-label">Quality Promise</span>
          <h3>Zero<br />Defects</h3>
          <p>
            Grounded in discipline, guided by data,
            upheld by accountability.
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
