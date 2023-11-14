import React from "react";
import logo from "../../assets/craftooologo.png";
import "../pages/MainHeader.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top rounded-3">
      <div className="container rounded-3">
        <Link to="/">
          <img
            className="navbar-brand"
            src={logo}
            style={{ maxWidth: "600px", height: "70px" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul
            className="navbar-nav ms-auto rounded-3"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              alignItems: "center",
            }}
          >
            <li className="nav-item dropdown">
              <Link className="nav-link active" to="/about" role="button">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="/services"
                data-bs-toggle="dropdown"
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/services">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services">
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="/"
                data-bs-toggle="dropdown"
              >
                Solutions
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/solutions">
                    Human Resources
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/solutions">
                    eLearning
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/solutions">
                    Ecommerce
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/solutions">
                    Web Portals
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link active" to="/technology">
                Technologies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <i className="nav-link bi bi-search"></i>
            </li>
            <li className="nav-item">
              <div>
                <button className="btn">
                  <Link className="nav-link active" to="/contact" role="button">
                    <i className="animation"></i>
                    Contact us
                    <i className="animation"></i>
                  </Link>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default MainHeader;
