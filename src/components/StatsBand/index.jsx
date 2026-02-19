import React from "react";

const items = [
  { id: 1, number: "40+", label: "Clients", icon: "pe-7s-users" },
  { id: 2, number: "50+", label: "Advanced Machinery", icon: "pe-7s-tools" },
  { id: 3, number: "30+", label: "Years Experience", icon: "pe-7s-date" },
  { id: 4, number: "50K+", label: "Parts Monthly", icon: "pe-7s-config" }
];

const StatsBand = () => {
  return (
    <section className="clients-brand section-padding pt-60 pb-60 bg-gray">
      <div className="container">
        <div className="row text-center">
          {items.map((it) => (
            <div className="col-6 col-md-3 mb-30" key={it.id}>
              <div className="item">
                <div className="icon mb-10"><span className={`icon ${it.icon}`}></span></div>
                <h3 className="playfont mb-5">{it.number}</h3>
                <h6>{it.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBand;
