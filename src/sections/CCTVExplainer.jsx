import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const CAMERAS = [
  {
    id: 'dome',
    name: 'Dome Camera',
    icon: '🔮',
    img: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600',
    tagline: 'Most Popular Choice',
    description: 'Vandal-resistant dome cameras offer wide-angle 360° coverage. Ideal for indoor ceilings, retail spaces, and offices.',
    features: ['360° Wide Angle View', '4K Ultra HD Resolution', 'IR Night Vision 30m', 'IP67 Weatherproof', 'Vandal-Resistant Housing', 'H.265+ Compression'],
    benefits: ['Discreet installation blends with décor', 'Difficult to tamper with or redirect', 'Excellent for indoor & outdoor use'],
    usage: 'Living rooms, offices, retail shops, banks',
    color: '#00d4ff',
  },
  {
    id: 'bullet',
    name: 'Bullet Camera',
    icon: '🎯',
    img: 'https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=600',
    tagline: 'Long-Range Surveillance',
    description: 'Cylindrical bullet cameras provide focused long-range coverage. Best for outdoor perimeters, parking lots, and entry points.',
    features: ['100m IR Night Vision', '8MP Starlight Sensor', 'IP68 All-Weather', 'Motorized Varifocal', 'Smart Motion Detection', 'License Plate Capture'],
    benefits: ['Long-range detection up to 100m', 'Acts as a visible deterrent', 'Easy directional adjustment'],
    usage: 'Driveways, entrances, parking lots, perimeters',
    color: '#00ff88',
  },
  {
    id: 'ptz',
    name: 'PTZ Camera',
    icon: '🔄',
    img: 'https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=600',
    tagline: 'Ultimate Control',
    description: 'Pan-Tilt-Zoom cameras can be remotely controlled to cover any angle. Perfect for large open areas and high-security facilities.',
    features: ['360° Pan / 90° Tilt', '32× Optical Zoom', '200m IR Range', 'Auto-Tracking AI', 'Preset Patrol Routes', 'Wiper & Heater'],
    benefits: ['One camera replaces multiple fixed units', 'Remote operator control', 'Auto-follows moving targets'],
    usage: 'Stadiums, warehouses, factories, large offices',
    color: '#ff6b2b',
  },
  {
    id: 'ai',
    name: 'AI Camera',
    icon: '🤖',
    img: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600',
    tagline: 'Next-Gen Intelligence',
    description: 'Deep learning AI cameras with facial recognition, crowd analysis, and behavioral analytics built directly into the camera.',
    features: ['Face Recognition', 'Person/Vehicle Classification', 'Crowd Density Analysis', 'Perimeter Intrusion', 'Loitering Detection', 'Mask Detection'],
    benefits: ['Reduces false alarms by 95%', 'Real-time threat identification', 'No server needed — edge AI'],
    usage: 'Banks, airports, smart cities, VIP areas',
    color: '#a855f7',
  },
  {
    id: 'night',
    name: 'Night Vision Camera',
    icon: '🌙',
    img: 'https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&w=600',
    tagline: 'Sees in Complete Darkness',
    description: 'Specialized full-color night vision cameras deliver vibrant colour footage in near-zero lux conditions without any visible light.',
    features: ['Full Colour Night Vision', '0.001 Lux Sensitivity', 'F/1.0 Ultra Aperture', 'Smart Supplement Light', '4K Night Resolution', 'Colour 24/7'],
    benefits: ['Full colour footage at night', 'No harsh IR glow exposure', 'Natural looking recordings'],
    usage: 'Homes, gardens, car parks, perimeters',
    color: '#06b6d4',
  },
]

export default function CCTVExplainer() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const cam = CAMERAS[active]

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <motion.div className="section-subtitle mb-2"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            Camera Types
          </motion.div>
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Complete CCTV <span className="gradient-text">Encyclopedia</span>
          </motion.h2>
        </div>

        {/* Camera tabs */}
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-2 mb-5"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
        >
          {CAMERAS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              style={{
                padding: '10px 20px',
                background: active === i ? `${c.color}18` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${active === i ? c.color : 'var(--border-subtle)'}`,
                borderRadius: 'var(--radius-full)',
                color: active === i ? c.color : 'var(--text-secondary)',
                fontFamily: 'var(--font-accent)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span>{c.icon}</span> {c.name}
            </button>
          ))}
        </motion.div>

        {/* Camera details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="row gy-4 align-items-center">
              {/* Image */}
              <div className="col-lg-5">
                <div style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: `1px solid ${cam.color}30`,
                  boxShadow: `0 0 40px ${cam.color}15`,
                  aspectRatio: '4/3',
                  position: 'relative',
                }}>
                  <img
                    src={cam.img}
                    alt={cam.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(180deg, transparent 50%, rgba(5,5,8,0.8) 100%)`,
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    background: `${cam.color}20`,
                    border: `1px solid ${cam.color}40`,
                    color: cam.color,
                    fontFamily: 'var(--font-accent)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    backdropFilter: 'blur(10px)',
                  }}>
                    {cam.tagline}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="col-lg-7">
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: '2rem' }}>{cam.icon}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem,3vw,2.2rem)',
                  fontWeight: 800,
                  color: cam.color,
                  marginBottom: 12,
                }}>
                  {cam.name}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24, fontSize: '0.95rem' }}>
                  {cam.description}
                </p>

                <div className="row gy-4">
                  <div className="col-md-6">
                    <h6 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: cam.color, marginBottom: 12 }}>
                      Key Features
                    </h6>
                    <div className="d-flex flex-column gap-2">
                      {cam.features.map((f, i) => (
                        <div key={i} className="d-flex align-items-center gap-2">
                          <div style={{ width: 5, height: 5, background: cam.color, borderRadius: '50%', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h6 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: cam.color, marginBottom: 12 }}>
                      Key Benefits
                    </h6>
                    <div className="d-flex flex-column gap-2 mb-4">
                      {cam.benefits.map((b, i) => (
                        <div key={i} className="d-flex align-items-start gap-2">
                          <span style={{ color: '#00ff88', flexShrink: 0, marginTop: 2 }}>✓</span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{b}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: '12px', background: `${cam.color}08`, border: `1px solid ${cam.color}20`, borderRadius: 8 }}>
                      <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
                        Best For
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cam.usage}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
