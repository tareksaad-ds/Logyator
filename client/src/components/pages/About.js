import React from "react";
import { FaPlane, FaShippingFast, FaShip } from "react-icons/fa";
import Air from "../../assests/Air.jpg";
import Sea from "../../assests/sea.jpg";
import Land from "../../assests/land.jpg";
import { BsExclamationDiamond } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <section className="text-center about">
        <h1 className="about-us">
          About US <BsExclamationDiamond />
        </h1>
        <div className="container">
          <p className="about-p">We can help you in all shippings type</p>
          <div className="row about-row">
            <div
              className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <h2>
                Air Shipping{" "}
                <span>
                  <FaPlane />
                </span>
              </h2>
              <img src={Air} alt="air" width="90%" height="40%" />
              <p className="lead">
                We have many Air shipping companies whole over the world, you
                can take the best experience in the field with the lowest costs
              </p>
            </div>
            <div
              className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <h2>
                Land Shipping{" "}
                <span>
                  <FaShippingFast />
                </span>{" "}
              </h2>
              <img src={Sea} alt="sea" width="90%" height="40%" />
              <p className="lead">
                We have many countires and the highest reputation in the world.
              </p>
            </div>
            <div className="clearfix visible-md-block visible-sm-block"></div>
            <div
              className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <h2>
                Sea Shipping{" "}
                <span>
                  <FaShip />
                </span>
              </h2>
              <img src={Land} alt="land" width="90%" height="40%" />
              <p className="lead">
                It's not covered in all countries, We do it in countries in
                Europe and Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
