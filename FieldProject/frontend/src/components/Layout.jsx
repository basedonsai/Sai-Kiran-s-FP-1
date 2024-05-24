import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light sidebar" style={{ width: '250px', height: '100vh', position: 'fixed', top: '0', left: '0' }}>
      <div className="p-3 text-center">
        <img src="/path-to-your-logo.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
        <span className="h4">Pro Sidebar</span>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/charts" className="nav-link">
            <i className="bi bi-bar-chart"></i>
            Charts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/maps" className="nav-link">
            <i className="bi bi-geo-alt"></i>
            Maps
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/theme" className="nav-link">
            <i className="bi bi-palette"></i>
            Theme
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/components" className="nav-link">
            <i className="bi bi-box"></i>
            Components
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ecommerce" className="nav-link">
            <i className="bi bi-cart"></i>
            E-commerce
          </Link>
        </li>
        <li className="nav-item mt-3">
          <span className="text-uppercase small text-muted">Extra</span>
        </li>
        <li className="nav-item">
          <Link to="/calendar" className="nav-link">
            <i className="bi bi-calendar"></i>
            Calendar <span className="badge bg-success ms-2">New</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/documentation" className="nav-link">
            <i className="bi bi-file-earmark-text"></i>
            Documentation
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/examples" className="nav-link">
            <i className="bi bi-heart"></i>
            Examples
          </Link>
        </li>
      </ul>
      <div className="mt-auto p-3">
        <a href="https://github.com" className="btn btn-primary btn-block">
          Pro Sidebar
        </a>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  const { userRole, name, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1 min-vh-100" style={{ marginLeft: '250px' }}>
        {/* App Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginLeft: '-250px' }}>
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">App Name</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <span className="nav-link">Hello, {name}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow-1 p-3" style={{ overflow: 'auto', marginTop: '56px' }}>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-light text-center py-3">
          &copy; 2023 Your Company
        </footer>
      </div>
    </div>
  );
};

export default Layout;
