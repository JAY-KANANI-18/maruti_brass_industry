import React from "react";

const signals = [
  {
    title: "Manufactured in India",
    desc: "Precision engineering aligned to global export standards",
  },
  {
    title: "Nation-first Mindset",
    desc: "Aligned with Make in India and Atmanirbhar Bharat",
  },
  {
    title: "Trusted by MNCs",
    desc: "Consistent quality and reliability recognized by MNCs",
  },
];

const MakeInIndia = () => {
  return (
    <section className="make-india-unique section-padding">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT : Statement */}
          <div className="col-lg-6 mb-40">
            <div className="india-statement">
              <h6 className="eyebrow">Make in India</h6>
              <h2 className="headline playfont">
                Advancing India’s Growth<br />with Precision and Pride
              </h2>
              <p className="statement">
                At Maruti Brass Industry, we manufacture components and build
                confidence and capability — strengthening global competitiveness
                from India.
              </p>
              <p className="closing">
                Made in India. Trusted worldwide.
              </p>
            </div>
          </div>

          {/* RIGHT : Signals */}
          <div className="col-lg-6">
            <div className="india-signals">
              {signals.map((s, i) => (
                <div className="signal-item" key={i}>
                  <span className="signal-index">0{i + 1}</span>
                  <div>
                    <h6>{s.title}</h6>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MakeInIndia;
