import React from "react";
import aboutUs1Data from "../../data/about-us1.json";

const AboutIntro = () => {
  const yearsItem = aboutUs1Data.numbers.find(
    (n) => String(n.name).toLowerCase().includes("years")
  );
  const yearsExp = yearsItem ? yearsItem.number : aboutUs1Data.exp.nmb;

  return (
    <section className="about about-intro section-padding">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="wow fadeInUp" data-wow-delay=".3s">

              <h6 className="sub-title">Who We Are</h6>

              <h2 className="playfont mb-20">
                {aboutUs1Data.title.first} <br />
                {aboutUs1Data.title.second}
              </h2>

              <p className="lead-text mb-30">
                {aboutUs1Data.content}
              </p>

              {/* Key Metrics */}
              <div className="numbers mt-50">
                <div className="row">
                  {aboutUs1Data.numbers.slice(0, 3).map((item) => (
                    <div className="col-md-4" key={item.id}>
                      <div className="item">
                        <h3>
                          <span className="nbr playfont">{item.number}</span>
                        </h3>
                        <h6>{item.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="col-lg-5 mt-40 ">
            <div className="wow fadeInUp" data-wow-delay=".5s">

              <div className="exp-img">
                <div
                  className="img bg-img wow imago rounded o-hidden"
                  style={{
                    backgroundImage: `url(${aboutUs1Data.image})`,
                    minHeight: 380,
                  }}
                >
                  {/* Since badge */}
                  <div className="since playfont">
                    <span>Since</span>
                    <span>{aboutUs1Data.exp.since}</span>
                  </div>

                  {/* Experience anchor */}
                  <div className="years playfont">
                    <h2>{yearsExp}</h2>
                    <h5>Years of Manufacturing Excellence</h5>
                  </div>
                </div>
              </div>

              {/* Quick Highlights */}
              <div className="row mt-30 quick-highlights">
                <div className="col-sm-6">
                  <div className="item-bx text-center">
                    <h6 className="mb-5">Production Capability</h6>
                    <p className="mb-0">Scalable, high-volume precision parts</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item-bx text-center">
                    <h6 className="mb-5">Industries Served</h6>
                    <p className="mb-0">
                      Automotive, Electrical, Sanitary & Industrial
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
