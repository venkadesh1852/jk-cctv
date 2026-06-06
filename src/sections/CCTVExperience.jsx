import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const HOTSPOTS = [
  {
    id: 'night',
    label: 'Night Vision',
    icon: '🌙',
    position: { top: '28%', left: '15%' },
    title: 'Advanced Night Vision',
    description: 'Up to 40m infrared range with crystal-clear 4K clarity in complete darkness. Colour night vision with smart IR switching.',
  },
  {
    id: 'ai',
    label: 'AI Detection',
    icon: '🤖',
    position: { top: '18%', right: '18%' },
    title: 'AI Smart Detection',
    description: 'Deep learning algorithms detect humans, vehicles, and objects with 99.7% accuracy. Reduces false alarms by 95%.',
  },
  {
    id: 'motion',
    label: 'Motion Tracking',
    icon: '📍',
    position: { bottom: '30%', left: '20%' },
    title: 'Smart Motion Tracking',
    description: 'PTZ auto-tracking follows moving targets across the frame. Integrates with access control for automated responses.',
  },
  {
    id: 'mobile',
    label: 'Mobile Monitoring',
    icon: '📱',
    position: { bottom: '28%', right: '15%' },
    title: 'Mobile Monitoring',
    description: 'Live view, playback, and alerts on your smartphone 24/7. Works on iOS, Android, and web browsers worldwide.',
  },
]

export default function CCTVExperience() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-secondary)', overflow: 'visible' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <motion.div
            className="section-subtitle mb-2"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Interactive Experience
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore Our <span className="gradient-text">Smart CCTV</span>
          </motion.h2>
          <motion.p
            className="section-description mx-auto mt-3"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Click the glowing hotspots to discover advanced features
          </motion.p>
        </div>

        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="cctv-3d-container"
              style={{ position: 'relative', minHeight: 420 }}
              onClick={() => setActiveHotspot(null)}
            >
              {/* Glow */}
              <div style={{
                position: 'absolute',
                width: 300,
                height: 300,
                background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
              }} />

              {/* Camera SVG */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03 }}
                style={{ position: 'relative', zIndex: 2 }}
              >
                <LargeCCTVSvg />
              </motion.div>

              {/* Hotspots */}
              {HOTSPOTS.map((hs) => (
                <div
                  key={hs.id}
                  className="hotspot"
                  style={{ position: 'absolute', ...hs.position, zIndex: 3 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveHotspot(activeHotspot === hs.id ? null : hs.id)
                  }}
                >
                  <div className="hotspot-inner" />

                  {/* Tooltip label */}
                  <div style={{
                    position: 'absolute',
                    top: -28,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-accent)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'var(--neon-blue)',
                    letterSpacing: '0.08em',
                    pointerEvents: 'none',
                  }}>
                    {hs.label}
                  </div>

                  {/* Popup */}
                  <AnimatePresence>
                    {activeHotspot === hs.id && (
                      <motion.div
                        className="hotspot-popup"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          top: hs.position.top ? 'auto' : '105%',
                          bottom: hs.position.bottom ? '105%' : 'auto',
                          left: hs.position.left ? '105%' : 'auto',
                          right: hs.position.right ? '105%' : 'auto',
                        }}
                      >
                        <div style={{ fontSize: '1.2rem', marginBottom: 6 }}>{hs.icon}</div>
                        <h6>{hs.title}</h6>
                        <p>{hs.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Feature list */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="section-subtitle mb-2">Technology Highlights</div>
              <h3 className="section-title mb-4" style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)' }}>
                Military-Grade<br /><span className="gradient-text">Security Tech</span>
              </h3>

              {[
                { icon: '🌙', title: '4K Ultra Night Vision', desc: 'See in pitch-black conditions with advanced IR technology' },
                { icon: '🤖', title: 'AI Deep Learning', desc: 'Smart person/vehicle detection with 99.7% accuracy' },
                { icon: '📍', title: 'Auto PTZ Tracking', desc: 'Camera follows and tracks moving objects automatically' },
                { icon: '📱', title: 'Mobile Live View', desc: 'Watch your property from anywhere in the world' },
                { icon: '☁️', title: 'Cloud Backup', desc: 'Secure encrypted footage stored in the cloud 24/7' },
                { icon: '⚡', title: 'Instant Alerts', desc: 'Real-time push notifications for any security event' },
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  className="d-flex align-items-start gap-3 mb-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <div style={{
                    width: 42,
                    height: 42,
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid var(--border-neon)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}>
                    {feat.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>{feat.title}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{feat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LargeCCTVSvg() {
  return (
    <svg viewBox="0 0 400 300" style={{ width: '100%', maxWidth: 420, filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.4))' }}>
      {/* Mount bracket */}
      <path d="M180 80 L180 30 Q200 8 220 30 L220 80" fill="rgba(0,212,255,0.06)" stroke="#00d4ff" strokeWidth="1.5" />
      <line x1="200" y1="8" x2="200" y2="30" stroke="#00d4ff" strokeWidth="2" />
      <circle cx="200" cy="8" r="5" fill="#00d4ff" />

      {/* Main camera body */}
      <rect x="60" y="80" width="240" height="130" rx="16" fill="rgba(0,212,255,0.07)" stroke="#00d4ff" strokeWidth="1.5" />
      {/* Body panel detail */}
      <rect x="75" y="95" width="140" height="100" rx="8" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />

      {/* Lens barrel */}
      <rect x="300" y="105" width="75" height="80" rx="12" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1.5" />
      {/* Lens rings */}
      <circle cx="338" cy="145" r="28" fill="rgba(0,212,255,0.05)" stroke="#00d4ff" strokeWidth="1.5" />
      <circle cx="338" cy="145" r="20" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1" />
      <circle cx="338" cy="145" r="12" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="1" />
      <circle cx="338" cy="145" r="5" fill="#00d4ff" />
      {/* Lens glare */}
      <circle cx="330" cy="137" r="3" fill="rgba(255,255,255,0.4)" />

      {/* IR illuminators */}
      {[-40, -20, 0, 20, 40].map((offset, i) => (
        <g key={i}>
          <circle cx={180 + offset} cy="200" r="6" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1" />
          <motion.circle cx={180 + offset} cy="200" r="3" fill="#00d4ff"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
          />
        </g>
      ))}

      {/* Status LEDs */}
      <motion.circle cx="85" cy="100" r="5" fill="#00ff88"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      <motion.circle cx="100" cy="100" r="5" fill="#ff2d55"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />

      {/* Field of view lines */}
      {[-25, 0, 25].map((angle, i) => (
        <motion.line
          key={i}
          x1="375"
          y1="145"
          x2={400 + Math.cos(angle * Math.PI / 180) * 30}
          y2={145 + Math.sin(angle * Math.PI / 180) * 60}
          stroke="#00d4ff"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Cable */}
      <path d="M200 210 Q200 250 200 290" stroke="rgba(0,212,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="5 3" />
    </svg>
  )
}
