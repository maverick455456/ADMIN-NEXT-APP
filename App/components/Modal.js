'use client';
import { useEffect } from 'react';

const ADMIN_DATA = {
  nipun: {
    img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png",
    name: "MR NIPUN OFC",
    info: `
      <p>CONTACT : <a href="https://wa.me/+94757255903" target="_blank" rel="noopener">+94 757255903</a></p>
      <p>AGE : 18</p><p>FROM : Sri Lanka</p>
      <br><h3>🌐 SOCIAL MEDIA</h3>
      <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" rel="noopener">Whatsapp Channel</a>
      <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" rel="noopener">Facebook Account</a>
      <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" rel="noopener">Facebook Page</a>
      <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" rel="noopener">TikTok</a>
      <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" rel="noopener">YouTube</a>
      <a href="https://www.instagram.com/mr_nipun_ofc/" target="_blank" rel="noopener">Instagram</a>
      <a href="https://t.me/Profesor9999" target="_blank" rel="noopener">Telegram</a>
    `
  },
  // ... other admin data (same as above)
};

export default function Modal({ isOpen, adminId, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.getElementById('modalClose')?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !adminId) return null;

  const admin = ADMIN_DATA[adminId];
  if (!admin) return null;

  return (
    <div 
      className={`modal ${isOpen ? 'show' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-box">
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close"
          id="modalClose"
        >
          ✖
        </button>
        <img id="modalImg" src={admin.img} alt={admin.name} />
        <h2 id="modalName">{admin.name}</h2>
        <div 
          id="modalInfo" 
          className="social"
          dangerouslySetInnerHTML={{ __html: admin.info }}
        />
      </div>
    </div>
  );
        }
