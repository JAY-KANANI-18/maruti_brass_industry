import React from "react";
const items = [
  {
    id: 1,
    title: "CNC Turning",
    content: "High-precision turning for complex geometries.",
    icon: "pe-7s-settings",
    bg: "/assets/img/about/cnc-turning.png",
  },
  {
    id: 2,
    title: "Forging",
    content: "Durable, high-strength forged components.",
    icon: "pe-7s-hammer",
    bg: "/assets/img/about/forging.png",
  },
  {
    id: 3,
    title: "Casting",
    content: "Consistent quality and close tolerances.",
    icon: "pe-7s-cup",
    bg: "/assets/img/about/casting.png",
  },
  {
    id: 4,
    title: "Precision Machining",
    content: "Tight tolerances with advanced tooling.",
    icon: "pe-7s-tools",
    bg: "/assets/img/about/machining.png",
  },
  {
    id: 5,
    title: "Surface Finishing",
    content: "Electroplating, polishing and custom finishes.",
    icon: "pe-7s-credit",
    bg: "/assets/img/about/finishing.png",
  },
  {
    id: 6,
    title: "Quality Control",
    content: "CMM, gauges and standardized QC processes.",
    icon: "pe-7s-check",
    bg: "/assets/img/about/qc.png",
  },
];


const Capabilities = () => {
  return (
    <section className="capabilities section-padding bg-gray">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">Engineering Strength</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Manufacturing Capabilities</h4>
            </div>
          </div>
        </div>

        <div className="row">
          {items.map((it, idx) => (
            <div className="col-md-6 col-lg-4 item-bx::before" key={it.id}>
              <div
                className="item-bx wow fadeInUp"
                data-wow-delay={`${0.2 + idx * 0.1}s`}
                style={{ "--bg": `url(${it.bg})` }}
              >
                <div className="icon mb-15"><span className={`icon ${it.icon}`}></span></div>
                <h6 className="mb-10">{it.title}</h6>
                <p className="mb-0">{it.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
