import { useState } from "react";
import ProductCard from "./ProductCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form Submitted:", formData);
    alert(`Thank you for contacting us, ${formData.name}!`);

    setFormData({
      name: "",
      email: "",
      gender: "",
      message: "",
    });

    setErrors({});
  };

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
                  <h5 className="fw-bold mb-3">Get in Touch</h5>

                  <ul className="list-unstyled">
                    <li><strong>Email:</strong> support@reactblog.com</li>
                    <li><strong>Phone:</strong> +91 98765 43210</li>
                    <li><strong>Address:</strong> India</li>
                  </ul>

                  <ProductCard
                    name="Contact-img"
                    image="3.png"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold mb-3">Send a Message</h5>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Gender */}
                    <div className="mb-3">
                      <label className="form-label">Gender</label>
                      <select
                        name="gender"
                        className={`form-select ${
                          errors.gender ? "is-invalid" : ""
                        }`}
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.gender && (
                        <div className="invalid-feedback">
                          {errors.gender}
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        rows="4"
                        className={`form-control ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">
                          {errors.message}
                        </div>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
