import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  BsMap,
  BsExclamationDiamond,
  BsPhone,
  BsBuilding,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const MainNav = () => {
  const customer = localStorage.getItem("customer");

  return (
    <nav className="navbar navbar-expand-md ">
      <Navbar.Brand href="/">
        <span className="brand">
          {" "}
          <h1>
            Logyator <BsMap />{" "}
          </h1>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="/about">
          <Link to="/about">
            About <BsExclamationDiamond />{" "}
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/contact">
            Contact Us <BsPhone />
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={customer ? "/companies" : "/addcustomer"}>
            Companies <BsBuilding />
          </Link>
        </Nav.Link>
      </Navbar.Collapse>
    </nav>
  );
};

export default MainNav;
