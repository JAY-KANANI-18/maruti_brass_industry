import React from "react";
import Link from "next/link";
import downloads from "../../data/downloads.json";

const certList = [
  { key: "ISO 9001:2015 Certificate", title: "ISO 9001:2015", subtitle: "Quality Management System" },
  { key: "IATF 16949:2016 Certificate", title: "IATF 16949:2016", subtitle: "Automotive Quality Standard" },
  { key: "EEPC India Certificate", title: "EEPC India", subtitle: "Engineering Export Promotion Council Member" },
  { key: "Z Bronze Pledge Certificate", title: "Z Bronze Pledge", subtitle: "Quality Commitment Pledge" },
  { key: "Z Bronze Certificate", title: "Z Bronze Certificate", subtitle: "Bronze Quality Certification" },
];

const Certifications = () => {
  const getUrl = (key) => {
    const doc = downloads.find((d) => d.title === key);
    return doc?.url || "#";
  };

  return (
    <section className="certifications section-padding">
      <div className="container">
        <div className="section-head text-center mb-60">
          <h6 className="wow fadeInDown">Global Standards</h6>
          <h4 className="playfont wow flipInX">
            Certifications and Standards
          </h4>
          <p className="mt-10">
            Our processes align with international quality standards to deliver
            consistent results across every component.
          </p>
        </div>

        <div className="row">
          {certList.map((c) => (
            <div className="col-lg-4 col-md-6 mb-40" key={c.key}>
              <div className="cert-card">

                {/* Header */}
                <div className="cert-header">
                  <span className="cert-title">{c.title}</span>
                  <span className="cert-badge">Verified</span>
                </div>

                {/* Subtitle */}
                <p className="cert-subtitle">{c.subtitle}</p>

                {/* CTA */}
                <Link
                  href={getUrl(c.key)}
                  target="_blank"
                  className="cert-download"
                >
                  Download Certificate
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
