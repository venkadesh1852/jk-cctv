import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaCheckCircle } from 'react-icons/fa'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const WHY_POINTS = [
  { icon: '👷', title: 'Professional Installation Team', desc: 'Our certified technicians have installed 1000+ systems. Clean cable routing, perfect camera placement, and no damage to your property.' },
  { icon: '✅', title: 'Genuine Branded Products', desc: 'We install only authentic Hikvision, Dahua, and CP Plus products with official warranty. Zero refurbished or counterfeit components.' },
  { icon: '💰', title: 'Affordable & Transparent Pricing', desc: 'Get upfront detailed quotations with no hidden charges. Best-in-market pricing with EMI options available.' },
  { icon: '⚡', title: 'Fast Installation', desc: 'Most projects completed in a single day. We respect your time and complete work on schedule with minimal disruption.' },
  { icon: '📋', title: 'AMC Support Available', desc: 'Annual Maintenance Contracts with 4 visits, priority support, and parts coverage to keep your system running perfectly.' },
  { icon: '🛡️', title: 'Warranty Support', desc: '1-year installation warranty plus manufacturer warranty on all products. We stand behind every installation we complete.' },
  { icon: '🕐', title: '24/7 Technical Support', desc: 'Our support team is available around the clock for emergencies. Average response time under 4 hours for AMC customers.' },
  { icon: '🤖', title: 'Latest Security Technologies', desc: 'We stay current with AI cameras, cloud storage, face recognition, and IoT security integration to future-proof your investment.' },
]

const STATS = [
  { num: '1000+', label: 'CCTV Installations' },
  { num: '500+', label: 'Happy Customers' },
  { num: '100+', label: 'Business Clients' },
  { num: '4.9★', label: 'Google Rating' },
]

const PROCESS = [
  { step: 1, title: 'Free Site Visit', desc: 'Our expert visits your property to assess coverage requirements, suggest camera placements, and understand your security goals.' },
  { step: 2, title: 'Custom Proposal', desc: 'We create a detailed proposal with camera specifications, layout diagrams, and transparent pricing — no hidden costs.' },
  { step: 3, title: 'Professional Installation', desc: 'Our certified team installs everything neatly and professionally, ensuring minimal disruption to your daily routine.' },
  { step: 4, title: 'Testing & Handover', desc: 'We test every camera, configure mobile access, and provide a complete system demonstration before handover.' },
  { step: 5, title: 'Ongoing Support', desc: 'Post-installation, our team provides technical support, system updates, and maintenance whenever required.' },
]

function SectionRef({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return <div ref={ref}>{children(inView)}</div>
}

export default function WhyChooseUs() {
  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="glow-orb glow-orb-blue" style={{ width: 600, height: 600, top: -200, left: -200 }} />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="section-subtitle mb-2">Why SecureVision Pro</div>
              <h1 className="section-title mb-4">
                The Reasons Customers <span className="gradient-text">Choose Us</span>
              </h1>
              <p className="section-description mb-4">
                With 8+ years of experience and 1000+ successful installations, we've built a reputation for professionalism, quality, and honest service.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <FaWhatsapp /> WhatsApp Now
                </a>
                <a href="tel:+919876543210" className="btn-call">
                  <FaPhone /> Call Now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row gy-3">
                {STATS.map((s, i) => (
                  <div key={i} className="col-6">
                    <motion.div
                      className="glass-card p-3 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 900, background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: 4 }}>
                        {s.label}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Points */}
      <SectionRef>
        {(inView) => (
          <section className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
              <div className="text-center mb-5">
                <div className="section-subtitle mb-2">Our Advantage</div>
                <h2 className="section-title">8 Reasons We're <span className="gradient-text">Different</span></h2>
              </div>
              <div className="row gy-4">
                {WHY_POINTS.map((point, i) => (
                  <div key={i} className="col-lg-6">
                    <motion.div
                      className="glass-card p-4 h-100"
                      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="d-flex align-items-start gap-3">
                        <div style={{
                          width: 52,
                          height: 52,
                          background: 'rgba(0,212,255,0.08)',
                          border: '1px solid var(--border-neon)',
                          borderRadius: 12,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.4rem',
                          flexShrink: 0,
                        }}>
                          {point.icon}
                        </div>
                        <div>
                          <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                            {point.title}
                          </h5>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                            {point.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </SectionRef>

      {/* Our Process */}
      <SectionRef>
        {(inView) => (
          <section className="section grid-bg">
            <div className="container">
              <div className="text-center mb-5">
                <div className="section-subtitle mb-2">Work Process</div>
                <h2 className="section-title">How We <span className="gradient-text">Work</span></h2>
              </div>
              <div className="row gy-4">
                {PROCESS.map((step, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <motion.div
                      className="glass-card p-4 h-100"
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div style={{
                        width: 48,
                        height: 48,
                        background: 'linear-gradient(135deg, var(--neon-blue), #0066ff)',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        color: '#fff',
                        marginBottom: 16,
                        boxShadow: '0 0 20px rgba(0,212,255,0.3)',
                      }}>
                        {step.step}
                      </div>
                      <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--neon-blue)', marginBottom: 8 }}>
                        {step.title}
                      </h5>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </SectionRef>

      {/* Quality Assurance */}
      <SectionRef>
        {(inView) => (
          <section className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
              <div className="row align-items-center gy-5">
                <div className="col-lg-5">
                  <motion.img
                    src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Quality Assurance"
                    style={{
                      width: '100%',
                      borderRadius: 'var(--radius-xl)',
                      border: '1px solid var(--border-neon)',
                      boxShadow: '0 0 40px rgba(0,212,255,0.1)',
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="col-lg-7">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="section-subtitle mb-2">Quality Assurance</div>
                    <h2 className="section-title mb-4">
                      Quality You Can <span className="gradient-text">Count On</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
                      Every installation undergoes a 25-point quality checklist before handover. We test camera angles, recording quality, night vision, remote access, and system performance to ensure everything works perfectly.
                    </p>
                    {[
                      '25-point installation quality checklist',
                      'Night vision & motion detection testing',
                      'Mobile app setup & live view verification',
                      'Cable routing aesthetics inspection',
                      'Customer satisfaction sign-off required',
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="d-flex align-items-center gap-2 mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.07 }}
                      >
                        <FaCheckCircle style={{ color: '#00ff88', flexShrink: 0, fontSize: '0.9rem' }} />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        )}
      </SectionRef>

      {/* CTA */}
      <section className="section-sm" style={{ background: 'var(--bg-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title mb-3">Convinced? Let's Get Started</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>Free site survey — no obligation, no sales pressure</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://wa.me/919876543210?text=Hi! I want to book a free site visit." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              📱 Book Free Site Visit
            </a>
            <a href="tel:+919876543210" className="btn-call">📞 Call Now</a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
