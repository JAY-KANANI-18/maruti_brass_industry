import React from "react";
import downloads from "../../data/downloads.json";
import Link from "next/link";

const Downloads = () => {
  return (
    <section className="blog-grid section-padding mb-50">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">
                Download Resources
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Documents & Certificates
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {downloads.map((doc, index) => (
            <div className="col-lg-4" key={doc.id}>
              <div
                className="item wow fadeInUp"
                data-wow-delay={index === 0 ? ".3s" : index === 1 ? ".1s" : ".5s"}
              >
                <div className="cont">
                  <div className="info">
                    <span>{doc.type}</span>
                    <span>{doc.size} • {doc.pages}</span>
                  </div>
                  <h5 className="playfont">
                    <Link href={doc.url}>
                      <a target="_blank" rel="noopener noreferrer">{doc.title}</a>
                    </Link>
                  </h5>
                  <div className="mt-10">
                    <small>Updated {doc.updated}</small>
                  </div>
                  <Link href={doc.url}>
                    <a className="more" target="_blank" rel="noopener noreferrer">
                      <span>Download</span>
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

export default Downloads;
