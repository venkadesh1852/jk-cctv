import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const SERVICES_LIST = [
  'CCTV Installation',
  'CCTV Maintenance / AMC',
  'WiFi Installation',
  'Office Networking',
  'Fiber Networking',
  'Structured Cabling',
  'Server Setup',
  'Access Control',
  'Biometric Attendance',
  'Video Door Phone',
  'Other / General Enquiry',
]

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', mobile: '', location: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi! My name is ${formData.name}.\nMobile: ${formData.mobile}\nLocation: ${formData.location}\nService Needed: ${formData.service}\nMessage: ${formData.message}`
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ textAlign: 'center', padding: '48px 24px' }}
      >
        <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
        <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--neon-blue)', marginBottom: 12 }}>
          WhatsApp Opened!
        </h4>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
          Your message has been pre-filled in WhatsApp. Send it to connect with us instantly.
        </p>
        <button
          className="btn-neon"
          onClick={() => setSubmitted(false)}
        >
          Send Another
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row gy-3">
        <div className="col-md-6">
          <label className="form-label-dark">Your Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="form-control form-control-dark"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label-dark">Mobile Number *</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="+91 7305159812"
            className="form-control form-control-dark"
          />
        </div>
        <div className="col-12">
          <label className="form-label-dark">Location / Area *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Your area, city"
            className="form-control form-control-dark"
          />
        </div>
        <div className="col-12">
          <label className="form-label-dark">Service Required *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="form-control form-control-dark"
            style={{ cursor: 'pointer' }}
          >
            <option value="">Select a service...</option>
            {SERVICES_LIST.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label className="form-label-dark">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your requirements, property size, number of cameras needed..."
            className="form-control form-control-dark"
            style={{ resize: 'vertical' }}
          />
        </div>
        <div className="col-12">
          <div className="d-flex flex-wrap gap-3">
            <button type="submit" className="btn-whatsapp d-flex align-items-center gap-2">
              <FaWhatsapp /> Send via WhatsApp
            </button>
            <a href="tel:+919876543210" className="btn-call d-flex align-items-center gap-2">
              <FaPhone /> Call Now
            </a>
          </div>
        </div>
      </div>
    </form>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="glow-orb glow-orb-blue" style={{ width: 500, height: 500, top: -200, left: -200 }} />
        <div className="container position-relative" style={{ zIndex: 1, textAlign: 'center' }}>
          <div className="section-subtitle mb-2">Get In Touch</div>
          <h1 className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="section-description mx-auto">
            Ready to secure your property? Get a free site visit and customised quote. We're available 24/7 for emergencies.
          </p>
        </div>
      </div>

      {/* Contact cards */}
      <section style={{ background: 'var(--bg-secondary)', padding: '60px 0' }}>
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {[
              { icon: <FaWhatsapp />, title: 'WhatsApp', info: '+91 7305159812', sub: 'Instant response', color: '#25d366', href: 'https://wa.me/919876543210' },
              { icon: <FaPhone />, title: 'Call Us', info: '+91 7305159812', sub: 'Mon–Sun 9am–7pm', color: '#ff6b2b', href: 'tel:+919876543210' },
              { icon: <FaMapMarkerAlt />, title: 'Visit Us', info: 'Security Tower, Tech Park', sub: 'Bangalore – 560001', color: 'var(--neon-blue)', href: 'https://maps.google.com' },
              { icon: <FaEnvelope />, title: 'Email', info: 'info@securevisionpro.com', sub: 'Response within 2hrs', color: '#a855f7', href: 'mailto:info@securevisionpro.com' },
            ].map((card, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <motion.a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-card d-block text-decoration-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="contact-icon" style={{ background: `${card.color}15`, border: `1px solid ${card.color}30`, color: card.color }}>
                    {card.icon}
                  </div>
                  <h6 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: card.color, marginBottom: 4 }}>
                    {card.title}
                  </h6>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: 2 }}>{card.info}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{card.sub}</div>
                </motion.a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section ref={ref} className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="row gy-5 align-items-start">
            {/* Form */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="section-subtitle mb-2">Request a Quote</div>
                <h2 className="section-title mb-4">
                  Get Your Free <span className="gradient-text">Site Visit</span>
                </h2>
                <div className="glass-card p-4">
                  <ContactForm />
                </div>
              </motion.div>
            </div>

            {/* Map + info */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="section-subtitle mb-2">Our Location</div>
                <h2 className="section-title mb-4">
                  Find Our <span className="gradient-text">Office</span>
                </h2>

                <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border-neon)', marginBottom: 24 }}>
                  <iframe
                    title="SecureVision Pro Office"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62944.85192852951!2d77.90415646584361!3d9.590678987358595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012d0056847731%3A0xc0144243ebfd2cdf!2sJK%20SECURITY%20HARDWARES%20AND%20NETWORKING!5e0!3m2!1sen!2sin!4v1780765265272!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="280"
                    style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="glass-card p-4">
                  <h6 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--neon-blue)', marginBottom: 16 }}>
                    What to Expect
                  </h6>
                  {[
                    'Free site visit within 24 hours',
                    'Detailed written quotation',
                    'No obligation or sales pressure',
                    'Expert advice on best camera placement',
                    'Competitive pricing guaranteed',
                  ].map((item, i) => (
                    <div key={i} className="d-flex align-items-center gap-2 mb-2">
                      <FaCheckCircle style={{ color: '#00ff88', fontSize: '0.8rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item}</span>
                    </div>
                  ))}

                  <hr className="divider-neon my-3" />

                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
                    Working Hours
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Monday – Saturday</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Sunday</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Emergency Support</span>
                    <span style={{ fontSize: '0.85rem', color: '#00ff88', fontWeight: 600 }}>24/7</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
