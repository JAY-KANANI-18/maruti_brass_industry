import React from "react";

const steps = [
  {
    id: 1,
    title: "Material Inspection",
    desc: "Each incoming batch is verified against specifications.",
    bullets: [
      "Material inspection to defined standards",
      "Complete documentation maintained",
      "Advanced QA techniques",
      "ISO 9001:2015 verified",
    ],
  },
  {
    id: 2,
    title: "In-Process Control",
    desc: "In‑process checks monitor machining continuously.",
    bullets: [
      "In‑process control to set limits",
      "Operator and QC sign‑offs",
      "SPC sampling where applicable",
      "ISO 9001:2015 verified",
    ],
  },
  {
    id: 3,
    title: "Final Inspection",
    desc: "Final dimensional and visual verification before dispatch.",
    bullets: [
      "100% checks on critical dimensions",
      "Surface and thread validation",
      "Lot approval records",
      "ISO 9001:2015 verified",
    ],
  },
  {
    id: 4,
    title: "Documentation & Traceability",
    desc: "Traceability and records retained for every lot.",
    bullets: [
      "Lot‑wise traceability",
      "PDIR and spectro reports as required",
      "Document retention policy",
      "ISO 9001:2015 verified",
    ],
  },
];

const QCProcess = () => {
  return (
    <section className="services section-padding bg-gray">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">QUALITY ASSURANCE</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Our Quality Control Process</h4>
              <p className="mt-10">End‑to‑end quality controls ensure each component meets stringent standards before shipment.</p>
            </div>
          </div>
        </div>

        <div className="row">
          {steps.map((s, idx) => (
            <div className="col-lg-3 col-md-6 item-bx" key={s.id}>
              <div className="item-bx bg-img wow fadeInUp" data-wow-delay={idx === 0 ? ".3s" : idx === 1 ? ".5s" : idx === 2 ? ".7s" : ".9s"} style={{ backgroundImage: "url(/assets/img/03.jpg)" }}>
                <h2 className="numb">{s.id}</h2>
                <h6 className="mb-10">{s.title}</h6>
                <p>{s.desc}</p>
                <ul className="mt-10">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QCProcess;
