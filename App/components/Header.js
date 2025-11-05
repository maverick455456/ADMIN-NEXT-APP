'use client';

export default function Header({ isNavOpen, toggleNav }) {
  return (
    <header>
      <a className="brand" href="https://www.freebots.store" target="_blank" rel="noopener">
        <span className="dot" aria-hidden="true"></span>
        MONEY HEIST OFC ADMINS
      </a>

      <div 
        className={`menu-btn ${isNavOpen ? 'open' : ''}`} 
        onClick={toggleNav}
        aria-label="menu" 
        title="menu" 
        role="button" 
        tabIndex={0}
      >
        <span></span><span></span><span></span>
      </div>
    </header>
  );
    }
