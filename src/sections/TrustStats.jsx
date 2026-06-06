import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { end: 1000, suffix: '+', label: 'CCTV Installations', icon: '📷', color: '#00d4ff' },
  { end: 500, suffix: '+', label: 'Happy Clients', icon: '😊', color: '#00ff88' },
  { end: 100, suffix: '+', label: 'Business Projects', icon: '🏢', color: '#ff6b2b' },
  { end: 5, suffix: '★', label: 'Star Reviews', icon: '⭐', color: '#ffd700' },
  { end: 24, suffix: '/7', label: 'Expert Support', icon: '🛡️', color: '#a855f7' },
  { end: 8, suffix: ' Yrs', label: 'Experience', icon: '🏆', color: '#0066ff' },
]

function CountUp({ end, suffix, inView }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return <>{count}{suffix}</>
}

export default function TrustStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <motion.div className="section-subtitle mb-2"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            Trusted By Thousands
          </motion.div>
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Numbers That <span className="gradient-text">Speak For Us</span>
          </motion.h2>
        </div>

        <div className="row gy-4">
          {STATS.map((stat, i) => (
            <div key={i} className="col-lg-2 col-md-4 col-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                style={{
                  textAlign: 'center',
                  padding: '28px 16px',
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${stat.color}20`,
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.3s',
                  cursor: 'default',
                }}
                whileHover={{
                  borderColor: `${stat.color}50`,
                  boxShadow: `0 0 30px ${stat.color}10`,
                  y: -6,
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>{stat.icon}</div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem,3vw,2.4rem)',
                  fontWeight: 900,
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: 8,
                  textShadow: `0 0 20px ${stat.color}40`,
                }}>
                  <CountUp end={stat.end} suffix={stat.suffix} inView={inView} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          className="mt-5 p-4 p-lg-5"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(0,102,255,0.06) 100%)',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,3vw,2rem)', marginBottom: 12 }}>
            Ready to Secure Your Property?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
            Get a free site survey and customised quote — no obligation
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://wa.me/919876543210?text=Hi! I want to book a free site visit." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              📱 WhatsApp Now
            </a>
            <a href="tel:+919876543210" className="btn-call">
              📞 Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
