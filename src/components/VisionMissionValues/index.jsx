import React from "react";

const cards = [
  {
    id: 1,
    title: "Our Vision",
    image: "/assets/img/about/our-vision.png",
    text:
      "To earn global trust as a precision manufacturing partner — recognized for zero‑defect discipline, scalable capacity, diversification beyond brass, and sustainable growth.",
  },
  {
    id: 2,
    title: "Our Mission",
    image: "/assets/img/about/our-mission.png",
    text:
      "Deliver uncompromising quality through advanced technology, skilled engineering, disciplined operations, and an unwavering focus on customer success.",
  },
  {
    id: 3,
    title: "Our Core Values",
    image: "/assets/img/about/our-value.png",
    list: [
      "Excellence in Quality",
      "Engineering Rigor",
      "Customer First",
      "Integrity and Accountability",
    ],
  },
];

const VisionMissionValues = () => {
  return (
    <section className="vmv-unique section-padding">
      <div className="container">

        {/* Header */}
        <div className="section-head text-center mb-80">
          <h6 className="wow fadeInDown">Guided by Purpose</h6>
          <h4 className="playfont wow flipInX">
            Vision • Mission • Core Values
          </h4>
        </div>

        {/* Cards */}
        <div className="row">
          {cards.map((c, i) => (
            <div className="col-lg-4 col-md-6 mb-40" key={c.id}>
              <div
                className="vmv-split-card wow fadeInUp"
                data-wow-delay={`${0.3 + i * 0.2}s`}
              >
                {/* Diagonal Image Panel */}
                <div
                  className="vmv-image"
                  style={{ backgroundImage: `url(${c.image})` }}
                />

                {/* Content */}
                <div className="vmv-body">
                  <h5 className="playfont">{c.title}</h5>

                  {c.text && <p>{c.text}</p>}

                  {c.list && (
                    <ul>
                      {c.list.map((v, idx) => (
                        <li key={idx}>{v}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisionMissionValues;
