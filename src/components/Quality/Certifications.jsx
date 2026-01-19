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
    <section className="blog-grid section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">INDUSTRY STANDARDS</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Certifications & Standards</h4>
              <p className="mt-10">Our manufacturing processes adhere to international quality standards, ensuring consistent excellence in every component.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {certList.map((c, index) => (
            <div className="col-lg-4" key={c.key}>
              <div className="item wow fadeInUp" data-wow-delay={index % 3 === 0 ? ".3s" : index % 3 === 1 ? ".5s" : ".7s"}>
                <div className="cont">
                  <div className="info">
                    <span className="mr-10">{c.title}</span>
                    <span className="badge">Verified</span>
                  </div>
                  <h6 className="mb-10">{c.subtitle}</h6>
                  <Link href={getUrl(c.key)}>
                    <a className="more" target="_blank" rel="noopener noreferrer">
                      <span>Download Certificate</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
