import React, { useState } from 'react';
import api from '../api';

const ComplaintForm = () => {
  const [form, setForm] = useState({ nama: '', alamat: '', no_telp: '', keluhan: '' });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi no telp: harus 10-15 digit dan hanya angka
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(form.no_telp)) {
      setError('Nomor telepon harus terdiri dari 10-15 digit angka');
      return;
    }

    setLoading(true); setError(null);
    try {
      await api.post('/keluhan/submit', form);
      setSubmittedName(form.nama); // Simpan nama untuk ditampilkan di modal
      setShowModal(true); // Tampilkan modal
      setForm({ nama: '', alamat: '', no_telp: '', keluhan: '' }); // Reset form
    } catch (err) {
      setError(err.response?.data?.message || 'Gagal mengirim keluhan');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmittedName('');
  };

  return (
    <>
      <div id="form" className="container main-form-container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <div className="col-lg-7 col-md-9">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="mb-2 text-center fw-bold" style={{ letterSpacing: '1px' }}>Form Keluhan Stakeholder</h2>
              <div className="form-desc text-center mb-3">
                Silakan isi data dan keluhan Anda di bawah ini.<br />Tim kami akan segera menindaklanjuti laporan Anda.
              </div>

              {error && <div className="alert alert-danger text-center">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-person" style={{ fontSize: '1.2em', verticalAlign: 'middle', marginRight: 6, color: '#1A4EB6' }}></i>
                    Nama Pelapor
                  </label>
                  <input type="text" name="nama" className="form-control rounded-pill px-4 py-2" value={form.nama} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-geo-alt" style={{ fontSize: '1.2em', verticalAlign: 'middle', marginRight: 6, color: '#1A4EB6' }}></i>
                    Alamat Pelapor
                  </label>
                  <input type="text" name="alamat" className="form-control rounded-pill px-4 py-2" value={form.alamat} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-telephone" style={{ fontSize: '1.2em', verticalAlign: 'middle', marginRight: 6, color: '#1A4EB6' }}></i>
                    No. Telp <small className="text-muted">(10-15 digit)</small>
                  </label>
                  <input 
                    type="text" 
                    name="no_telp" 
                    className="form-control rounded-pill px-4 py-2" 
                    value={form.no_telp} 
                    onChange={handleChange}
                    pattern="[0-9]{10,15}"
                    title="Nomor telepon harus 10-15 digit angka"
                    maxLength="15"
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    <i className="bi bi-chat-dots" style={{ fontSize: '1.2em', verticalAlign: 'middle', marginRight: 6, color: '#1A4EB6' }}></i>
                    Bentuk Laporan
                  </label>
                  <textarea name="keluhan" rows="4" className="form-control rounded-4 px-4 py-2" value={form.keluhan} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary w-100 rounded-pill py-2 fw-bold shadow" disabled={loading}>
                  {loading ? 'Mengirim...' : 'Kirim Keluhan'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ borderRadius: '16px', border: 'none' }}>
              <div className="modal-body text-center p-5">
                <div className="mb-3">
                  <i className="bi bi-check-circle-fill" style={{ fontSize: '4rem', color: '#28a745' }}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#222' }}>Keluhan Berhasil Dikirim!</h4>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
                  Terima kasih <strong>{submittedName}</strong>, keluhan Anda telah kami terima.<br />
                  Mohon ditunggu, keluhan Anda akan segera kami proses.
                </p>
                <button 
                  className="btn btn-primary rounded-pill px-5 py-2 fw-bold mt-3" 
                  onClick={closeModal}
                  style={{ background: 'linear-gradient(90deg, #d32f2f 60%, #e7353f 100%)', border: 'none' }}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComplaintForm;