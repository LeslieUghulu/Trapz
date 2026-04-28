import { useState } from 'react';
import { motion } from 'motion/react';
import { Music, Upload, ChevronDown, CheckCircle, Mic2, Headphones, Star } from 'lucide-react';

const mentors = [
  {
    name: 'Aria Solano',
    role: 'R&B / Soul Production',
    credits: 'Worked with: SZA, Summer Walker',
    avatar: '🎵',
    gradient: 'from-[#FA93FA] to-[#C967E8]',
  },
  {
    name: 'Marcus Webb',
    role: 'Songwriting & A&R',
    credits: 'Signed to: Def Jam, Atlantic',
    avatar: '🎤',
    gradient: 'from-[#C967E8] to-[#983AD6]',
  },
  {
    name: 'Zena Kwame',
    role: 'Mixing & Mastering',
    credits: 'Studio: Capitol Records LA',
    avatar: '🎧',
    gradient: 'from-[#983AD6] to-[#6B21A8]',
  },
];

const genres = ['R&B', 'Soul', 'Hip-Hop', 'Pop', 'Afrobeats', 'Neo-Soul', 'Gospel', 'Electronic', 'Other'];

export function MusicSubmission() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    genre: '',
    trackUrl: '',
    bio: '',
    mentor: '',
  });
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFile = (f) => {
    if (f && f.type.startsWith('audio/')) {
      setFile(f);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    handleFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="submit-music" className="relative py-28 px-6 overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(250,147,250,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(152,58,214,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: 'rgba(201,103,232,0.1)',
              border: '1px solid rgba(201,103,232,0.2)',
            }}
          >
            <Music size={13} style={{ color: '#C967E8' }} />
            <span style={{ color: '#C967E8', fontSize: '12px', fontFamily: 'DM Sans', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Artist Development
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 60px)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            <span className="gradient-text">Submit Your Music</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.92)' }}>Get Real Feedback.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'DM Sans', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            Our industry mentors listen to every submission and give actionable notes to help you grow as an artist.
          </p>
        </motion.div>

        {/* Mentor Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(201,103,232,0.3)' }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${mentor.gradient}`}
              >
                {mentor.avatar}
              </div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '18px', marginBottom: '4px', color: 'white' }}>
                {mentor.name}
              </h3>
              <p style={{ color: '#C967E8', fontFamily: 'DM Sans', fontSize: '13px', marginBottom: '8px' }}>
                {mentor.role}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans', fontSize: '12px' }}>
                {mentor.credits}
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={11} style={{ color: '#FA93FA' }} fill="#FA93FA" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Submission Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: 'rgba(28,27,36,0.5)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(24px)',
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,103,232,0.4), transparent)' }}
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-12"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)' }}
              >
                <CheckCircle size={36} className="text-white" />
              </div>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '28px', marginBottom: '12px', color: 'white' }}>
                Submission Received!
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'DM Sans', fontSize: '16px', maxWidth: '400px', lineHeight: 1.6 }}>
                Your track is in the queue. A mentor will review it and send you detailed feedback within 5-7 business days.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', genre: '', trackUrl: '', bio: '', mentor: '' }); setFile(null); }}
                className="mt-8 px-6 py-2.5 rounded-full text-sm cursor-pointer transition-opacity hover:opacity-80"
                style={{ background: 'rgba(201,103,232,0.15)', border: '1px solid rgba(201,103,232,0.3)', color: '#C967E8', fontFamily: 'DM Sans' }}
              >
                Submit Another Track
              </button>
            </motion.div>
          ) : (
            <>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '24px', marginBottom: '8px', color: 'white' }}>
                Submit Your Track
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans', fontSize: '14px', marginBottom: '32px' }}>
                All genres welcome. Free submissions are limited — apply early.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FieldGroup label="Artist Name" icon={<Mic2 size={14} />}>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your artist name"
                      className="w-full bg-transparent outline-none text-white placeholder-white/25 text-sm"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                  </FieldGroup>
                  <FieldGroup label="Email Address" icon={null}>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-transparent outline-none text-white placeholder-white/25 text-sm"
                      style={{ fontFamily: 'DM Sans' }}
                    />
                  </FieldGroup>
                </div>

                {/* Genre + Mentor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FieldGroup label="Genre" icon={<ChevronDown size={14} style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)' }} />}>
                    <select
                      name="genre"
                      value={form.genre}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent outline-none text-sm appearance-none cursor-pointer"
                      style={{ fontFamily: 'DM Sans', color: form.genre ? 'white' : 'rgba(255,255,255,0.25)' }}
                    >
                      <option value="" disabled style={{ background: '#1c1b24', color: 'white' }}>Select genre</option>
                      {genres.map(g => <option key={g} value={g} style={{ background: '#1c1b24', color: 'white' }}>{g}</option>)}
                    </select>
                  </FieldGroup>
                  <FieldGroup label="Preferred Mentor" icon={<Headphones size={14} style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.3)' }} />}>
                    <select
                      name="mentor"
                      value={form.mentor}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-sm appearance-none cursor-pointer"
                      style={{ fontFamily: 'DM Sans', color: form.mentor ? 'white' : 'rgba(255,255,255,0.25)' }}
                    >
                      <option value="" style={{ background: '#1c1b24', color: 'white' }}>No preference</option>
                      {mentors.map(m => <option key={m.name} value={m.name} style={{ background: '#1c1b24', color: 'white' }}>{m.name}</option>)}
                    </select>
                  </FieldGroup>
                </div>

                {/* Track URL */}
                <FieldGroup label="Track Link (SoundCloud, Spotify, Drive)" icon={null}>
                  <input
                    name="trackUrl"
                    value={form.trackUrl}
                    onChange={handleChange}
                    placeholder="https://soundcloud.com/yourtrack"
                    className="w-full bg-transparent outline-none text-white placeholder-white/25 text-sm"
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </FieldGroup>

                {/* File Upload */}
                <div>
                  <label style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                    Or Upload Audio File
                  </label>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('audio-upload').click()}
                    className="rounded-xl flex flex-col items-center justify-center py-8 cursor-pointer transition-all duration-200"
                    style={{
                      border: `1.5px dashed ${dragOver ? 'rgba(201,103,232,0.6)' : file ? 'rgba(201,103,232,0.4)' : 'rgba(255,255,255,0.1)'}`,
                      background: dragOver ? 'rgba(201,103,232,0.05)' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    {file ? (
                      <>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                          style={{ background: 'linear-gradient(135deg, #FA93FA, #983AD6)' }}>
                          <Music size={18} className="text-white" />
                        </div>
                        <p style={{ color: 'white', fontFamily: 'DM Sans', fontSize: '14px', marginBottom: '4px' }}>{file.name}</p>
                        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', fontFamily: 'DM Sans' }}>
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </>
                    ) : (
                      <>
                        <Upload size={24} style={{ color: 'rgba(255,255,255,0.25)', marginBottom: '12px' }} />
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans', fontSize: '14px', marginBottom: '4px' }}>
                          Drag & drop or click to upload
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', fontFamily: 'DM Sans' }}>
                          MP3, WAV, FLAC up to 50MB
                        </p>
                      </>
                    )}
                    <input
                      id="audio-upload"
                      type="file"
                      accept="audio/*"
                      className="hidden"
                      onChange={(e) => handleFile(e.target.files[0])}
                    />
                  </div>
                </div>

                {/* Bio */}
                <FieldGroup label="Brief Artist Bio (Optional)" icon={null}>
                  <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell the mentor a little about yourself and your sound..."
                    className="w-full bg-transparent outline-none text-white placeholder-white/25 text-sm resize-none"
                    style={{ fontFamily: 'DM Sans' }}
                  />
                </FieldGroup>

                {/* Submit */}
                <div className="pt-2">
                  <div
                    className="rounded-full p-px inline-block w-full"
                    style={{ background: 'linear-gradient(135deg, rgba(250,147,250,0.5), rgba(152,58,214,0.5))' }}
                  >
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 rounded-full py-4 text-base font-medium cursor-pointer transition-all duration-300 disabled:opacity-60"
                      style={{
                        fontFamily: 'DM Sans',
                        fontWeight: 600,
                        background: loading
                          ? 'rgba(201,103,232,0.1)'
                          : 'linear-gradient(135deg, #FA93FA, #C967E8, #983AD6)',
                        color: 'white',
                        border: 'none',
                        fontSize: '15px',
                      }}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeOpacity="0.3" />
                            <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Music size={16} />
                          Submit for Review
                        </>
                      )}
                    </button>
                  </div>
                  <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Sans', fontSize: '12px', marginTop: '12px' }}>
                    No payment required. Mentors respond within 5–7 business days.
                  </p>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function FieldGroup({ label, icon, children }) {
  return (
    <div>
      <label style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
        {label}
      </label>
      <div
        className="flex items-center gap-3 rounded-xl px-4 py-3"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {children}
        {icon}
      </div>
    </div>
  );
}
