import React from "react";

const steps = [
  { id: "01", title: "Material Inspection", desc: "Every batch of raw material undergoes rigorous testing and validation." , img: "/assets/img/quality/material-inspection.png"},
  { id: "02", title: "In-Process Control", desc: "Continuous monitoring during machining operations prevents deviations.", img: "/assets/img/quality/in-process-control.png" },
  { id: "03", title: "Final Inspection", desc: "Comprehensive dimensional and visual verification before dispatch.", img: "/assets/img/quality/final-inspection.png" },
  { id: "04", title: "Documentation & Traceability", desc: "Complete documentation and lot traceability for every batch.", img: "/assets/img/quality/documentation-traceability.png" },
];

const Steps = () => {
  return (
    <section
      className="process section-padding bg-img bg-repeat"
      style={{ backgroundImage: `url(/assets/img/dots.png)` }}
    >
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">QUALITY ASSURANCE</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Quality Control Process</h4>
            </div>
          </div>
        </div>
        <div className=" row">
          {steps.map((s, idx) => (
            <div className="col-lg-3 col-md-6 coulmn wow fadeInUp" key={s.id} data-wow-delay={idx === 0 ? ".3s" : idx === 1 ? ".5s" : idx === 2 ? ".4s" : ".6s"}>
              <div className="item">
                <div className="bg-img" style={{ backgroundImage: `url(${s.img})` }}>
                  <h3 className="numb custom-font">{s.id}</h3>
                </div>
                <div className="cont">
                  <h6 className="mb-10">{s.title}</h6>
                  <p>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
