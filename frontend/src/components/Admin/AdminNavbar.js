import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link  text-decoration-none"
                  aria-current="page"
                  to="/seller/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/seller/productdashboard">
                  Product DashBoard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/seller/sellerproducts">
                  All Products
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit Credentials
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button type="button" class="btn btn-light mx-2">
              <Link to="/" className="text-dark text-decoration-none">
                {" "}
                <i class="fa-solid fa-right-from-bracket mx-2"></i>
                EXIT
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
