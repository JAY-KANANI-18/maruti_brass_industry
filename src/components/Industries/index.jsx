import React from "react";
import industries from "../../data/industries.json";

const Industries = () => {
  return (
    <section className="services section-padding bg-gray">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">Global Excellence</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Industries We Serve</h4>
            </div>
          </div>
        </div>

        <div className="row">
          {industries.map((it) => (
            <div className="col-lg-4 col-md-6 item-bx" key={it.id}>
              <div className="item-bx bg-img wow fadeInUp" data-wow-delay=".3s" style={{ backgroundImage: "url(/assets/img/01.jpg)" }}>
                <h6 className="mb-10">{it.name}</h6>
                <p>{it.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
