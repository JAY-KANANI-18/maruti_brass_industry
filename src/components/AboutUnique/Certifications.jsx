import React from "react";
import Link from "next/link";
import downloads from "../../data/downloads.json";

const certs = [
  {
    key: "ISO 9001:2015 Certificate",
    title: "ISO 9001:2015",
    desc: "Quality management system ensuring consistent processes and continual improvement."
  },
  {
    key: "IATF 16949:2016 Certificate",
    title: "IATF 16949:2016",
    desc: "Automotive-grade quality standard aligned with zero-defect manufacturing."
  },
  {
    key: "EEPC India Certificate",
    title: "EEPC India",
    desc: "Recognized member of Engineering Export Promotion Council of India."
  }
];

const AboutCertifications = () => {
  const getUrl = (key) =>
    downloads.find((d) => d.title === key)?.url || "#";

  return (
    <section className="about-certs section-padding bg-gray">
      <div className="container">

        {/* Header */}
        <div className="section-head text-center mb-80">
          <h6 className="wow fadeInDown">Industry Standards</h6>
          <h4 className="playfont wow flipInX">Certifications</h4>
        </div>

        {/* Cards */}
        <div className="row">
          {certs.map((c, idx) => (
            <div className="col-lg-4 col-md-6 mb-40" key={c.key}>
              <div
                className="cert-card wow fadeInUp"
                data-wow-delay={`${0.3 + idx * 0.1}s`}
              >
                <div className="cert-header">
                  <span className="cert-badge">Certified</span>
                </div>

                <h5 className="playfont">{c.title}</h5>
                <p>{c.desc}</p>

                <Link href={getUrl(c.key)}>
                  <a
                    className="cert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutCertifications;
