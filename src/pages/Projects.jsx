import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FaTimes, FaExpand, FaWhatsapp, FaPhone } from 'react-icons/fa'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const CATEGORIES = ['All', 'Home CCTV', 'Office CCTV', 'Factory CCTV', 'School CCTV', 'Retail', 'Warehouse', 'Networking']

const ALL_PROJECTS = [
  {
    title: 'Smart Home Security — Whitefield',
    category: 'Home CCTV',
    img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    cameras: 8,
    resolution: '4K',
    type: 'AI Dome Cameras',
    desc: 'Complete home security with 8 AI dome cameras, colour night vision, and mobile monitoring for a 4BHK villa.',
  },
  {
    title: 'IT Park Office — MG Road',
    category: 'Office CCTV',
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    cameras: 24,
    resolution: '5MP',
    type: 'AI Cameras + Access Control',
    desc: '24-camera AI surveillance with face recognition access control for a 3-floor IT office.',
  },
  {
    title: 'Auto Parts Manufacturing — Peenya',
    category: 'Factory CCTV',
    img: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    cameras: 48,
    resolution: '4MP',
    type: 'PTZ + Bullet Cameras',
    desc: '48-camera comprehensive system covering production floor, warehouse, and perimeter with PTZ auto-tracking.',
  },
  {
    title: 'International School — Koramangala',
    category: 'School CCTV',
    img: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800',
    cameras: 32,
    resolution: '4K',
    type: 'AI Smart Cameras',
    desc: 'Campus-wide surveillance covering classrooms, corridors, playgrounds, and entry/exit points.',
  },
  {
    title: 'Fashion Retail Chain — Brigade Road',
    category: 'Retail',
    img: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
    cameras: 16,
    resolution: '5MP',
    type: 'Fisheye + Dome Cameras',
    desc: '16-camera retail surveillance with footfall analytics and POS integration for theft prevention.',
  },
  {
    title: 'E-commerce Warehouse — Bommasandra',
    category: 'Warehouse',
    img: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    cameras: 36,
    resolution: '4MP',
    type: 'PTZ + IR Bullet Cameras',
    desc: 'End-to-end warehouse monitoring with ANPR for vehicle tracking and loading dock surveillance.',
  },
  {
    title: 'Tech Company LAN — Outer Ring Road',
    category: 'Networking',
    img: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    cameras: null,
    resolution: null,
    type: 'Cat6A + Fiber Network',
    desc: '5-floor structured cabling with fiber backbone, managed switches, and WiFi 6 deployment.',
  },
  {
    title: 'Gated Community — Sarjapur Road',
    category: 'Home CCTV',
    img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    cameras: 64,
    resolution: '4K',
    type: 'Community Surveillance',
    desc: '64-camera gated community system with ANPR gates, intercom integration, and central monitoring.',
  },
  {
    title: 'BPO Office Campus — Hebbal',
    category: 'Office CCTV',
    img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    cameras: 40,
    resolution: '5MP',
    type: 'AI + Access Control',
    desc: 'Large BPO campus with 40 cameras, biometric access control, and visitor management system.',
  },
]

const STATS = [
  { num: '1000+', label: 'Completed Installations' },
  { num: '500+', label: 'Satisfied Clients' },
  { num: '100+', label: 'Commercial Projects' },
  { num: '8 Yrs', label: 'Industry Experience' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  const filtered = activeFilter === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === activeFilter)

  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="glow-orb glow-orb-blue" style={{ width: 500, height: 500, top: -200, right: -100 }} />
        <div className="container position-relative" style={{ zIndex: 1, textAlign: 'center' }}>
          <div className="section-subtitle mb-2">Our Portfolio</div>
          <h1 className="section-title mb-4">
            Projects We've <span className="gradient-text">Delivered</span>
          </h1>
          <p className="section-description mx-auto mb-4">
            Explore our portfolio of successful CCTV and networking installations across Bangalore. Every project showcases our commitment to quality.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp /> Discuss Your Project
            </a>
            <a href="tel:+919876543210" className="btn-call">
              <FaPhone /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div ref={statsRef} style={{ background: 'var(--bg-secondary)', padding: '60px 0' }}>
        <div className="container">
          <div className="row gy-3">
            {STATS.map((s, i) => (
              <div key={i} className="col-6 col-lg-3 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-cyan))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                  }}>
                    {s.num}
                  </div>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: 4 }}>
                    {s.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          {/* Filters */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="row gy-4">
            <AnimatePresence>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  className="col-lg-4 col-md-6"
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div
                    className="project-card"
                    onClick={() => setLightbox(project)}
                    style={{ boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}
                  >
                    <img src={project.img} alt={project.title} className="project-card-img" />
                    <div className="project-card-overlay">
                      <div className="d-flex justify-content-between align-items-end">
                        <div>
                          <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', color: 'var(--neon-blue)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                            {project.category}
                          </div>
                          <h6 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: '#fff', margin: 0, marginBottom: 4 }}>
                            {project.title}
                          </h6>
                          {project.cameras && (
                            <div style={{ display: 'flex', gap: 8 }}>
                              <span style={{ fontSize: '0.7rem', color: 'var(--neon-blue)', background: 'rgba(0,212,255,0.15)', padding: '2px 8px', borderRadius: 12 }}>
                                {project.cameras} Cameras
                              </span>
                              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: 12 }}>
                                {project.resolution}
                              </span>
                            </div>
                          )}
                        </div>
                        <div style={{
                          width: 36, height: 36,
                          background: 'rgba(0,212,255,0.2)',
                          border: '1px solid var(--neon-blue)',
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'var(--neon-blue)', flexShrink: 0,
                        }}>
                          <FaExpand style={{ fontSize: '0.75rem' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container text-center">
          <h2 className="section-title mb-3">Your Project Could Be Next</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>Join 500+ satisfied customers. Book a free site visit today.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://wa.me/919876543210?text=Hi! I want to discuss a CCTV project." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              📱 Discuss Your Project
            </a>
            <a href="tel:+919876543210" className="btn-call">📞 Call Now</a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="lightbox-close" onClick={() => setLightbox(null)}>
              <FaTimes />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: 700, width: '100%' }}
            >
              <img src={lightbox.img} alt={lightbox.title} style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-neon)' }} />
              <div style={{ marginTop: 16, textAlign: 'center', padding: '0 20px' }}>
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', color: 'var(--neon-blue)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>
                  {lightbox.category}
                </div>
                <h5 style={{ fontFamily: 'var(--font-display)', color: '#fff', marginBottom: 8 }}>{lightbox.title}</h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: 12 }}>{lightbox.desc}</p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  {lightbox.cameras && <span className="badge-neon">{lightbox.cameras} Cameras</span>}
                  {lightbox.resolution && <span className="badge-neon">{lightbox.resolution} Resolution</span>}
                  <span className="badge-neon">{lightbox.type}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
