import React from 'react';

const ProgramSection = () => {
  const programs = [
    { img: '/images/form2.jpg', title: 'Pemberdayaan Masyarakat', desc: 'Kegiatan pemberdayaan mitra binaan PT KPI RU V Balikpapan melalui urban farming.' },
    { img: '/images/form3.jpg', title: 'Benchmarking', desc: 'Kegiatan benchmarking untuk meningkatkan kualitas program Tanggung Jawab Sosial Lingkungan PT KPI RU V Balikpapan.' },
    { img: '/images/form4.jpg', title: 'Simulasi Keamanan', desc: 'Kolaborasi Brimob Polda Kaltim dan Security PT KPI RU V Balikpapan dalam simulasi pengamanan obyek vital nasional.' },
    { img: '/images/form5.jpg', title: 'Monitoring & Evaluasi', desc: 'Kegiatan monitoring & evaluasi Program Kaliandra bersama stakeholder serta mitra binaan PT KPI RU V Balikpapan.' },
  ];

  return (
    <div className="container my-5">
      <div className="section-title text-center">Agenda Komunikasi & Hubungan Eksternal</div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {programs.map((prog, i) => (
          <div className="col" key={i}>
            <div className="program-card">
              <div className="program-img">
                <img src={prog.img} alt={prog.title} className="img-fluid rounded" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
              <div className="fw-bold mb-1">{prog.title}</div>
              <div style={{ fontSize: '0.98rem' }}>{prog.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSection;