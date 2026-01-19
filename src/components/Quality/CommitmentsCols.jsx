import React from "react";

const items = [
  { id: 1, icon: "flaticon-checkmark", title: "100% Inspection", desc: "Manual and machine checks on every critical component." },
  { id: 2, icon: "flaticon-like", title: "Zero Defect Policy", desc: "Flawless outputs driven by engineering discipline." },
  { id: 3, icon: "flaticon-plan", title: "SPC Monitoring", desc: "Statistical process control for continuous stability." },
  { id: 4, icon: "flaticon-home", title: "In-house QC Systems", desc: "Integrated checks across each stage of production." },
];

const CommitmentsCols = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>Quality Commitments</h3>
          <div className="tex-bg">Assurance</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          {items.map((it) => (
            <div className="col-lg-3 col-md-6 item-bx" key={it.id}>
              <span className={`icon ${it.icon}`}></span>
              <h6 className="mb-20">{it.title}</h6>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentsCols;
