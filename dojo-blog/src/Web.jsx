import React from 'react';
import  Navbar from "./Navbar";

const Web = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Build Your Digital Presence</h1>
          <p className="lead mt-3">
            Professional Web, App, SEO & Digital Marketing Services
          </p>
          <div className="mt-4">
            <a href="/about-us" className="btn btn-primary me-2">
              Learn More
            </a>
            <a href="/contact-us" className="btn btn-outline-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">Our Services</h2>
            <p className="text-muted">What we offer</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    Modern, fast and responsive websites using React & Bootstrap.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Mobile App Development</h5>
                  <p className="card-text">
                    Scalable Android & Web Apps with clean UI & performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">SEO & Marketing</h5>
                  <p className="card-text">
                    Improve your online visibility with SEO & social media ads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Ready to start your project?</h2>
          <p className="mt-3">
            Let’s build something great together.
          </p>
          <a href="/contact-us" className="btn btn-warning mt-3">
            Get Started
          </a>
        </div>
      </section>
    </>
  )
}

export default Web