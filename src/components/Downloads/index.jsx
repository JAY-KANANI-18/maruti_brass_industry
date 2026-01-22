import React from "react";
import downloads from "../../data/downloads.json";
import Link from "next/link";

const Downloads = () => {
  return (
    <section className="downloads section-padding mb-50">
      <div className="container">
        <div className="section-head text-center mb-60">
          <h6 className="wow fadeInDown">Download Resources</h6>
          <h4 className="playfont wow flipInX">
            Documents & Certificates
          </h4>
        </div>

        <div className="row">
          {downloads.map((doc) => (
            <div className="col-lg-4 col-md-6 mb-40" key={doc.id}>
              <div className="download-card">
                
                {/* Top Meta */}
                <div className="doc-meta">
                  <span className="doc-type">{doc.type}</span>
                  <span className="doc-info">
                    {doc.size} • {doc.pages}
                  </span>
                </div>

                {/* Title */}
                <h5 className="doc-title playfont">
                  <Link href={doc.url} target="_blank">
                    {doc.title}
                  </Link>
                </h5>

                {/* Updated */}
                <p className="doc-updated">
                  Updated {doc.updated}
                </p>

                {/* CTA */}
                <Link
                  href={doc.url}
                  target="_blank"
                  className="download-btn"
                >
                  Download PDF
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
