import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const LoginPage = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { data } = await api.post('/auth/login', form);
      localStorage.setItem('token', data.token);
      localStorage.setItem('admin_nama', data.nama || 'Admin');
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      background: '#f6f6f6', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div style={{ 
        maxWidth: 350, 
        width: '100%', 
        background: '#fff', 
        borderRadius: 16, 
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)', 
        padding: '32px 28px' 
      }}>
        <h3 className="text-center mb-4 fw-bold" style={{ letterSpacing: '1px' }}>Login Admin</h3>
        
        {error && (
          <div className="alert alert-danger text-center" style={{ fontSize: '0.95rem' }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input 
              type="text" 
              name="username" 
              className="form-control" 
              style={{ borderRadius: 8 }}
              value={form.username}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-control" 
              style={{ borderRadius: 8 }}
              value={form.password}
              onChange={handleChange}
              required 
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-100" 
            style={{ 
              borderRadius: 8,
              background: 'linear-gradient(90deg, #d32f2f 60%, #e7353f 100%)',
              border: 'none'
            }}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;