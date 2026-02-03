import React from "react";

const pillars = [
  { id: 1, title: "Inspection", subtitle: "Automated Inspection", desc: "Vision and laser checks verify geometry with accuracy.", icon: "pe-7s-look" },
  { id: 2, title: "Control", subtitle: "Process Control", desc: "Live process data helps prevent deviations.", icon: "pe-7s-graph" },
  { id: 3, title: "Integrity", subtitle: "Material Integrity", desc: "Certified inputs with end‑to‑end traceability.", icon: "pe-7s-check" },
  { id: 4, title: "Our Promise", subtitle: "Quality Commitments", desc: "Each component is built for precision and reliability.", icon: "pe-7s-like" },
];

const Pillars = () => {
  return (
    <section className="services section-padding bg-gray">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">Pillars of Quality</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Inspection • Control • Integrity • Commitment</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {pillars.map((p, idx) => (
            <div className="col-lg-3 col-md-6 item-bx" key={p.id}>
              <div className="item-bx bg-img wow fadeInUp" data-wow-delay={idx === 0 ? ".3s" : idx === 1 ? ".5s" : idx === 2 ? ".7s" : ".9s"} style={{ backgroundImage: "url(/assets/img/01.jpg)" }}>
                <span className={`icon ${p.icon}`}></span>
                <h6 className="mb-5">{p.title}</h6>
                <h6 className="custom-font mb-10">{p.subtitle}</h6>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
