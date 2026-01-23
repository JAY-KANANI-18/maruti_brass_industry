/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Office Address</h6>
                    <p>PLOT NO. 3092  GIDC Phase 2, </p>
                    <p>Jamngar, Gujarat - 361006</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>marutibrass1177@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+91 9265002274</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Quick Links</h5>
              </div>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a>Products</a>
                  </Link>
                </li>
                <li>
                  <Link href="/quality">
                    <a>Quality</a>
                  </Link>
                </li>
                <li>
                  <Link href="/brochure">
                    <a>Brochure</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/Logo/SVG/Dark BG Logo.svg" width={200} height={200} alt="" />
              </div>
              <div className="social">
                <Link href="#">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link>
              </div>

              <div className="copy-right">
                <p>© 2026 Maruti Brass Industry. </p>
                <p>All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
