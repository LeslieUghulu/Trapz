import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer
      className="relative py-16 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)' }}
          >
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '14px', color: 'white' }}>V</span>
          </div>
          <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '18px', color: 'white' }}>
            Visioncraft
          </span>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Sans', fontSize: '13px', textAlign: 'center' }}>
          © 2025 Visioncraft Studio. All rights reserved.
        </p>

        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Contact'].map(item => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: 'DM Sans',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
