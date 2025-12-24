import ProductCard  from "./ProductCard"
const Contact = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light py-4">
        <div className="container text-center">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">We’d love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-md-5">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">Get in Touch</h5>
                  <p className="card-text">
                    Have a project or question? Reach out to us using the details below.
                  </p>

                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Email:</strong> support@reactblog.com
                    </li>
                    <li className="mb-2">
                      <strong>Phone:</strong> +91 98765 43210
                    </li>
                    <li className="mb-2">
                      <strong>Address:</strong> India
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">Send a Message</h5>

                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
                {/* <img src="/2.jpg" alt="About" className="img-fluid rounded" /> */}
                <ProductCard name="Contact-img" image="wd.png"  className="img-responsive" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
