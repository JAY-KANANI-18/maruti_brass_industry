import React from "react";
import industries from "../../data/industries.json";

const Industries = () => {
  return (
    <section className="industries-panels section-padding">
      <div className="container">

        {/* Header */}
        <div className="section-head text-center mb-80 text-white">
          <h6 className="wow fadeInDown">Global Excellence</h6>
          <h4 className="playfont wow flipInX">Industries We Serve</h4>
        </div>

        {/* Panels */}
        <div className="row">
          {industries.map((it, i) => (
            <div className="col-lg-4 col-md-6 mb-40" key={it.id}>
              <div
                className="industry-panel wow fadeInUp"
                data-wow-delay={`${0.3 + i * 0.1}s`}
              >
                {/* Image panel */}
                <div
                  className="industry-image"
                  style={{ backgroundImage: `url(${it.image})` }}
                />

                {/* Content */}
                <div className="industry-content">
                  <h5 className="playfont">{it.name}</h5>
                  <p>{it.description}</p>
                </div>

                {/* Accent line */}
                <span className="industry-accent" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
