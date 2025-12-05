import React from 'react';
import './Footer.js';

const Footer = () => (
  <>
    <div id="tentang" className="container-fluid py-5 main-form-container" style={{ background: '#143447', color: '#fff' }}>
      <div className="row justify-content-center align-items-center">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 text-center">
              <div className="mb-3" style={{ fontSize: '1.08rem' }}>
                <div className="mb-1"><i className="bi bi-telephone contact-icon"></i>(0542) 731988</div>
                <div className="mb-1"><i className="bi bi-envelope contact-icon"></i>pcc135@pertamina.com</div>
                <div className="mb-1"><i className="bi bi-geo-alt contact-icon"></i>Jl. KL. Yos Sudarso, Balikpapan, Kalimantan Timur</div>
              </div>
              <div className="d-flex justify-content-center gap-5 mb-3" style={{ fontSize: '1.15rem', fontWeight: 600 }}>
                <a href="#form" className="footer-menu-link">Form Keluhan</a>
                <a href="#tentang" className="footer-menu-link">Tentang Kami</a>
              </div>
              <div className="mt-2">
                <a href="https://www.instagram.com/pertamina_ru5" target="_blank" rel="noreferrer" className="footer-ig-link"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      &copy; {new Date().getFullYear()} Commrel Pertamina RU V. All rights reserved.
    </footer>
  </>
);

export default Footer;