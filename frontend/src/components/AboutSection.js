import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => (
  <div className="container my-5">
    <div className="section-title text-center">Tentang Kami</div>
    <div className="mb-3 text-center">
      <span style={{ fontSize: '1.2rem', color: '#e53935' }}>
        Communication, Relations & CSR PT KPI RU V Balikpapan
      </span>
      <br />
      <span style={{ fontWeight: 500 }}>
        berperan dalam menjaga citra perusahaan, membangun hubungan strategis dengan stakeholder, 
        serta melaksanakan program tanggung jawab sosial dan lingkungan.
      </span>
    </div>
    <div className="text-center">
      <Link to="/tentang" className="link-anim">
        Baca Selengkapnya <i className="bi bi-arrow-right"></i>
      </Link>
    </div>
  </div>
);

export default AboutSection;