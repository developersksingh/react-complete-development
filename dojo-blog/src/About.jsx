const About = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light py-4">
        <div className="container text-center">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted">
            Who we are and what we do
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Text */}
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">We Build Digital Solutions</h2>
              <p>
                We are a professional full-stack development team delivering
                modern web applications, mobile apps, SEO, and digital marketing
                solutions. Our focus is on performance, scalability, and user
                experience.
              </p>

              <p>
                Using modern technologies like React, Bootstrap, Node.js, and
                secure APIs, we help businesses grow their online presence.
              </p>

              <ul className="list-unstyled">
                <li>✔ Web & App Development</li>
                <li>✔ SEO & Digital Marketing</li>
                <li>✔ Secure & Scalable Solutions</li>
                <li>✔ Reliable Support</li>
              </ul>
            </div>

            {/* Image / Placeholder */}
            <div className="col-md-6 text-center">
              <div
                className="bg-secondary bg-opacity-10 rounded p-5"
                style={{ minHeight: "250px" }}
              >
                <p className="text-muted">
                 <img src="/2.jpg" alt="About" className="img-fluid rounded" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h2 className="fw-bold">100+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold">50+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold">5+</h2>
              <p>Years Experience</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold">24/7</h2>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
