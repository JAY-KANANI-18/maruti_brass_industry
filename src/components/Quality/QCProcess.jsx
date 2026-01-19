import React from "react";

const steps = [
  {
    id: 1,
    title: "Material Inspection",
    desc: "Every batch of raw material undergoes rigorous testing...",
    bullets: [
      "Rigorous material inspection standards",
      "Comprehensive documentation",
      "Advanced quality assurance techniques",
      "ISO 9001:2015 Verified",
    ],
  },
  {
    id: 2,
    title: "In-Process Control",
    desc: "Continuous monitoring during machining operations...",
    bullets: [
      "Rigorous in-process control standards",
      "Comprehensive documentation",
      "Advanced quality assurance techniques",
      "ISO 9001:2015 Verified",
    ],
  },
  {
    id: 3,
    title: "Final Inspection",
    desc: "Comprehensive quality verification including dimensional...",
    bullets: [
      "Rigorous final inspection standards",
      "Comprehensive documentation",
      "Advanced quality assurance techniques",
      "ISO 9001:2015 Verified",
    ],
  },
  {
    id: 4,
    title: "Documentation & Traceability",
    desc: "Complete documentation and lot traceability for every batch...",
    bullets: [
      "Rigorous documentation & traceability standards",
      "Comprehensive documentation",
      "Advanced quality assurance techniques",
      "ISO 9001:2015 Verified",
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
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Quality Control Process</h4>
              <p className="mt-10">Our comprehensive quality control process ensures that every component meets our rigorous standards before reaching our customers.</p>
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
