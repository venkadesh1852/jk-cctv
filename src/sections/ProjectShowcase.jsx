import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FaTimes, FaExpand } from 'react-icons/fa'

const CATEGORIES = ['All', 'Home', 'Office', 'Factory', 'School', 'Networking']

const PROJECTS = [
  {
    title: 'Smart Home Security — Whitefield',
    category: 'Home',
    img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: '8-camera 4K system with AI detection',
  },
  {
    title: 'IT Office Surveillance — MG Road',
    category: 'Office',
    img: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: '24-camera AI network with access control',
  },
  {
    title: 'Manufacturing Plant — Peenya',
    category: 'Factory',
    img: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: '48-camera PTZ system with NVR',
  },
  {
    title: 'International School — Koramangala',
    category: 'School',
    img: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: '32-camera campus-wide surveillance',
  },
  {
    title: 'Office Network Infrastructure',
    category: 'Networking',
    img: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Fiber + Cat6A structured cabling',
  },
  {
    title: 'Luxury Villa — Sarjapur',
    category: 'Home',
    img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: '16-camera colour night vision system',
  },
]

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <motion.div className="section-subtitle mb-2"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            Project Showcase
          </motion.div>
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Our Completed <span className="gradient-text">Installations</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-2 mb-4"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <div className="row gy-3">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                layout
              >
                <div
                  className="project-card"
                  onClick={() => setLightbox(project)}
                >
                  <img src={project.img} alt={project.title} className="project-card-img" />
                  <div className="project-card-overlay">
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}>
                      <div>
                        <div style={{
                          fontFamily: 'var(--font-accent)',
                          fontSize: '0.65rem',
                          color: 'var(--neon-blue)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          marginBottom: 4,
                        }}>
                          {project.category}
                        </div>
                        <h6 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: '#fff', margin: 0 }}>
                          {project.title}
                        </h6>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                          {project.desc}
                        </p>
                      </div>
                      <div style={{
                        width: 36,
                        height: 36,
                        background: 'rgba(0,212,255,0.2)',
                        border: '1px solid var(--neon-blue)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--neon-blue)',
                        flexShrink: 0,
                      }}>
                        <FaExpand style={{ fontSize: '0.8rem' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

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
              style={{ maxWidth: 800, width: '100%' }}
            >
              <img
                src={lightbox.img}
                alt={lightbox.title}
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-neon)' }}
              />
              <div style={{ marginTop: 16, textAlign: 'center' }}>
                <h5 style={{ fontFamily: 'var(--font-display)', color: 'var(--neon-blue)', marginBottom: 4 }}>
                  {lightbox.title}
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{lightbox.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
