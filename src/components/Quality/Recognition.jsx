import React from "react";

const benefits = [
  "High quality raw materials",
  "Commitment to quality & sustainability",
  "Timely delivery performance",
  "Competitive and transparent pricing",
  "Decades of industry goodwill",
];

const Recognition = () => {
  return (
    <section className="recognition-unique section-padding">
      <div className="container">

        {/* Heading */}
        <div className="section-head text-center mb-60">
          <h6 className="wow fadeInDown">Recognition</h6>
          <h4 className="playfont wow flipInX">
            Consistently Rated ‘A’ by Global MNCs
          </h4>
          <p className="subtext">
            Sustained performance, recognized year after year.
          </p>
        </div>

        {/* Trust Chips */}
        <div className="recognition-strip wow fadeInUp">
          {benefits.map((b, i) => (
            <div className="recognition-chip" key={i}>
              <span className="chip-dot"></span>
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* Time Anchor */}
        <div className="recognition-timeline">
          <span className="line"></span>
          <span className="year">3+ Years of Trusted Partnership</span>
          <span className="line"></span>
        </div>

      </div>
    </section>
  );
};

export default Recognition;
