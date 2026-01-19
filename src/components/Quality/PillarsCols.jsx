import React from "react";

const items = [
  { id: 1, icon: "flaticon-interior-design", title: "Automated Inspection", desc: "Laser and vision systems ensure flawless geometry." },
  { id: 2, icon: "flaticon-plan", title: "Process Control", desc: "Real-time data monitoring prevents deviations." },
  { id: 3, icon: "flaticon-renovation", title: "Material Integrity", desc: "Certified raw materials and full traceability." },
  { id: 4, icon: "flaticon-home", title: "Quality Commitments", desc: "Precision and reliability in every component." },
];

const PillarsCols = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>Quality Pillars</h3>
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

export default PillarsCols;
