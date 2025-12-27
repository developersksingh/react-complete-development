import React from "react";
import SidebarLinks from "./SidebarLinks";
import TopNavbarLinks from "./TopNavbarLinks";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <nav
          id="sidebarMenu"
          className="col-lg-2 col-md-3 d-md-block bg-dark sidebar collapse min-vh-100"
        >
          <div className="position-sticky pt-3">
            <h5 className="text-white text-center">MyBank</h5>
            <SidebarLinks />
          </div>
        </nav>

        {/* Main content */}
        <main className="col-lg-10 col-md-9 ms-sm-auto px-md-4">

          {/* Top Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 rounded">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <span className="navbar-brand">Dashboard</span>
              <TopNavbarLinks />
            </div>
          </nav>

          {/* Dashboard Cards */}
          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">Account Balance</h6>
                  <h4 className="text-success">₹1,25,000</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">Total Transactions</h6>
                  <h4>248</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">Active Cards</h6>
                  <h4>3</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="card mt-4 shadow-sm">
            <div className="card-header">Recent Transactions</div>
            <div className="table-responsive">
              <table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>25 Dec 2025</td>
                    <td>ATM Withdrawal</td>
                    <td>₹5,000</td>
                    <td className="text-danger">Debit</td>
                  </tr>
                  <tr>
                    <td>24 Dec 2025</td>
                    <td>Salary Credit</td>
                    <td>₹50,000</td>
                    <td className="text-success">Credit</td>
                  </tr>
                  <tr>
                    <td>23 Dec 2025</td>
                    <td>Online Purchase</td>
                    <td>₹2,499</td>
                    <td className="text-danger">Debit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;
