'use client';

const navItems = [
  { label: 'Loging', url: 'https://www.freebots.store/r/NIPUNO6D43' },
  { label: 'Home', url: 'https://www.freebots.store' },
  { label: 'Service', url: 'https://www.freebots.store/services' },
  { label: 'FAQ', url: 'https://www.freebots.store/faq' },
  { label: 'Team', url: 'https://www.freebots.store/team' },
  { label: 'About', url: 'https://www.freebots.store/about' },
  { label: 'Contact', url: 'https://www.freebots.store/contact' },
  { label: 'Privacy', url: 'https://www.freebots.store/privacy' },
  { label: 'Terms', url: 'https://www.freebots.store/terms' },
];

export default function Navigation({ isOpen, onClose }) {
  const handleNavClick = (url) => {
    onClose();
    setTimeout(() => {
      window.location.href = url;
    }, 240);
  };

  return (
    <>
      <div 
        className={`overlay ${isOpen ? 'show' : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <nav 
        className={`nav-panel ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.url);
            }}
          >
            ❖ {item.label}
          </a>
        ))}
      </nav>
    </>
  );
    }
