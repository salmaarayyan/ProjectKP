import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import api from '../api';

const DashboardPage = () => {
  const [stats, setStats] = useState({ total: 0, diproses: 0, selesai: 0 });
  const [recentKeluhan, setRecentKeluhan] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const { data } = await api.get('/keluhan');
      const keluhans = data.data || [];
      
      setStats({
        total: keluhans.length,
        diproses: keluhans.filter(k => k.status === 'Sedang Diproses').length,
        selesai: keluhans.filter(k => k.status === 'Sudah Diproses').length
      });
      
      setRecentKeluhan(keluhans.slice(0, 5));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: '100vh' }}>
        <div className="col-md-3 col-lg-2 p-0" style={{ background: '#143447' }}>
          <Sidebar />
        </div>
        <main className="col-md-9 col-lg-10 p-4" style={{ background: '#f8f9fa' }}>
          <h2 className="mb-4 fw-bold" style={{ color: '#222' }}>Dashboard Admin</h2>
          
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="card shadow-sm" style={{ borderRadius: 16, border: 'none' }}>
                <div className="card-body text-center p-4">
                  <h3 className="fw-bold" style={{ color: '#1A4EB6', fontSize: '2.2rem' }}>{stats.total}</h3>
                  <p style={{ color: '#444', fontSize: '1.08rem', margin: 0 }}>Total Keluhan Masuk</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm" style={{ borderRadius: 16, border: 'none' }}>
                <div className="card-body text-center p-4">
                  <h3 className="fw-bold" style={{ color: '#ff9800', fontSize: '2.2rem' }}>{stats.diproses}</h3>
                  <p style={{ color: '#444', fontSize: '1.08rem', margin: 0 }}>Sedang Diproses</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm" style={{ borderRadius: 16, border: 'none' }}>
                <div className="card-body text-center p-4">
                  <h3 className="fw-bold" style={{ color: '#4caf50', fontSize: '2.2rem' }}>{stats.selesai}</h3>
                  <p style={{ color: '#444', fontSize: '1.08rem', margin: 0 }}>Sudah Diproses</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm" style={{ borderRadius: 16, border: 'none' }}>
            <div className="card-body p-4">
              <h5 className="fw-semibold mb-3">Aktivitas Laporan Terbaru</h5>
              {recentKeluhan.length > 0 ? (
                <ul className="list-group list-group-flush">
                  {recentKeluhan.map(k => (
                    <li key={k.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderBottom: '1px solid #e9ecef' }}>
                      <span><i className="bi bi-person-circle me-2"></i><b>{k.nama}</b> telah mengisi form keluhan</span>
                      <span className="badge bg-primary rounded-pill" style={{ fontSize: '0.9rem' }}>
                        {new Date(k.tanggal).toLocaleString('id-ID')}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-muted">Belum ada data keluhan</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;