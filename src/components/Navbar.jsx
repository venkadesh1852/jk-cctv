import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShieldAlt, FaTimes, FaBars, FaPhone, FaWhatsapp } from 'react-icons/fa'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/why-choose-us', label: 'Why Us' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between w-100">
            {/* Brand */}
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
              <div style={{
                width: 38,
                height: 38,
                background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,102,255,0.15))',
                border: '1px solid rgba(0,212,255,0.3)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <FaShieldAlt style={{ color: 'var(--neon-blue)', fontSize: '1.1rem' }} />
              </div>
              <div>
                <span className="navbar-brand-text">JK Handwares</span>
                <span className="navbar-brand-sub">And Networking</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="d-none d-lg-flex align-items-center gap-1">
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Toggle */}
            <div className="d-flex align-items-center gap-2">
              <a
                href="tel:+919876543210"
                className="btn-neon d-none d-lg-inline-flex align-items-center gap-2"
                style={{ fontSize: '0.7rem', padding: '10px 20px' }}
              >
                <FaPhone style={{ fontSize: '0.7rem' }} />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi! I need a CCTV consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp d-none d-lg-inline-flex"
                style={{ fontSize: '0.7rem', padding: '10px 20px' }}
              >
                <FaWhatsapp style={{ fontSize: '0.75rem' }} />
                WhatsApp
              </a>

              <button
                className="navbar-toggler-custom d-lg-none"
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Toggle menu"
              >
                <span className="toggler-line" />
                <span className="toggler-line" />
                <span className="toggler-line" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'transparent',
                border: '1px solid var(--border-neon)',
                color: 'var(--neon-blue)',
                width: 44,
                height: 44,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.1rem',
              }}
            >
              <FaTimes />
            </button>

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            <div className="d-flex gap-3 mt-4">
              <a href="tel:+917305159812" className="btn-call">
                <FaPhone /> Call
              </a>
              <a href="https://wa.me/917305159812" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
