
import TopNavbarLinks from "./TopNavbarLinks";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
      {/* Main content */}
        <main className="col-lg-12 col-md-12 ms-sm-auto px-md-4">
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
            <div className="card-header">Welcome To Banking World</div>
            <div className="table-responsive">
              <table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Welcome</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>This is your dashboard where you can monitor your account activities.</td>
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
