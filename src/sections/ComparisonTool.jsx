import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LOCATION_TYPES = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'office', label: 'Office', icon: '🏢' },
  { id: 'shop', label: 'Shop', icon: '🏪' },
  { id: 'factory', label: 'Factory', icon: '🏭' },
]

const RECOMMENDATIONS = {
  home: {
    primary: 'Dome Camera',
    cameras: [
      { name: 'Dome Camera', fit: 5, reason: 'Discreet, 360° view, perfect for indoor rooms' },
      { name: 'Bullet Camera', fit: 4, reason: 'Long-range outdoor coverage for entry points' },
      { name: 'Night Vision', fit: 5, reason: 'Essential for monitoring in low-light conditions' },
      { name: 'AI Camera', fit: 3, reason: 'Smart detection, reduces false alarms' },
      { name: 'PTZ Camera', fit: 2, reason: 'Premium option for large properties' },
    ],
    package: '4–8 cameras',
    resolution: '2MP – 4MP',
    storage: '1TB HDD / Cloud',
    price: '₹18,000 – ₹45,000',
  },
  office: {
    primary: 'AI Camera',
    cameras: [
      { name: 'AI Camera', fit: 5, reason: 'Facial recognition and employee monitoring' },
      { name: 'Dome Camera', fit: 5, reason: 'Ideal for reception, corridors, and workspaces' },
      { name: 'PTZ Camera', fit: 4, reason: 'Wide-area monitoring for open floor plans' },
      { name: 'Bullet Camera', fit: 3, reason: 'Parking lot and entrance surveillance' },
      { name: 'Night Vision', fit: 4, reason: 'After-hours security monitoring' },
    ],
    package: '8–24 cameras',
    resolution: '4MP – 8MP',
    storage: '2TB – 4TB HDD',
    price: '₹40,000 – ₹1,50,000',
  },
  shop: {
    primary: 'Dome Camera',
    cameras: [
      { name: 'Dome Camera', fit: 5, reason: 'Wide-angle view covers entire shop floor' },
      { name: 'AI Camera', fit: 4, reason: 'Footfall analytics and theft detection' },
      { name: 'Bullet Camera', fit: 3, reason: 'Entrance and cash counter surveillance' },
      { name: 'Night Vision', fit: 4, reason: 'Overnight security when shop is closed' },
      { name: 'PTZ Camera', fit: 2, reason: 'Track suspicious activity remotely' },
    ],
    package: '4–12 cameras',
    resolution: '2MP – 5MP',
    storage: '1TB – 2TB HDD',
    price: '₹22,000 – ₹75,000',
  },
  factory: {
    primary: 'PTZ Camera',
    cameras: [
      { name: 'PTZ Camera', fit: 5, reason: 'Wide coverage for large factory floor areas' },
      { name: 'Bullet Camera', fit: 5, reason: 'Perimeter and entry/exit monitoring' },
      { name: 'AI Camera', fit: 4, reason: 'Worker safety and incident detection' },
      { name: 'Night Vision', fit: 5, reason: 'Critical for 24/7 production facility monitoring' },
      { name: 'Dome Camera', fit: 3, reason: 'Office areas and supervisor stations' },
    ],
    package: '16–64 cameras',
    resolution: '4MP – 8MP',
    storage: '4TB – 16TB NAS',
    price: '₹80,000 – ₹5,00,000',
  },
}

function ScoreBar({ score }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          style={{
            width: 16,
            height: 6,
            borderRadius: 3,
            background: i <= score ? 'var(--neon-blue)' : 'rgba(255,255,255,0.1)',
            boxShadow: i <= score ? '0 0 6px var(--neon-blue)' : 'none',
            transition: 'all 0.3s',
          }}
        />
      ))}
    </div>
  )
}

export default function ComparisonTool() {
  const [selected, setSelected] = useState('home')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const rec = RECOMMENDATIONS[selected]

  return (
    <section ref={ref} className="section grid-bg">
      <div className="container">
        <div className="text-center mb-5">
          <motion.div className="section-subtitle mb-2"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            Smart Recommendation
          </motion.div>
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Find Your Perfect <span className="gradient-text">CCTV System</span>
          </motion.h2>
          <motion.p className="section-description mx-auto mt-3"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            Select your property type and we'll instantly recommend the best camera setup
          </motion.p>
        </div>

        {/* Selector */}
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-3 mb-5"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
        >
          {LOCATION_TYPES.map(loc => (
            <button
              key={loc.id}
              className={`comparison-btn ${selected === loc.id ? 'active' : ''}`}
              onClick={() => setSelected(loc.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <span style={{ fontSize: '1.1rem' }}>{loc.icon}</span>
              {loc.label}
            </button>
          ))}
        </motion.div>

        {/* Results */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="row gy-4">
            {/* Camera comparison table */}
            <div className="col-lg-8">
              <div className="glass-card" style={{ padding: '28px' }}>
                <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--neon-blue)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
                  Camera Suitability Analysis
                </h5>
                <div className="d-flex flex-column gap-3">
                  {rec.cameras.map((cam, i) => (
                    <motion.div
                      key={cam.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      style={{
                        padding: '16px',
                        background: cam.fit === 5 ? 'rgba(0,212,255,0.05)' : 'rgba(255,255,255,0.02)',
                        border: `1px solid ${cam.fit === 5 ? 'rgba(0,212,255,0.25)' : 'var(--border-subtle)'}`,
                        borderRadius: 10,
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.95rem', color: cam.fit === 5 ? 'var(--neon-blue)' : 'var(--text-primary)' }}>
                          {cam.name}
                          {cam.name === rec.primary && (
                            <span style={{ marginLeft: 8, fontSize: '0.65rem', background: 'rgba(0,255,136,0.15)', border: '1px solid rgba(0,255,136,0.3)', color: '#00ff88', padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>
                              BEST MATCH
                            </span>
                          )}
                        </div>
                        <ScoreBar score={cam.fit} />
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{cam.reason}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Package summary */}
            <div className="col-lg-4">
              <div className="glass-card h-100" style={{ padding: '28px' }}>
                <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--neon-blue)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
                  Recommended Package
                </h5>

                <div className="d-flex flex-column gap-3 mb-4">
                  {[
                    { label: 'Camera Count', value: rec.package },
                    { label: 'Resolution', value: rec.resolution },
                    { label: 'Storage', value: rec.storage },
                    { label: 'Estimated Cost', value: rec.price },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-subtle)', borderRadius: 8 }}>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-accent)', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                        {item.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/917305159812?text=Hi! I need a CCTV consultation for my property."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-100 justify-content-center"
                  style={{ display: 'flex', textDecoration: 'none' }}
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
