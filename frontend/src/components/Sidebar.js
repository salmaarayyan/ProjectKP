import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin_nama');
    navigate('/admin/login');
  };

  const isActive = (path) => location.pathname === path;

  const menuItemStyle = (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    margin: '0 8px',
    color: active ? '#ffd700' : '#fff',
    fontSize: '1rem',
    fontWeight: active ? 700 : 600,
    textDecoration: 'none',
    borderRadius: '8px',
    background: active ? 'rgba(45,62,80,0.8)' : 'transparent',
    transition: 'all 0.2s',
    cursor: 'pointer'
  });

  return (
    <div style={{ 
      background: '#143447',
      minHeight: '100vh',
      padding: '20px 8px',
      position: 'sticky',
      top: 0,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <img src="/images/PTKPI.png" alt="Logo" style={{ height: '60px', width: 'auto' }} />
      </div>

      {/* Divider */}
      <hr style={{ borderColor: '#fff', margin: '12px 0 16px 0', opacity: 0.3 }} />

      {/* Title & Subtitle */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h6 className="text-white fw-bold" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
          Commrel & CSR
        </h6>
        <p className="text-white-50" style={{ fontSize: '0.95rem', marginBottom: 0 }}>
          PT KPI RU V Balikpapan
        </p>
      </div>

      {/* Menu */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
        <Link 
          to="/admin/dashboard"
          style={menuItemStyle(isActive('/admin/dashboard'))}
          onMouseEnter={(e) => {
            if (!isActive('/admin/dashboard')) {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = '#ffd700';
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive('/admin/dashboard')) {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }
          }}
        >
          <i className="bi bi-speedometer2"></i>
          <span>Dashboard</span>
        </Link>

        <Link 
          to="/admin/data-keluhan"
          style={menuItemStyle(isActive('/admin/data-keluhan'))}
          onMouseEnter={(e) => {
            if (!isActive('/admin/data-keluhan')) {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = '#ffd700';
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive('/admin/data-keluhan')) {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#fff';
            }
          }}
        >
          <i className="bi bi-table"></i>
          <span>Data Keluhan</span>
        </Link>
      </nav>

      {/* Logout Button */}
      <button 
        onClick={handleLogout}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          margin: '0 8px 8px 8px',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: '8px',
          background: '#e53935',
          border: 'none',
          transition: 'all 0.2s',
          cursor: 'pointer',
          width: 'calc(100% - 16px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#d32f2f';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#e53935';
        }}
      >
        <i className="bi bi-box-arrow-right"></i>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;