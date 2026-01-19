import React from "react";

const benefits = [
  "High quality raw materials",
  "Commitment to quality and sustainability",
  "Timely delivery",
  "Competitive pricing",
  "Years of goodwill",
];

const Recognition = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">Recognition</h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">Consistent &#39;A&#39; grade vendor award from MNCs since 20 years</h4>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ul>
              {benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
