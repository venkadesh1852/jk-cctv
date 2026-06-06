import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEye, FaVideo, FaCloud, FaBrain, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'

const STEPS = [
  {
    icon: <FaEye />,
    title: 'Motion Detection',
    desc: "Advanced sensors detect any movement within the camera's field of view using AI-powered pixel analysis and depth sensing.",
    color: '#00d4ff',
  },
  {
    icon: <FaVideo />,
    title: 'Video Recording',
    desc: 'High-definition footage is instantly captured at 4K resolution and stored locally on NVR/DVR systems simultaneously.',
    color: '#00ff88',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Backup',
    desc: 'Footage is automatically encrypted and uploaded to secure cloud servers ensuring zero data loss even if hardware is damaged.',
    color: '#0066ff',
  },
  {
    icon: <FaBrain />,
    title: 'AI Analysis',
    desc: 'Deep learning algorithms analyse footage in real-time to identify threats, people, vehicles, and abnormal behaviour patterns.',
    color: '#a855f7',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Alert',
    desc: 'Instant push notifications with live snapshots are sent to your smartphone within seconds of any security event.',
    color: '#ff6b2b',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Crime Prevention',
    desc: 'Visible cameras deter 67% of criminals. Recorded evidence helps law enforcement resolve incidents faster.',
    color: '#ff2d55',
  },
]

export default function HowCCTVWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <motion.div className="section-subtitle mb-2"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            How It Works
          </motion.div>
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            From Detection to <span className="gradient-text">Crime Prevention</span>
          </motion.h2>
          <motion.p className="section-description mx-auto mt-3"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
            An intelligent security pipeline that works automatically 24/7
          </motion.p>
        </div>

        {/* Desktop: horizontal with connecting lines */}
        <div className="d-none d-lg-block">
          <div className="row">
            {STEPS.map((step, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ textAlign: 'center', position: 'relative' }}
                >
                  {/* Connector */}
                  {i < STEPS.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                      style={{
                        position: 'absolute',
                        top: 32,
                        left: '65%',
                        right: '-35%',
                        height: 2,
                        background: `linear-gradient(90deg, ${step.color}, ${STEPS[i + 1].color})`,
                        transformOrigin: 'left',
                        opacity: 0.4,
                      }}
                    />
                  )}

                  {/* Step circle */}
                  <div style={{
                    width: 64,
                    height: 64,
                    background: `${step.color}15`,
                    border: `2px solid ${step.color}`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    color: step.color,
                    margin: '0 auto 16px',
                    boxShadow: `0 0 20px ${step.color}30`,
                    position: 'relative',
                    zIndex: 2,
                  }}>
                    {step.icon}
                    {/* Step number */}
                    <div style={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                      width: 22,
                      height: 22,
                      background: step.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6rem',
                      fontWeight: 900,
                      color: '#000',
                      fontFamily: 'var(--font-display)',
                    }}>
                      {i + 1}
                    </div>
                  </div>

                  <h6 style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', color: step.color, letterSpacing: '0.05em', marginBottom: 8, fontWeight: 700 }}>
                    {step.title}
                  </h6>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="d-lg-none">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <div className="timeline-connector">
                <div className="timeline-dot" style={{
                  background: `${step.color}20`,
                  border: `2px solid ${step.color}`,
                  color: step.color,
                  boxShadow: `0 0 15px ${step.color}40`,
                }}>
                  {step.icon}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="timeline-line" style={{ background: `linear-gradient(180deg, ${step.color}, transparent)` }} />
                )}
              </div>
              <div style={{ paddingBottom: 16 }}>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span style={{
                    width: 22,
                    height: 22,
                    background: step.color,
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                    fontWeight: 900,
                    color: '#000',
                    fontFamily: 'var(--font-display)',
                  }}>{i + 1}</span>
                  <h6 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: step.color, margin: 0 }}>
                    {step.title}
                  </h6>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
