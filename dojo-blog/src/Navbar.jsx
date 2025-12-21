import React, { useState } from "react";

const Navbar = () => {
  const [pageName, setPageName] = useState("Web Development");
  const [experience, setExperience] = useState(16);
  const [activeMenu, setActiveMenu] = useState("Home");

  const changePageName = () => {
    setPageName("Mobile Development");
    setExperience(20);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            BlogWorld
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Home", "About", "Services", "Contact"].map((menu) => (
                <li className="nav-item" key={menu}>
                  <button
                    className={`nav-link btn btn-link ${
                      activeMenu === menu ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick(menu)}
                  >
                    {menu}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mt-4">
        <h4>
          Current Choice: <strong>{pageName}</strong> | Experience:{" "}
          <strong>{experience} years</strong>
        </h4>

        <p className="text-muted">
          Active Menu: <strong>{activeMenu}</strong>
        </p>

        <button
          className="btn btn-sm btn-primary mt-2"
          onClick={changePageName}
        >
          Change Page Name
        </button>
      </div>
    </>
  );
};

export default Navbar;
