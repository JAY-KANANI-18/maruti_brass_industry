import React from "react";

const signals = [
  {
    title: "Manufactured in India",
    desc: "Precision engineering with global export standards",
  },
  {
    title: "Nation-first Mindset",
    desc: "Aligned with Make in India & Atmanirbhar Bharat",
  },
  {
    title: "Trusted by MNCs",
    desc: "Decades of consistent quality and reliability",
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
                Engineering India’s Growth<br />with Precision & Pride
              </h2>
              <p className="statement">
                At Maruti Brass Industry, we don’t just manufacture components —
                we build confidence, capability, and global competitiveness from
                Indian soil.
              </p>
              <p className="closing">
                Built in India. Trusted Worldwide.
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
