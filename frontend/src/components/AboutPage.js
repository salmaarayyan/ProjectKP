import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('sehat');

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero" style={{ marginTop: '48px', marginBottom: '32px' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A4EB6', marginBottom: '16px', lineHeight: 1 }}>
                Tentang Kami,<br />
                <span style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E7353F' }}>
                  Communication, Relation & CSR <br /> PT KPI RU V Balikpapan
                </span>
              </div>
              <div style={{ fontSize: '1.15rem', color: '#181c26', marginBottom: '24px' }}>
                Kami berperan dalam menjaga citra perusahaan, membangun hubungan strategis dengan stakeholder (pemerintah, media, masyarakat, NGO, komunitas, hingga DPRD), serta melaksanakan program tanggung jawab sosial dan lingkungan.
              </div>
              <Link to="/form" className="btn btn-primary">Sampaikan Keluhan Sekarang</Link>
            </div>
            <div className="col-lg-6">
              <img src="/images/RU V.jpg" alt="Foto Kilang" className="img-fluid rounded" style={{ objectFit: 'cover', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="visi-misi-full py-5" style={{ background: '#0a3570' }}>
        <div className="container-fluid px-0">
          <div className="text-center py-5" style={{ color: '#fff' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '2px' }} className="mb-4">VISI</h2>
            <p style={{ fontSize: '1.35rem', fontWeight: 400 }} className="mb-5">Sebagai Perusahaan Kilang Minyak dan Petrokimia Berkelas Dunia</p>
            <div style={{ width: '70%', height: '4px', background: '#e53935', margin: '0 auto 32px auto', borderRadius: '2px' }}></div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '2px' }} className="mb-4">MISI</h2>
            <ul style={{ textAlign: 'justify', padding: '0 8vw', fontSize: '1.35rem', listStylePosition: 'inside' }}>
              <li style={{ marginBottom: '18px' }}>Mengelola operasional kilang dalam penyediaan kebutuhan produk BBM, NBBM dan Petrokimia dengan aman, handal, efisien serta ramah lingkungan berdasarkan kaidah HSSE Excellence</li>
              <li style={{ marginBottom: '18px' }}>Meningkatkan profitabilitas melalui iklim kerja yang dapat menumbuhkan budaya inovatif dan improvement berkelanjutan</li>
              <li style={{ marginBottom: '18px' }}>Mengelola bisnis perusahaan secara profesional dengan memenuhi prinsip-prinsip tata kelola yang baik dan memberikan manfaat kepada seluruh stakeholder</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fungsi dan Peran */}
      <section className="fungsi-peran-section py-5" style={{ background: '#fff' }}>
        <div className="container">
          <h2 className="mb-4 text-center" style={{ color: '#1A4EB6', fontWeight: 700 }}>Fungsi dan Peran</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="fungsi-grid">
                <h4 style={{ color: '#E7353F', fontWeight: 700, marginBottom: '12px' }}>Internal Communication</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Menyampaikan informasi perusahaan ke karyawan & manajemen.</li>
                  <li>Mengelola komunikasi internal lewat email, Whatsapp Group, townhall meeting.</li>
                  <li>Mengadakan event internal untuk menjaga engagement karyawan.</li>
                </ul>
                <p style={{ textAlign: 'left', color: '#007bff' }}>Memastikan semua orang di dalam perusahaan paham informasi & tetap solid.</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="fungsi-grid">
                <h4 style={{ color: '#E7353F', fontWeight: 700, marginBottom: '12px' }}>Public Relations</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Menyusun press release, press conference, wawancara media.</li>
                  <li>Mengelola campaign (kampanye proyek, kampanye perusahaan/holding).</li>
                  <li>Melakukan media monitoring & analisis isu.</li>
                  <li>Menangani komunikasi krisis (jika ada isu negatif di publik).</li>
                </ul>
                <p style={{ textAlign: 'left', color: '#007bff' }}>Menjaga citra positif perusahaan di mata publik & media</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="fungsi-grid">
                <h4 style={{ color: '#E7353F', fontWeight: 700, marginBottom: '12px' }}>Stakeholder Relations</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Membangun & memelihara hubungan dengan stakeholder eksternal.</li>
                  <li>Melakukan courtesy visit (kunjungan ke instansi/lembaga).</li>
                  <li>Sponsorship & donasi non-CSR.</li>
                  <li>Memenuhi permintaan data/informasi stakeholder.</li>
                </ul>
                <p style={{ textAlign: 'left', color: '#007bff' }}>Memperoleh dukungan dan social license to operate dari masyarakat & instansi.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-1">
            <div className="col-12 col-md-6">
              <div className="fungsi-grid">
                <h4 style={{ color: '#E7353F', fontWeight: 700, marginBottom: '12px' }}>Corporate Secretary Functions</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Menjadi penghubung resmi perusahaan dengan lembaga pemerintahan/regulator.</li>
                  <li>Menangani komunikasi formal & administrasi perusahaan.</li>
                  <li>Memastikan perusahaan patuh pada aturan tata kelola dalam aspek komunikasi & hubungan eksternal.</li>
                </ul>
                <p style={{ textAlign: 'left', color: '#007bff' }}>Menjaga kelancaran hubungan institusional & kepatuhan regulasi.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="fungsi-grid">
                <h4 style={{ color: '#E7353F', fontWeight: 700, marginBottom: '12px' }}>CSR & SMEPP Management</h4>
                <ul style={{ textAlign: 'left' }}>
                  <li>Menyusun RKAP Program CSR di unit kerja.</li>
                  <li>Monitoring & evaluasi implementasi program dan pengelolaan anggaran CSR & SMEPP</li>
                  <li>Mendorong peningkatan citra perusahaan.</li>
                  <li>Mendukung pencapaian PROPER Emas & laporan keberlanjutan.</li>
                </ul>
                <p style={{ textAlign: 'left', color: '#007bff' }}>Mendukung operasional perusahaan, meningkatkan citra positif, serta memberi manfaat nyata bagi masyarakat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program TJSL - 4 Kartu Icon */}
      <section className="program-tjsl-section py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="mb-4 text-center">
            <span style={{ color: '#1A4EB6', fontWeight: 700 }}>Program</span><br />
            <span style={{ color: '#e53935', fontWeight: 700 }}>Tanggung Jawab Sosial Lingkungan</span><br />
            <span style={{ color: '#000', fontSize: '1.5rem' }}>PT Kilang Pertamina Internasional Refinery Unit V Balikpapan</span>
          </h2>
          <div className="row g-4">
            <div className="col-md-3 col-6">
              <div className="program-grid text-center">
                <img src="/images/sehat.png" alt="Sehat" className="img-fluid rounded mb-3" style={{ height: 160, width: 'auto', objectFit: 'contain', margin: '0 auto', display: 'block' }} />
                <p style={{ fontSize: '1rem' }}>KAMPUNG SEHAT & SIAGA BENCANA</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="program-grid text-center">
                <img src="/images/cerdas.png" alt="Cerdas" className="img-fluid rounded mb-3" style={{ height: 160, width: 'auto', objectFit: 'contain', margin: '0 auto', display: 'block' }} />
                <p style={{ fontSize: '1rem' }}>KAMPUNG PANDAI MANDIRI BELAJAR<br /><span style={{ fontWeight: 700 }}>(KAPABEL)</span></p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="program-grid text-center">
                <img src="/images/berdikari.png" alt="Berdikari" className="img-fluid rounded mb-3" style={{ height: 160, width: 'auto', objectFit: 'contain', margin: '0 auto', display: 'block' }} />
                <p style={{ fontSize: '1rem' }}>BERDIKARI & BERDAYA<br /><span style={{ fontWeight: 700 }}>(BERKARYA)</span></p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="program-grid text-center">
                <img src="/images/hijau.png" alt="Hijau" className="img-fluid rounded mb-3" style={{ height: 160, width: 'auto', objectFit: 'contain', margin: '0 auto', display: 'block' }} />
                <p style={{ fontSize: '1rem' }}>PELITA RAWABENING</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Program TJSL - Tabs */}
      <section className="program-detail-section py-5" style={{ background: '#fff' }}>
        <div className="container">
          <ul className="nav nav-tabs justify-content-center mb-4" role="tablist">
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'sehat' ? 'active' : ''}`} onClick={() => setActiveTab('sehat')}>Pertamina Sehat</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'cerdas' ? 'active' : ''}`} onClick={() => setActiveTab('cerdas')}>Pertamina Cerdas</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'berdikari' ? 'active' : ''}`} onClick={() => setActiveTab('berdikari')}>Pertamina Berdikari</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'hijau' ? 'active' : ''}`} onClick={() => setActiveTab('hijau')}>Pertamina Hijau</button>
            </li>
          </ul>
          
          <div className="tab-content p-4 rounded shadow-sm bg-light">
            {activeTab === 'sehat' && (
              <div>
                <h4 className="program-title" style={{ color: '#B1855C' }}>KAMPUNG SEHAT & SIAGA BENCANA</h4>
                <p className="program-desc">Program ini bertujuan untuk meningkatkan kualitas kehidupan masyarakat yang sehat dan tangguh bencana.</p>
                <div className="table-responsive program-table-rounded">
                  <table className="table table-hover table-bordered align-middle mb-0">
                    <thead>
                      <tr><th>Nama Program</th><th>Daerah</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Warga Siaga Sehat (WASIAT) Dewi Shinta</td><td>Ds. Girimukti, Penajam Paser Utara</td></tr>
                      <tr><td>Warga Siaga Sehat (WASIAT) Ria Manuntung 13</td><td>Kel. Baru Tengah, Balikpapan</td></tr>
                      <tr><td>Warga Siaga Sehat (WASIAT) Sejahtera 51</td><td>Kel. Baru Ilir, Balikpapan</td></tr>
                      <tr><td rowSpan={2}>Kampung Siaga Bencana (KSB)</td><td>Kel. Margasari, Balikpapan</td></tr>
                      <tr><td>Kel. Baru Tengah, Balikpapan</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'cerdas' && (
              <div>
                <h4 className="program-title" style={{ color: '#e53935' }}>KAMPUNG PANDAI MANDIRI BELAJAR (KAPABEL)</h4>
                <p className="program-desc">Program ini bertujuan untuk menguatkan SDM masyarakat dalam menghadapi pengembangan IKN dan kesiapan menuju era Globalisasi.</p>
                <div className="table-responsive program-table-rounded">
                  <table className="table table-hover table-bordered align-middle mb-0">
                    <thead>
                      <tr><th>Nama Program</th><th>Daerah</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Kampung Inggris</td><td>Kel. Lawe - Lawe, Penajam Paser Utara</td></tr>
                      <tr><td>KAPABEL</td><td>Balikpapan & Penajam Paser Utara</td></tr>
                      <tr><td>Rumah Berseri (RU V Bergerak, Bersinergi, Mandiri)</td><td>Balikpapan & Penajam Paser Utara</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'berdikari' && (
              <div>
                <h4 className="program-title" style={{ color: '#009688' }}>BERDIKARI & BERDAYA (BERKARYA)</h4>
                <p className="program-desc">Program ini bertujuan untuk penguatan kapasitas masyarakat terhadap ketahanan pangan dan kelestarian alam.</p>
                <div className="table-responsive program-table-rounded">
                  <table className="table table-hover table-bordered align-middle mb-0">
                    <thead>
                      <tr><th>Nama Program</th><th>Daerah</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Ketahanan Pangan Girimukti (KENARI)</td><td>Ds. Girimukti, Penajam Paser Utara</td></tr>
                      <tr><td>Gerakan Pengembangan Tani Mandiri (Gerbang Taman)</td><td>Kel. Karang Joang, Balikpapan</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'hijau' && (
              <div>
                <h4 className="program-title" style={{ color: '#43a047' }}>PELITA RAWABENING</h4>
                <p className="program-desc">Program Pelita Rawabening (Pengolahan Lingkungan Terpadu, Rain Water Hervesting for Urban Farming) merupakan program penguatan masyarakat mengenai kepedulian keberlanjutan lingkungan yang adaptif terhadap perubahan iklim.</p>
                <div className="table-responsive program-table-rounded">
                  <table className="table table-hover table-bordered align-middle mb-0">
                    <thead>
                      <tr><th>Nama Program</th><th>Daerah</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Rainwater Harvesting and Urban Farming (Rawabening)</td><td>Kel. Margasari, Balikpapan</td></tr>
                      <tr><td>Pengolahan Lingkungan Terpadu (Pelita Borneo)</td><td>Kel. Baru Tengah, Balikpapan</td></tr>
                      <tr><td>Kampung Iklim</td><td>Kel. Muara Rapak, Balikpapan</td></tr>
                      <tr><td>Margasari Olah Jelantah (Mariojela)</td><td>Kel. Margasari, Balikpapan</td></tr>
                      <tr><td>Tempat Pengolahan Sampah Terpadu (TPST)</td><td>Kel. Margasari, Balikpapan</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;