import React from "react";

const timeline = [
  {
    id: 1,
    year: "2022",
    title: "Company Founded",
    text: "Established with a clear focus on precision manufacturing, quality discipline, and customer-centric engineering solutions.",
  },
  {
    id: 2,
    year: "2022",
    title: "Infrastructure Setup",
    text: "Commissioned CNC and automatic machining lines with defined process controls and in-process inspection systems.",
  },
  {
    id: 3,
    year: "2023",
    title: "First OEM Partnerships",
    text: "Onboarded domestic OEM and Tier-1 customers, delivering consistent quality and reliable on-time performance.",
  },
  {
    id: 4,
    year: "2024",
    title: "Process Standardization",
    text: "Implemented ISO-aligned quality systems, SPC monitoring, and full traceability across critical operations.",
  },
  {
    id: 5,
    year: "2025",
    title: "Scale & Capability Expansion",
    text: "Expanded production capacity, strengthened in-house quality controls, and prepared systems for automotive-grade compliance.",
  },
];

const Milestones = () => {
  return (
    <section className="milestones section-padding">
      <div className="container">
        {/* Section Head */}
        <div className="section-head text-center mb-80">
          <h6 className="wow fadeInDown">Our Journey</h6>
          <h4 className="playfont wow flipInX">Milestones</h4>
        </div>

        {/* Timeline */}
        <div className="milestones-wrapper">
          {timeline.map((m, i) => (
            <div
              className="milestone-item wow fadeInUp"
              data-wow-delay={`${0.2 + i * 0.1}s`}
              key={m.id}
            >
              <div className="milestone-inner">
                <div className="milestone-year playfont">{m.year}</div>
                <div className="milestone-content">
                  <h6>{m.title}</h6>
                  <p>{m.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
