import React from "react";
const timeline = [
  {
    id: 1,
    year: "2016",
    title: "Company Founded",
    text: "Established with a vision to manufacture precision brass components, focusing on quality workmanship and reliable customer service.",
  },
  {
    id: 2,
    year: "2017",
    title: "Initial Production Setup",
    text: "Installed conventional and CNC turning machines, developed core manufacturing processes, and began small-batch production.",
  },
  {
    id: 3,
    year: "2018",
    title: "First Major Customers",
    text: "Secured long-term partnerships with domestic customers in electrical and plumbing sectors, ensuring consistent quality delivery.",
  },
  {
    id: 4,
    year: "2019",
    title: "Process Improvement",
    text: "Introduced in-process inspection, tooling standardization, and basic quality documentation to improve yield and consistency.",
  },
  {
    id: 5,
    year: "2020",
    title: "Capacity Expansion",
    text: "Added new CNC machines and secondary operations to support higher volumes and a wider range of brass components.",
  },
  {
    id: 6,
    year: "2021",
    title: "Quality System Strengthening",
    text: "Implemented structured quality checks, traceability for raw materials, and preventive maintenance systems.",
  },
  {
    id: 7,
    year: "2022",
    title: "Automation & Infrastructure Upgrade",
    text: "Commissioned automatic machining lines and improved shop-floor layout to enhance productivity and process control.",
  },
  {
    id: 8,
    year: "2023",
    title: "OEM & Tier-1 Engagements",
    text: "Onboarded OEM and Tier-1 customers, meeting stringent quality requirements and delivery performance standards.",
  },
  {
    id: 9,
    year: "2024",
    title: "Process Standardization",
    text: "Adopted ISO-aligned quality systems, SPC monitoring, and full traceability across critical manufacturing processes.",
  },
  {
    id: 10,
    year: "2025",
    title: "Scale & Capability Expansion",
    text: "Expanded production capacity, strengthened in-house testing facilities, and prepared systems for automotive and export compliance.",
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
