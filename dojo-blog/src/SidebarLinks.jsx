import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLinks = () => {
  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/accounts", label: "Accounts" },
    { path: "/transactions", label: "Transactions" },
    { path: "/cards", label: "Cards" },
    { path: "/settings", label: "Settings" },
    { path: "/home", label: "Home" },
    { path: "/about-us", label: "About" },
    { path: "/contact-us", label: "Contact" },
    { path: "/gallery", label: "Gallery" },
  ];

  return (
    <ul className="nav flex-column mt-4 text-justify-content-left">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-white bg-primary"
                : "nav-link text-white"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SidebarLinks;
