import React from "react";

const SidebarLinks = () => {
  return (
    <ul className="nav flex-column mt-4">
      <li className="nav-item">
        <a className="nav-link text-white active" href="#">
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Accounts
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Transactions
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Cards
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Settings
        </a>
      </li>
    </ul>
  );
};

export default SidebarLinks;
