import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SidebarLinks from "./SidebarLinks";

import Dashboard from "./Dashboard";
import BankAccountDetails from "./BankAccountDetails";
import Transactions from "./Transactions";
import Cards from "./Cards";
import Settings from "./Settings";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProductGallery from "./ProductGallery";
import BlogDetails from "./BlogDetails";
import NotFound from "./Notfound";
import Web from "./Web";

function App() {
  return (
    <div className="container-fluid p-0 d-flex min-vh-100">

      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <SidebarLinks />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <Routes>
          <Route path="/" element={<Web />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<BankAccountDetails />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/settings" element={<Settings />} />

          {/* Other Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/gallery" element={<ProductGallery />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
