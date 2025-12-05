import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom p-0">
      <div className="d-flex w-100 align-items-center">
        <div className="logo-bg d-flex align-items-center justify-content-center px-4 py-3">
          <img src="/images/PTKPI.png" alt="Logo PT KPI" style={{ height: 54 }} />
        </div>
        <span className="navbar-brand ms-3 mb-0">
          Commrel & CSR <br /> <span style={{ fontWeight: 500 }}>PT KPI RU V Balikpapan</span>
        </span>
        <div className="flex-grow-1 d-flex justify-content-end pe-5">
          <ul className="navbar-nav flex-row flex-nowrap gap-3 ms-4">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/form"
              >
                Form Keluhan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/tentang"
              >
                Tentang Kami
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;