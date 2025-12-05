import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import DataKeluhanPage from './components/DataKeluhanPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<Navigate to="/admin/login" />} />
        <Route path="/admin/data-keluhan" element={<DataKeluhanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;