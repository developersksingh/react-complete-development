import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          ReactBlog
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }

              >
                Web
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }

              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }

              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }

              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }

              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
