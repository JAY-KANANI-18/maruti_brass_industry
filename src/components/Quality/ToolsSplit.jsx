import React from "react";

const ToolsSplit = () => {
  return (
    <section className="tools-split section-padding">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-5">
            <div className="tools-content wow fadeInUp" data-wow-delay=".3s">
              <h2 className="mb-20 playfont">
                Precision Measurement and Metrology
              </h2>
              <p>
                Modern measurement equipment and inspection systems verify every
                dimension to specification before dispatch.
              </p>
              <p>
                From profile projectors to microscopic checks, we blend hands‑on
                expertise and automation to aim for zero defects.
              </p>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="col-lg-6 offset-lg-1">
            <div className="tools-list wow fadeInUp" data-wow-delay=".5s">
              <ul>
                <li><span>01</span> Facing & Milling Machine Inspection</li>
                <li><span>02</span> Digital & Mitutoyo Vernier / Dial Vernier</li>
                <li><span>03</span> Digital Micro Meters</li>
                <li><span>04</span> Dial & Snap Gauges</li>
                <li><span>05</span> Special I.D Pin Gauges</li>
                <li><span>06</span> Thread Plug & Ring Gauges</li>
                <li><span>07</span> Magnifying Eye Glass for QC</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ToolsSplit;
