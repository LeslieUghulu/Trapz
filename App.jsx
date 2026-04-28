import { motion } from 'motion/react';
import { Code2, Palette, TrendingUp, Music, Globe, Layers } from 'lucide-react';

const services = [
  {
    icon: <Palette size={22} />,
    title: 'Brand Identity',
    desc: 'Visual systems that communicate your unique voice — logos, color, type, and motion.',
    gradient: 'from-[#FA93FA] to-[#C967E8]',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Web Development',
    desc: 'Performance-first sites and apps built with modern stacks. Fast, accessible, scalable.',
    gradient: 'from-[#C967E8] to-[#983AD6]',
  },
  {
    icon: <Music size={22} />,
    title: 'Artist Development',
    desc: 'From sound design to visual identity — we help musicians build full creative ecosystems.',
    gradient: 'from-[#983AD6] to-[#6B21A8]',
  },
  {
    icon: <Globe size={22} />,
    title: 'Digital Strategy',
    desc: 'Content, campaigns, and funnels that convert. Data-driven moves, creative execution.',
    gradient: 'from-[#FA93FA] to-[#983AD6]',
  },
  {
    icon: <Layers size={22} />,
    title: 'UI/UX Design',
    desc: 'Interfaces that feel as good as they look. Prototypes to production-ready Figma.',
    gradient: 'from-[#C967E8] to-[#FA93FA]',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Growth Systems',
    desc: 'Landing pages, A/B tests, and analytics that turn traffic into revenue.',
    gradient: 'from-[#983AD6] to-[#C967E8]',
  },
];

export function Services() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201,103,232,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: 'rgba(201,103,232,0.08)',
              border: '1px solid rgba(201,103,232,0.18)',
            }}
          >
            <Layers size={12} style={{ color: '#C967E8' }} />
            <span style={{ color: '#C967E8', fontSize: '12px', fontFamily: 'DM Sans', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              What We Do
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(32px, 5vw, 54px)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'white',
            }}
          >
            Everything you need to{' '}
            <span className="gradient-text">build & grow.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 group relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
                cursor: 'default',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(201,103,232,0.08) 0%, transparent 60%)',
                }}
              />
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${service.gradient}`}
                style={{ boxShadow: '0 4px 16px rgba(201,103,232,0.2)' }}
              >
                <span className="text-white">{service.icon}</span>
              </div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '18px', color: 'white', marginBottom: '8px' }}>
                {service.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans', fontSize: '14px', lineHeight: 1.65 }}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
