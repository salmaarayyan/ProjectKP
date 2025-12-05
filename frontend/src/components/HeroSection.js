import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section id="hero" className="hero-section">
    <div className="hero-overlay">
      <div className="hero-title mb-3">Form Keluhan Stakeholder</div>
      <div className="hero-desc mb-4">
        Kami hadir untuk mendengarkan aspirasi dan keluhan stakeholder PT KPI RU V Balikpapan.<br />
        Setiap keluhan yang masuk akan kami proses dan tindak lanjuti sesuai prosedur yang berlaku.
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <Link to="/form" className="btn btn-danger btn-custom">Sampaikan Keluhan Sekarang</Link>
      </div>
    </div>
  </section>
);

export default HeroSection;