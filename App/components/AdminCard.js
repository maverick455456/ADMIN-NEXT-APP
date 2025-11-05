'use client';

export default function AdminCard({ admin, onClick }) {
  return (
    <article 
      className="admin-card" 
      onClick={() => onClick(admin.id)}
      role="button" 
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(admin.id);
        }
      }}
    >
      <div className="img-wrap">
        <div className="ring" aria-hidden="true"></div>
        <img alt={admin.name} src={admin.img} />
      </div>
      <div className="admin-name">{admin.name}</div>
    </article>
  );
}
