'use client';
import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AdminGrid from './components/AdminGrid';
import Modal from './components/Modal';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  const handleAdminClick = (adminId) => {
    setSelectedAdmin(adminId);
  };

  const closeModal = () => {
    setSelectedAdmin(null);
  };

  return (
    <>
      <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Navigation isOpen={isNavOpen} onClose={closeNav} />
      
      <main>
        <h1>MONEY HEIST ADMINS</h1>
        <AdminGrid onAdminClick={handleAdminClick} />
      </main>

      <Modal 
        isOpen={!!selectedAdmin} 
        adminId={selectedAdmin} 
        onClose={closeModal} 
      />

      <footer>© 2025 MONEY HEIST OFC — Admin Network</footer>

      <style jsx global>{`
        /* Add all the CSS from your original file here */
        /* I'm including the key parts for brevity */
        
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 18px;
          background: var(--glass);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(139,68,255,0.06);
          z-index: 1200;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--muted);
          font-weight: 700;
        }

        .brand .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(90deg, var(--accent-pink), var(--accent-purple));
          box-shadow: 0 0 14px rgba(139,68,255,0.16);
        }

        .menu-btn {
          width: 40px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
        }

        .menu-btn span {
          position: absolute;
          left: 8px;
          right: 8px;
          height: 3px;
          background: #fff;
          border-radius: 3px;
          transition: all .28s;
        }

        .menu-btn span:nth-child(1) { top: 8px; }
        .menu-btn span:nth-child(2) { top: 15px; }
        .menu-btn span:nth-child(3) { top: 22px; }

        .menu-btn.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .menu-btn.open span:nth-child(2) { opacity: 0; }
        .menu-btn.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          transition: opacity .28s;
          z-index: 1100;
        }

        .overlay.show {
          opacity: 1;
          visibility: visible;
        }

        .nav-panel {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 300px;
          transform: translateX(108%);
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border-left: 1px solid rgba(139,68,255,0.06);
          backdrop-filter: blur(14px);
          box-shadow: -20px 0 60px rgba(0,0,0,0.6);
          padding: 84px 18px 24px;
          transition: transform .36s cubic-bezier(.2,.9,.2,1);
          z-index: 1150;
        }

        .nav-panel.open {
          transform: translateX(0);
        }

        .nav-panel a {
          display: block;
          padding: 12px 14px;
          margin: 8px 0;
          border-radius: 12px;
          color: var(--muted);
          text-decoration: none;
          font-weight: 600;
          transition: background .18s, transform .18s;
        }

        .nav-panel a:hover {
          background: linear-gradient(90deg, rgba(139,68,255,0.06), rgba(255,74,199,0.04));
          transform: translateX(-6px);
        }

        main {
          max-width: 1100px;
          margin: 0 auto;
          padding: 110px 18px 90px;
          text-align: center;
        }

        h1 {
          font-size: 28px;
          margin-bottom: 26px;
          color: var(--muted);
          text-shadow: 0 0 18px rgba(139,68,255,0.04);
        }

        .admin-grid {
          display: grid;
          gap: 22px;
          grid-template-columns: repeat(3, 1fr);
          align-items: start;
        }

        @media (max-width: 1000px) {
          .admin-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .admin-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1001px) {
          .admin-grid .admin-card:nth-child(7) {
            grid-column: 2;
          }
        }

        @media (max-width: 1000px) {
          .admin-grid .admin-card:nth-child(7) {
            grid-column: 1 / span 2;
            justify-self: center;
            max-width: 360px;
          }
        }

        .admin-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(139,68,255,0.06);
          border-radius: 14px;
          padding: 12px;
          text-align: center;
          cursor: pointer;
          position: relative;
          transition: transform .22s, box-shadow .22s;
          box-shadow: 0 8px 26px rgba(0,0,0,0.55);
        }

        .admin-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(139,68,255,0.08);
        }

        .admin-name {
          margin-top: 10px;
          font-weight: 700;
          color: var(--muted);
          font-size: 14px;
        }

        .img-wrap {
          width: 100%;
          height: 140px;
          border-radius: 12px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          margin: 0 auto;
        }

        .img-wrap img {
          width: 88%;
          height: 86%;
          object-fit: cover;
          border-radius: 10px;
          position: relative;
          z-index: 5;
          border: 3px solid rgba(0,0,0,0.2);
        }

        .img-wrap .ring {
          position: absolute;
          inset: -6px;
          border-radius: 14px;
          z-index: 3;
          pointer-events: none;
          background: conic-gradient(from 0deg, rgba(255,47,109,0.95), rgba(255,47,109,0.0) 30%, rgba(255,47,109,0.95) 50%, rgba(255,47,109,0.0) 80%, rgba(255,47,109,0.95));
          filter: blur(6px);
          opacity: 0.22;
          animation: spinSlow 5.5s linear infinite;
          mix-blend-mode: screen;
        }

        @keyframes spinSlow {
          from { transform: rotate(0); }
          to { transform: rotate(360deg); }
        }

        .admin-card:hover .img-wrap .ring {
          opacity: 0.6;
          filter: blur(9px);
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.66);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity .22s;
          z-index: 1300;
        }

        .modal.show {
          opacity: 1;
          visibility: visible;
        }

        .modal-box {
          width: 92%;
          max-width: 520px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border-radius: 12px;
          padding: 18px;
          border: 1px solid rgba(139,68,255,0.06);
          backdrop-filter: blur(12px);
          box-shadow: 0 30px 60px rgba(10,0,30,0.6);
          animation: popIn .28s ease;
          text-align: center;
          color: var(--muted);
          position: relative;
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-box img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(255,255,255,0.03);
          box-shadow: 0 12px 40px rgba(139,68,255,0.08);
        }

        .modal-box h2 {
          margin-top: 12px;
          font-size: 20px;
        }

        .modal-box p {
          margin: 8px 0;
          color: rgba(255,255,255,0.9);
          font-size: 14px;
        }

        .modal-box .social a {
          display: block;
          margin: 6px 0;
          padding: 9px;
          border-radius: 10px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-pink));
          font-weight: 700;
        }

        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.04);
          color: var(--muted);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        }

        .modal-close:hover {
          background: rgba(139,68,255,0.06);
        }

        footer {
          padding: 28px 12px;
          text-align: center;
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
          }
