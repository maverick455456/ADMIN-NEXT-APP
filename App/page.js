'use client'

/* NEXT.JS 14+ (App Router) — Single-file example and full project snippets. This file contains the ready-to-paste app/page.jsx component plus a README-style collection of other files you should add to your project.

Instructions:

1. Create a Next.js 14+ project (if you don't have one): npx create-next-app@latest my-site --experimental-app cd my-site


2. Install Tailwind + PostCSS: npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p


3. Add the files below into your project (see filenames in each section).


4. Start dev server: npm run dev



Files included below (copy each into your project):

app/layout.jsx

app/page.jsx   (the main page component — paste this file's React code)

styles/globals.css

tailwind.config.js

postcss.config.js

next.config.js

package.json (scripts excerpt)


Notes:

Image optimization: this example uses plain <img> tags to avoid needing external domains config.

If you'd rather use next/image, add raw.githubusercontent.com to next.config.js images.domains */


// ------------------------- // app/page.jsx // -------------------------

import React, { useEffect, useRef, useState } from 'react'; import Head from 'next/head';

const ADMIN_DATA = { nipun: { img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR NIPUN OFC.png", name: "MR NIPUN OFC", info: <p>CONTACT : <a href="https://wa.me/+94757255903" target="_blank" rel="noopener noreferrer">+94 757255903</a></p> <p>AGE : 18</p><p>FROM : Sri Lanka</p> <br><h3>🌐 SOCIAL MEDIA</h3> <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" rel="noopener noreferrer">Whatsapp Channel</a> <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" rel="noopener noreferrer">Facebook Account</a> <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" rel="noopener noreferrer">Facebook Page</a> <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" rel="noopener noreferrer">TikTok</a> <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" rel="noopener noreferrer">YouTube</a> <a href="https://www.instagram.com/mr_nipun_ofc/" target="_blank" rel="noopener noreferrer">Instagram</a> <a href="https://t.me/Profesor9999" target="_blank" rel="noopener noreferrer">Telegram</a> }, dila: { img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Dilan.png", name: "MR DILA OFC", info: "<p>Coming Soon...</p>" }, qusay: { img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Qusay.png", name: "MR QUSAY OFC", info: "<p>Coming Soon...</p>" }, sachiya: { img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Sachiya.png", name: "MR SACHIYA", info: "<p>Coming Soon...</p>" }, akeel: { img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Akeel.png", name: "MR AKEEL OFC", info: "<p>Coming Soon...</p>" }, heshan: { img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Heshan.png", name: "MR HESHAN OFC", info: "<p>Coming Soon...</p>" }, rukshan: { img: "https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/Rukshan.png", name: "MR RUKSHAN OFC", info: "<p>Coming Soon...</p>" } };

export default function Page() { const [navOpen, setNavOpen] = useState(false); const [modalId, setModalId] = useState(null); const modalCloseRef = useRef(null);

useEffect(() => { function onKey(e) { if (e.key === 'Escape') { setNavOpen(false); setModalId(null); } } document.addEventListener('keydown', onKey); return () => document.removeEventListener('keydown', onKey); }, []);

useEffect(() => { if (modalId && modalCloseRef.current) modalCloseRef.current.focus(); }, [modalId]);

return ( <> <Head> <title>MONEY HEIST OFC ADMINS 🎭</title> <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" /> </Head>

<div className="min-h-screen bg-gradient-to-b from-[#120019] to-[#050007] text-white font-poppins">
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 bg-[rgba(255,255,255,0.04)] backdrop-blur-md border-b border-[rgba(139,68,255,0.06)] z-50">
      <a className="flex items-center gap-3 font-bold text-[rgba(255,255,255,0.9)]" href="https://www.freebots.store" target="_blank" rel="noreferrer">
        <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#ff4ac7] to-[#8b44ff] shadow-[0_0_14px_rgba(139,68,255,0.16)]" />
        MONEY HEIST OFC ADMINS
      </a>

      <button aria-label="menu" title="menu" className={`w-10 h-8 relative ${navOpen ? 'open' : ''}`} onClick={() => setNavOpen(prev => !prev)}>
        <span className="block absolute left-2 right-2 h-0.5 bg-white rounded transition-all" style={{ top: 8 }} />
        <span className="block absolute left-2 right-2 h-0.5 bg-white rounded transition-all" style={{ top: 16 }} />
        <span className="block absolute left-2 right-2 h-0.5 bg-white rounded transition-all" style={{ top: 24 }} />
      </button>
    </header>

    {/* overlay & nav panel */}
    <div className={`${navOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity z-40`} onClick={() => setNavOpen(false)} />

    <nav className={`${navOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full w-72 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] border-l border-[rgba(139,68,255,0.06)] p-20 pt-24 transition-transform z-50`}>
      {[
        ['Loging', 'https://www.freebots.store/r/NIPUNO6D43'],
        ['Home', 'https://www.freebots.store'],
        ['Service', 'https://www.freebots.store/services'],
        ['FAQ', 'https://www.freebots.store/faq'],
        ['Team', 'https://www.freebots.store/team'],
        ['About', 'https://www.freebots.store/about'],
        ['Contact', 'https://www.freebots.store/contact'],
        ['Privacy', 'https://www.freebots.store/privacy'],
        ['Terms', 'https://www.freebots.store/terms']
      ].map(([label, url]) => (
        <button key={label} onClick={() => { setNavOpen(false); setTimeout(() => window.location.href = url, 240); }} className="w-full text-left py-3 px-4 mb-3 rounded-lg font-semibold hover:bg-[linear-gradient(90deg,rgba(139,68,255,0.06),rgba(255,74,199,0.04))]">
          ❖ {label}
        </button>
      ))}
    </nav>

    <main className="max-w-6xl mx-auto px-4 pt-28 pb-24 text-center">
      <h1 className="text-2xl mb-6 text-[rgba(255,255,255,0.92)]">MONEY HEIST ADMINS</h1>

      <section className="grid gap-6 grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
        {['nipun','dila','qusay','sachiya','akeel','heshan','rukshan'].map((id, idx) => {
          const admin = ADMIN_DATA[id];
          return (
            <article key={id} className={`bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] border border-[rgba(139,68,255,0.06)] rounded-lg p-3 text-center shadow-md hover:translate-y-[-6px] transition-transform`} onClick={() => setModalId(id)} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setModalId(id); }}>
              <div className="relative w-full h-36 rounded-md flex items-center justify-center overflow-visible mx-auto">
                <div className="absolute inset-[-6px] rounded-xl pointer-events-none bg-[conic-gradient(from_0deg,rgba(255,47,109,0.95),rgba(255,47,109,0.0)_30%,rgba(255,47,109,0.95)_50%,rgba(255,47,109,0.0)_80%,rgba(255,47,109,0.95))] filter blur-sm opacity-20 animate-spin-slow mix-blend-screen" />
                <img src={admin.img} alt={admin.name} className="w-11/12 h-5/6 object-cover rounded-lg border-[3px] border-black/20 relative z-10" onError={(e)=>{ e.currentTarget.style.opacity = '0.7'; }} />
              </div>
              <div className="mt-3 font-semibold text-[rgba(255,255,255,0.9)]">{admin.name}</div>
            </article>
          );
        })}
      </section>
    </main>

    <footer className="text-center py-8 text-[rgba(255,255,255,0.6)]">© 2025 MONEY HEIST OFC — Admin Network</footer>

    {/* modal */}
    <div className={`${modalId ? 'opacity-100 visible' : 'opacity-0 invisible'} fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-all`} onClick={() => setModalId(null)}>
      {modalId && (
        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] border border-[rgba(139,68,255,0.06)] rounded-lg p-6 w-[92%] max-w-xl text-center relative" onClick={(e)=>e.stopPropagation()}>
          <button ref={modalCloseRef} className="absolute top-3 right-3 w-9 h-9 rounded-md border border-[rgba(255,255,255,0.04)]" onClick={() => setModalId(null)}>✖</button>
          <img src={ADMIN_DATA[modalId].img} alt={ADMIN_DATA[modalId].name} className="w-28 h-28 rounded-full object-cover mx-auto border-[4px] border-[rgba(255,255,255,0.03)] shadow-lg" />
          <h2 className="mt-3 text-lg">{ADMIN_DATA[modalId].name}</h2>
          <div className="mt-2 text-sm text-[rgba(255,255,255,0.9)]" dangerouslySetInnerHTML={{ __html: ADMIN_DATA[modalId].info }} />
          <div className="mt-4">
            <a className="inline-block px-4 py-2 rounded-md font-bold bg-gradient-to-r from-[#8b44ff] to-[#ff4ac7] text-white" href="#" onClick={(e)=>e.preventDefault()}>Contact</a>
          </div>
        </div>
      )}
    </div>
  </div>

  <style>{`
    @keyframes spin-slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
    .animate-spin-slow { animation: spin-slow 5.5s linear infinite }
    :root { --poppins: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial }
    .font-poppins { font-family: var(--poppins) }
  `}</style>
</>

); }

