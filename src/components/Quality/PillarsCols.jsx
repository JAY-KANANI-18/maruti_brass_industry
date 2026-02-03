import React from "react";

const items = [
  {
    id: 1,
    icon: "flaticon-interior-design",
    title: "Automated Inspection",
    desc: "Vision and laser systems verify geometry with precision.",
  },
  {
    id: 2,
    icon: "flaticon-plan",
    title: "Process Control",
    desc: "Live data monitoring helps prevent deviations.",
  },
  {
    id: 3,
    icon: "flaticon-renovation",
    title: "Material Integrity",
    desc: "Certified materials with full traceability.",
  },
  {
    id: 4,
    icon: "flaticon-home",
    title: "Quality Commitments",
    desc: "Precision and reliability in each component.",
  },
];

const PillarsCols = () => {
  return (
    <section className="quality-pillars ">
      <div className="container">
        <div className="section-head text-center mb-70">
          <h3 className="playfont">Pillars of Quality</h3>
          <span className="sub-head">Assurance</span>
        </div>

        <div className="row">
          {items.map((it) => (
            <div className="col-lg-3 col-md-6 mb-40" key={it.id}>
              <div className="pillar-card text-center">

                <div className="pillar-icon">
                  <span className={it.icon}></span>
                </div>

                <h6 className="pillar-title">{it.title}</h6>
                <p className="pillar-desc">{it.desc}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsCols;
