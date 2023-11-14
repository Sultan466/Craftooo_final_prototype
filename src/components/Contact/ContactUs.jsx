import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <div
            className="section-title wow lightSpeedIn"
            data-wow-delay=".3s"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              textAlign: "center",
              animationDelay: "0.3s",
              animationName: "lightSpeedIn",
            }}
          >
            <h4 className="mb-0">Get In Touch</h4>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div
          className="col-md-6 mb30 wow zoomIn"
          data-wow-delay=".4s"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.4s",
            animationName: "zoomIn",
          }}
        >
          <div className="media">
            <div className="d-flex mr-2">
              <i
                className="fa-solid fa-location-dot"
                style={{ marginTop: "2px" }}
              ></i>
            </div>
            <div className="media-body">
              <h5 className="mt-0" style={{ fontSize: "18px" }}>
                Craftooo
              </h5>
              <hr className="mb20" />
            </div>
          </div>
          <iframe
            height="406"
            frameBorder="0"
            style={{ border: "0", width: "100%" }}
            className="mb0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.731163950045!2d74.28336547476857!3d31.476580649305802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919032f6b873283%3A0x2ef95a7f7babc3b!2sCraftooo%20Lahore%20Office!5e0!3m2!1sen!2sus!4v1699883741909!5m2!1sen!2sus"
            allowFullScreen=""
          ></iframe>
          <br />
          <br />
          <p style={{ fontSize: "16px" }} className="mb0">
            Craftooo Lahore Office Building number# 12, Johar View Block E 2
            Phase 1 Johar Town, Lahore, Punjab 56500, Pakistan
            <br />
            Phone: +92 311 7444804 <br />
            moin.sultan2278@gmail.com
          </p>
        </div>
        <div
          className="col-md-6 wow zoomIn"
          data-wow-delay=".5s"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.4s",
            animationName: "zoomIn",
          }}
        >
          <h4 className="text-capitalize">
            Please fill this form for quick contact:
          </h4>
          <hr style={{ marginBottom: "20px" }} />
          <div className="row">
            <div className="col-sm-12">
              <div className="mb20 position-relative">
                <span className="form-star">*</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control pl-4"
                  placeholder="Full Name...."
                />
              </div>
              <br />
              <div className="mb20 position-relative">
                <span className="form-star">*</span>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control pl-4"
                  placeholder="Email Address...."
                />
              </div>
              <div className="mb20 position-relative">
                <span className="form-star">*</span>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control pl-4"
                  placeholder="Phone Number...."
                />
              </div>
              <div className="mb20 position-relative">
                <span className="form-star">*</span>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control pl-4"
                  placeholder="Subject Line...."
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="position-relative">
                <span className="form-star">*</span>
                <textarea
                  name="message"
                  id="message"
                  className="form-control pl-4 mb20"
                  rows="5"
                  placeholder="Message...."
                ></textarea>
              </div>
            </div>
          </div>
          <div
            className="row"
            id="message-show-success"
            style={{ display: "none" }}
          >
            <div className="col-sm-12">
              <div className="alert alert-success">
                <strong>Thank you for Submitting your Query</strong>
              </div>
            </div>
          </div>
          <div
            className="row"
            id="message-show-alert"
            style={{ display: "none" }}
          >
            <div className="col-sm-12">
              <div className="alert alert-danger">
                <strong>
                  Sorry, Your respond couldn't be sent successfully. Please Try
                  again
                </strong>
              </div>
            </div>
          </div>
          <div
            className="row"
            id="message-show-alert-empty"
            style={{ display: "none" }}
          >
            <div className="col-sm-12">
              <div className="alert alert-danger">
                <strong>Please, Fill Out required Fields.</strong>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-12 text-center">
              <Link to="https://wa.me/923117444804" target="_blank">
                <button
                  type="button"
                  name="submit"
                  id="plusButton"
                  className="site-btn-style"
                >
                  Send Message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
