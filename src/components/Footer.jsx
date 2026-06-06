import { Link } from 'react-router-dom'
import { FaShieldAlt, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

const LINKS_COMPANY = [
  { to: '/about', label: 'About Us' },
  { to: '/why-choose-us', label: 'Why Choose Us' },
  { to: '/projects', label: 'Our Projects' },
  { to: '/contact', label: 'Contact Us' },
]

const LINKS_SERVICES = [
  { to: '/services', label: 'CCTV Installation' },
  { to: '/services', label: 'CCTV Maintenance' },
  { to: '/services', label: 'WiFi Networking' },
  { to: '/services', label: 'Fiber Networking' },
  { to: '/services', label: 'Access Control' },
  { to: '/services', label: 'Biometric Systems' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-5">
          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div style={{
                width: 42,
                height: 42,
                background: 'linear-gradient(135deg,rgba(0,212,255,0.15),rgba(0,102,255,0.15))',
                border: '1px solid rgba(0,212,255,0.3)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <FaShieldAlt style={{ color: 'var(--neon-blue)', fontSize: '1.2rem' }} />
              </div>
              <div>
                <div className="footer-logo-text">SecureVision Pro</div>
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Next-Gen Security Intelligence
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 20 }}>
              India's most trusted CCTV & Networking company. Professional installation, genuine products, and 24/7 support for homes and businesses.
            </p>
            <div className="d-flex gap-3">
              {[
                { icon: <FaFacebook />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaYoutube />, href: '#' },
                { icon: <FaLinkedin />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: 36,
                  height: 36,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--neon-blue)'
                    e.currentTarget.style.color = 'var(--neon-blue)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading">Services</h6>
            {LINKS_SERVICES.map((l, i) => (
              <Link key={i} to={l.to} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading">Company</h6>
            {LINKS_COMPANY.map((l, i) => (
              <Link key={i} to={l.to} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-heading">Contact Us</h6>
            <div className="d-flex flex-column gap-3">
              <a href="tel:+919876543210" className="d-flex align-items-center gap-2 text-decoration-none" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-blue)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <div className="d-flex align-items-center justify-content-center" style={{ width: 34, height: 34, background: 'rgba(0,212,255,0.08)', border: '1px solid var(--border-neon)', borderRadius: 8, color: 'var(--neon-blue)', fontSize: '0.85rem', flexShrink: 0 }}>
                  <FaPhone />
                </div>
                +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2 text-decoration-none" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#25d366'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <div className="d-flex align-items-center justify-content-center" style={{ width: 34, height: 34, background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)', borderRadius: 8, color: '#25d366', fontSize: '0.85rem', flexShrink: 0 }}>
                  <FaWhatsapp />
                </div>
                WhatsApp Now
              </a>
              <div className="d-flex align-items-start gap-2" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <div className="d-flex align-items-center justify-content-center" style={{ width: 34, height: 34, background: 'rgba(0,212,255,0.08)', border: '1px solid var(--border-neon)', borderRadius: 8, color: 'var(--neon-blue)', fontSize: '0.85rem', flexShrink: 0, marginTop: 1 }}>
                  <FaMapMarkerAlt />
                </div>
                Security Tower, Tech Park,<br />Bangalore – 560001
              </div>
              <a href="mailto:info@securevisionpro.com" className="d-flex align-items-center gap-2 text-decoration-none" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-blue)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <div className="d-flex align-items-center justify-content-center" style={{ width: 34, height: 34, background: 'rgba(0,212,255,0.08)', border: '1px solid var(--border-neon)', borderRadius: 8, color: 'var(--neon-blue)', fontSize: '0.85rem', flexShrink: 0 }}>
                  <FaEnvelope />
                </div>
                info@securevisionpro.com
              </a>
            </div>
          </div>
        </div>

        <hr className="divider-neon mt-5" />

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}>
            © {new Date().getFullYear()} SecureVision Pro. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}>
            Designed with precision for security excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
