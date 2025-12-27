import React from "react";

const TopNavbarLinks = () => {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sanjay
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Logout
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default TopNavbarLinks;
