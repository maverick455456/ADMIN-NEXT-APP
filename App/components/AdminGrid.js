'use client';

import AdminCard from './AdminCard';

const ADMIN_DATA = {
  nipun: {
    id: 'nipun',
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
  dila: {
    id: 'dila',
    img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Dilan.png",
    name: "MR DILA OFC",
    info: "<p>Coming Soon...</p>"
  },
  qusay: {
    id: 'qusay',
    img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Qusay.png",
    name: "MR QUSAY OFC",
    info: "<p>Coming Soon...</p>"
  },
  sachiya: {
    id: 'sachiya',
    img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Sachiya.png",
    name: "MR SACHIYA",
    info: "<p>Coming Soon...</p>"
  },
  akeel: {
    id: 'akeel',
    img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Akeel.png",
    name: "MR AKEEL OFC",
    info: "<p>Coming Soon...</p>"
  },
  heshan: {
    id: 'heshan',
    img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Heshan.png",
    name: "MR HESHAN OFC",
    info: "<p>Coming Soon...</p>"
  },
  rukshan: {
    id: 'rukshan',
    img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Rukshan.png",
    name: "MR RUKSHAN OFC",
    info: "<p>Coming Soon...</p>"
  }
};

const admins = Object.values(ADMIN_DATA);

export default function AdminGrid({ onAdminClick }) {
  return (
    <section className="admin-grid" aria-live="polite">
      {admins.map((admin) => (
        <AdminCard 
          key={admin.id} 
          admin={admin} 
          onClick={onAdminClick}
        />
      ))}
    </section>
  );
    }
