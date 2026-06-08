import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaDirections } from 'react-icons/fa'

export default function GoogleMapSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section grid-bg">
      <div className="container">
        <div className="text-center mb-5">
          <motion.div className="section-subtitle mb-2"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            Find Us
          </motion.div>
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            Visit Our <span className="gradient-text">Office</span>
          </motion.h2>
        </div>

        <div className="row gy-4 align-items-center">
          {/* Map */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-neon)',
                boxShadow: '0 0 40px rgba(0,212,255,0.08)',
              }}
            >
              <iframe
                title="SecureVision Pro Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62944.85192852951!2d77.90415646584361!3d9.590678987358595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012d0056847731%3A0xc0144243ebfd2cdf!2sJK%20SECURITY%20HARDWARES%20AND%20NETWORKING!5e0!3m2!1sen!2sin!4v1780765265272!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Info */}
          <div className="col-lg-4">
            <motion.div
              className="d-flex flex-column gap-3"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="contact-card">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <h6 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--neon-blue)', marginBottom: 6 }}>
                  Our Address
                </h6>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Security Tower, 3rd Floor,<br />
                  Tech Park, Outer Ring Road,<br />
                  Bangalore – 560001
                </p>
              </div>

              <div className="d-flex flex-column gap-2">
                <a
                  href="https://www.google.com/maps/place/JKSECURITY+HARDWARES+AND+NETWORKING"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-solid d-flex align-items-center justify-content-center gap-2"
                  style={{ textDecoration: 'none' }}
                >
                  <FaDirections /> Get Directions
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp d-flex align-items-center justify-content-center gap-2"
                  style={{ textDecoration: 'none' }}
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
                <a
                  href="tel:+919876543210"
                  className="btn-call d-flex align-items-center justify-content-center gap-2"
                  style={{ textDecoration: 'none' }}
                >
                  <FaPhone /> Call Now
                </a>
              </div>

              <div style={{
                padding: '16px',
                background: 'rgba(0,212,255,0.04)',
                border: '1px solid var(--border-neon)',
                borderRadius: 'var(--radius-md)',
              }}>
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--neon-blue)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                  Working Hours
                </div>
                {[
                  { day: 'Mon – Sat', time: '9:00 AM – 7:00 PM' },
                  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
                  { day: 'Emergency', time: '24/7 Support' },
                ].map((h, i) => (
                  <div key={i} className="d-flex justify-content-between" style={{ marginBottom: 4 }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{h.day}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 600 }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
