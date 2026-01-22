import React from "react";

const items = [
  {
    id: 1,
    icon: "pe-7s-check",
    title: "100% Inspection",
    desc: "Manual and machine checks on every critical component.",
  },
  {
    id: 2,
    icon: "pe-7s-shield",
    title: "Zero Defect Policy",
    desc: "Flawless outputs driven by engineering discipline.",
  },
  {
    id: 3,
    icon: "flaticon-plan",
    title: "SPC Monitoring",
    desc: "Statistical process control for continuous stability.",
  },
  {
    id: 4,
    icon: "flaticon-home",
    title: "In-house QC Systems",
    desc: "Integrated checks across each stage of production.",
  },
];
const CommitmentsCols = () => {
  return (
    <section className="quality-commitments section-padding">
      <div className="container">
        <div className="section-head text-center mb-70">
          <h3 className="playfont">Quality Commitments</h3>
          <span className="sub-head">Assurance</span>
        </div>

        <div className="row">
          {items.map((it) => (
            <div className="col-lg-3 col-md-6 mb-40" key={it.id}>
              <div className="commitment-card text-center">

                <div className="commitment-icon">
                  <span className={it.icon}></span>
                </div>

                <h6 className="commitment-title">{it.title}</h6>
                <p className="commitment-desc">{it.desc}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentsCols;
