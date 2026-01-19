import React from "react";

const ToolsSplit = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="extra wow fadeInUp" data-wow-delay=".3s">
              <h2 className="mb-20 playfont fz-50">Precision Measurement & Metrology</h2>
              <p>
                State-of-the-art measurement tools and inspection systems ensure
                every dimension is verified to specification before it leaves our floor.
              </p>
              <p>
                From profile projection to microscopic checks, we combine manual expertise
                and automated systems for zero-defect outcomes.
              </p>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="specialty wow fadeInUp" data-wow-delay=".5s">
              <ul>
                <li><span>01.</span> Facing & Milling Machine Inspection</li>
                <li><span>02.</span> Digital & Mitutoyo Vernier / Dial Vernier</li>
                <li><span>03.</span> Digital Micro Meters</li>
                <li><span>04.</span> Dial & Snap Gauges</li>
                <li><span>05.</span> Special I.D Pin Gauges</li>
                <li><span>06.</span> Thread Plug & Ring Gauges</li>
                <li><span>07.</span> Magnifying Eye Glass for QC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSplit;
