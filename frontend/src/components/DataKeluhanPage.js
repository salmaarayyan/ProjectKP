import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import api from '../api';

const DataKeluhanPage = () => {
  const [keluhanList, setKeluhanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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
    setLoading(true);
    try {
      const { data } = await api.get('/keluhan');
      setKeluhanList(data.data || []);
    } catch (err) {
      console.error(err);
      alert('Gagal memuat data');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus, currentStatus) => {
    // Cek apakah status mundur (tidak diizinkan)
    const statusOrder = {
      'Belum Diproses': 0,
      'Sedang Diproses': 1,
      'Sudah Diproses': 2
    };

    if (statusOrder[newStatus] < statusOrder[currentStatus]) {
      alert('Status tidak bisa dikembalikan ke status sebelumnya!');
      return;
    }

    try {
      await api.put(`/keluhan/${id}`, { status: newStatus });
      fetchData();
      alert('Status berhasil diupdate');
    } catch (err) {
      console.error(err);
      alert('Gagal update status');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus keluhan ini?')) {
      try {
        await api.delete(`/keluhan/${id}`);
        fetchData();
        alert('Keluhan berhasil dihapus');
      } catch (err) {
        console.error(err);
        alert('Gagal menghapus');
      }
    }
  };

  const filteredKeluhan = keluhanList.filter(k =>
    k.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.alamat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: '100vh' }}>
        <div className="col-md-3 col-lg-2 p-0" style={{ background: '#143447' }}>
          <Sidebar />
        </div>
        <main className="col-md-9 col-lg-10 p-4" style={{ background: '#f8f9fa' }}>
          <h2 className="mb-4 fw-bold" style={{ color: '#222' }}>Data Keluhan</h2>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Cari nama atau alamat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: 8, padding: '10px 12px' }}
            />
          </div>

          {/* Table */}
          <div className="card shadow-sm" style={{ borderRadius: 16, border: 'none', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="table table-hover align-middle mb-0" style={{ minWidth: '1000px' }}>
                <thead style={{ background: '#e9ecef' }}>
                  <tr>
                    <th style={{ color: '#222', fontWeight: 700, padding: '12px 8px' }}>No</th>
                    <th style={{ color: '#222', fontWeight: 700, padding: '12px 8px' }}>Nama</th>
                    <th style={{ color: '#222', fontWeight: 700, padding: '12px 8px' }}>Alamat</th>
                    <th style={{ color: '#222', fontWeight: 700, padding: '12px 8px' }}>No. Telp</th>
                    <th style={{ color: '#222', fontWeight: 700, padding: '12px 8px' }}>Keluhan</th>
                    <th style={{ color: '#222', fontWeight: 700, padding: '12px 8px' }}>Tanggal</th>
                    <th style={{ color: '#222', fontWeight: 700, padding: '12px 8px' }}>Status</th>
                    <th style={{ color: '#222', fontWeight: 700, padding: '12px 8px' }}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="8" className="text-center py-4">Loading...</td>
                    </tr>
                  ) : filteredKeluhan.length > 0 ? (
                    filteredKeluhan.map((keluhan, idx) => (
                      <tr key={keluhan.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                        <td style={{ padding: '12px 8px', fontWeight: 600 }}>{idx + 1}</td>
                        <td style={{ padding: '12px 8px' }}><strong>{keluhan.nama}</strong></td>
                        <td style={{ padding: '12px 8px', maxWidth: '150px' }}>{keluhan.alamat}</td>
                        <td style={{ padding: '12px 8px' }}>{keluhan.no_telp}</td>
                        <td style={{ 
                          padding: '12px 8px', 
                          maxWidth: '350px',
                          wordWrap: 'break-word',
                          whiteSpace: 'normal',
                          lineHeight: '1.5'
                        }}>
                          {keluhan.keluhan}
                        </td>
                        <td style={{ padding: '12px 8px', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                          {new Date(keluhan.tanggal).toLocaleString('id-ID')}
                        </td>
                        <td style={{ padding: '12px 8px', minWidth: '180px' }}>
                          <select
                            className="form-select form-select-sm"
                            value={keluhan.status}
                            onChange={(e) => handleStatusChange(keluhan.id, e.target.value, keluhan.status)}
                            style={{ 
                              borderRadius: 6, 
                              fontSize: '0.9rem',
                              cursor: 'pointer',
                              padding: '6px 12px',
                              width: '100%'
                            }}
                          >
                            <option value="Belum Diproses">Belum Diproses</option>
                            <option value="Sedang Diproses">Sedang Diproses</option>
                            <option value="Sudah Diproses">Sudah Diproses</option>
                          </select>
                        </td>
                        <td style={{ padding: '12px 8px' }}>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(keluhan.id)}
                            style={{ borderRadius: 6, fontSize: '0.85rem', padding: '6px 10px' }}
                          >
                            <i className="bi bi-trash"></i> Hapus
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center py-4 text-muted">
                        Tidak ada data keluhan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DataKeluhanPage;