import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <section className="footer">
        <footer>
          <div className="container p-4">
            <section className="">
              <h3 style={{ padding: "20px" }}>
                Join us with big companies in the shipping to get many
                opportunities
              </h3>
              <Link className="btn" id="addCompany" to="/addcompany">
                Add Your Company!
              </Link>
            </section>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
