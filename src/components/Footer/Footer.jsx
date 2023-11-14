import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start mt-4">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link
            to="https://www.facebook.com/Craftooo.org/"
            className="me-4 text-reset"
            target="_blank"
          >
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <Link
            to="https://www.craftooo.org/"
            className="me-4 text-reset"
            target="_blank"
          >
            <MDBIcon fab icon="google" />
          </Link>
          <Link
            to="https://www.instagram.com/craftooo_official/"
            className="me-4 text-reset"
            target="_blank"
          >
            <MDBIcon fab icon="instagram" />
          </Link>
          <Link
            to="https://pk.linkedin.com/company/craftooo"
            className="me-4 text-reset"
            target="_blank"
          >
            <MDBIcon fab icon="linkedin" />
          </Link>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Craftooo
              </h6>
              <p>
                You are the future of our country, and Craftooo brings the
                perfect chance for you to generate massive income and take part
                in Pakistan’s economic growth.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <Link to="/" className="text-reset">
                  HTML
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  CSS3
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  JavaScript
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  React
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/" className="text-reset">
                  Pricing
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Craftooo Johar Town , Lahore , Pakistan
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                moin.sultan2278@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +92 311 7444804
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <span className="text-reset fw-bold">Craftooo.com</span>
      </div>
    </MDBFooter>
  );
}