// ------------------------- // app/layout.jsx // ------------------------- // Add this file to app/layout.jsx to provide <html> & <body> wrapper and import globals.

/* import './globals.css'

export const metadata = { title: 'MONEY HEIST OFC ADMINS', description: 'Admin network page', }

export default function RootLayout({ children }) { return ( <html lang="en"> <body>{children}</body> </html> ) } */

// ------------------------- // styles/globals.css // ------------------------- /* @tailwind base; @tailwind components; @tailwind utilities;

:root{ --bg-dark:#050007; --bg-mid:#120019 } html,body,#root{height:100%} body{font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial} */

// ------------------------- // tailwind.config.js // ------------------------- /* module.exports = { content: [ './app//*.{js,jsx,ts,tsx}', './pages//.{js,jsx,ts,tsx}', './components/**/.{js,jsx,ts,tsx}' ], theme: { extend: {}, }, plugins: [], } */

// ------------------------- // postcss.config.js // ------------------------- /* module.exports = { plugins: { tailwindcss: {}, autoprefixer: {}, }, } */

// ------------------------- // next.config.js (optional image domain) // ------------------------- /* const nextConfig = { reactStrictMode: true, images: { domains: ['raw.githubusercontent.com'], }, } module.exports = nextConfig */

// ------------------------- // package.json (scripts excerpt) // ------------------------- /* "scripts": { "dev": "next dev", "build": "next build", "start": "next start" } */

// ------------------------- // Quick checklist for a working local setup // ------------------------- /*

1. create-next-app (or use existing Next.js 14+ project)


2. add app/layout.jsx and app/page.jsx (this file's page code)


3. add styles/globals.css; import it in layout.jsx


4. install tailwind and run dev



If you prefer NOT to use Tailwind, you can keep the inline styles and the page will work as-is in app/page.jsx. */
