import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import Hls from 'hls.js';
import { Zap, ArrowRight } from 'lucide-react';

const HLS_URL = 'https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8';
const FALLBACK_URL = '/_videos/v1/f0c78f536d5f21a047fb7792723a36f9d647daa1';

function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls;

    if (Hls.isSupported()) {
      hls = new Hls({ startLevel: -1, autoStartLoad: true });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          video.src = FALLBACK_URL;
          video.play().catch(() => {});
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL;
      video.addEventListener('loadedmetadata', () => video.play().catch(() => {}));
    } else {
      video.src = FALLBACK_URL;
      video.play().catch(() => {});
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  return (
    <div className="relative w-full" style={{ zIndex: 10, marginTop: '-150px' }}>
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #010101, transparent)',
          zIndex: 2,
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #010101, transparent)',
          zIndex: 2,
        }}
      />
      {/* Left/right fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #010101, transparent 20%, transparent 80%, #010101)',
          zIndex: 2,
        }}
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}

export function Hero({ onBookCall }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,103,232,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute top-40 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(250,147,250,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Text content */}
      <div className="relative flex flex-col items-center text-center px-6 pt-32 pb-0" style={{ zIndex: 20 }}>

        {/* Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div
            className="inline-flex items-center gap-3 rounded-full px-4 py-2 mb-8"
            style={{
              background: 'rgba(28,27,36,0.15)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              className="flex items-center justify-center w-6 h-6 rounded-md"
              style={{
                background: 'linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)',
                boxShadow: '0 0 12px rgba(201,103,232,0.6)',
              }}
            >
              <Zap size={13} className="text-white" fill="white" />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontFamily: 'DM Sans', letterSpacing: '0.01em' }}>
              Used by founders. Loved by devs.
            </span>
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
          }}
          className="text-[48px] sm:text-[64px] lg:text-[80px]"
        >
          <span className="gradient-text">Your Vision</span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.95)' }}>Our Digital Reality.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontFamily: 'DM Sans',
            fontWeight: 300,
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '560px',
            lineHeight: 1.65,
            marginBottom: '36px',
          }}
        >
          We turn bold ideas into modern designs that don't just look amazing —
          they grow your business fast.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <div
            className="rounded-full p-px"
            style={{
              background: 'linear-gradient(135deg, rgba(250,147,250,0.3), rgba(152,58,214,0.3))',
            }}
          >
            <button
              onClick={onBookCall}
              className="flex items-center gap-3 rounded-full px-6 py-3 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'rgba(255,255,255,0.97)',
                fontFamily: 'DM Sans',
                fontWeight: 500,
                fontSize: '15px',
                color: '#0a0a0a',
                border: 'none',
              }}
            >
              Book a 15-min call
              <div
                className="flex items-center justify-center w-7 h-7 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)',
                }}
              >
                <ArrowRight size={14} className="text-white" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Video */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <HeroVideo />
      </motion.div>
    </section>
  );
}
