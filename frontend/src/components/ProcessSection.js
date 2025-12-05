import React from 'react';

const ProcessSection = () => (
  <div className="container my-5">
    <div className="section-title text-center" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
      Bagaimana Keluhan Anda Ditangani?
    </div>
    <div className="d-flex flex-wrap align-items-center justify-content-center mb-3">
      <div className="text-center mx-2">
        <div className="step-icon"><i className="bi bi-file-earmark-text"></i></div>
        <div style={{ fontSize: '0.98rem' }}>1. Isi Form</div>
      </div>
      <div className="step-arrow"><i className="bi bi-arrow-right"></i></div>
      <div className="text-center mx-2">
        <div className="step-icon"><i className="bi bi-check2-circle"></i></div>
        <div style={{ fontSize: '0.98rem' }}>2. Verifikasi</div>
      </div>
      <div className="step-arrow"><i className="bi bi-arrow-right"></i></div>
      <div className="text-center mx-2">
        <div className="step-icon"><i className="bi bi-clipboard-check"></i></div>
        <div style={{ fontSize: '0.98rem' }}>3. Ditindaklanjuti</div>
      </div>
      <div className="step-arrow"><i className="bi bi-arrow-right"></i></div>
      <div className="text-center mx-2">
        <div className="step-icon"><i className="bi bi-chat-dots"></i></div>
        <div style={{ fontSize: '0.98rem' }}>4. Feedback</div>
      </div>
    </div>
  </div>
);

export default ProcessSection;