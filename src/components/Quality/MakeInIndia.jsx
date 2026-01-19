import React from "react";

const MakeInIndia = () => {
  return (
    <section className="services section-padding bg-gray">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">Make in India</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Proudly contributing to India's growth story</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".3s" style={{ backgroundImage: "url(/assets/img/01.jpg)" }}>
              <p>
                Maruti Brass Industry is committed to delivering high-quality engineering products and works across all aspects to fulfill customer satisfaction and manufacturing excellence, aligned with the nation's 'Make in India' vision.
              </p>
              <p className="mt-10">
                Together, let's take our nation to new heights in growth, prosperity, and excellence. Jai Hind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeInIndia;
