import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          AURA
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="shopDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SHOP ALL
              </a>
              <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    36MM
                  </a>
                </li>
                {/* Add other dropdown items here */}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <strong>ABOUT AURA</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;