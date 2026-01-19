import React from "react";

const VisionMissionValues = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">Driven by Purpose</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Vision • Mission • Core Values</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".3s" style={{ backgroundImage: "url(/assets/img/01.jpg)" }}>
              <h6 className="mb-20">Our Vision</h6>
              <p>To be the foremost global leader in precision manufacturing, renowned for zero-defect, high-volume production, diversification beyond brass components, and a steadfast commitment to sustainable and eco-friendly industrial growth.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".5s" style={{ backgroundImage: "url(/assets/img/02.jpg)" }}>
              <h6 className="mb-20">Our Mission</h6>
              <p>To deliver uncompromising quality through advanced technology, skilled engineering, and efficient processes. We aim to produce flawless products at scale, expand into new manufacturing segments, and foster sustainable practices.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".7s" style={{ backgroundImage: "url(/assets/img/03.jpg)" }}>
              <h6 className="mb-20">Our Core Values</h6>
              <ul>
                <li>Quality Excellence</li>
                <li>Innovation</li>
                <li>Customer Focus</li>
                <li>Integrity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
