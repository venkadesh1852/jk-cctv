import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaShieldAlt, FaStar, FaAward, FaUsers, FaCheckCircle } from 'react-icons/fa'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

function SectionRef({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return <div ref={ref}>{children(inView)}</div>
}

export default function About() {
  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div
          className="glow-orb glow-orb-blue"
          style={{ width: 600, height: 600, top: -200, left: -200 }}
        />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="section-subtitle mb-2">Who We Are</div>
              <h1 className="section-title mb-4">
                Bangalore's Most <span className="gradient-text">Trusted Security</span> Company
              </h1>
              <p className="section-description mb-4">
                SecureVision Pro has been protecting homes, offices, and businesses across Bangalore since 2016. With over 1000 successful installations, we combine cutting-edge technology with professional service.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary-solid">Get Free Consultation</Link>
                <Link to="/projects" className="btn-neon">View Our Work</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row gy-3">
                {[
                  { icon: <FaShieldAlt />, title: 'Founded in 2016', desc: '8+ years serving Bangalore' },
                  { icon: <FaUsers />, title: '500+ Clients', desc: 'Homes, offices & factories' },
                  { icon: <FaAward />, title: 'Certified Team', desc: 'Hikvision & Dahua certified' },
                  { icon: <FaStar />, title: '4.9/5 Rating', desc: '500+ Google reviews' },
                ].map((card, i) => (
                  <div key={i} className="col-6">
                    <motion.div
                      className="glass-card p-3 h-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div style={{ color: 'var(--neon-blue)', fontSize: '1.3rem', marginBottom: 8 }}>{card.icon}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, marginBottom: 4 }}>{card.title}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{card.desc}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <SectionRef>
        {(inView) => (
          <section className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
              <div className="row gy-4">
                {[
                  {
                    title: 'Our Mission',
                    icon: '🎯',
                    color: '#00d4ff',
                    desc: 'To make professional security technology accessible to every home and business in India. We believe security is a right, not a luxury — that\'s why we offer enterprise-grade systems at affordable prices.',
                  },
                  {
                    title: 'Our Vision',
                    icon: '🔭',
                    color: '#00ff88',
                    desc: 'To become India\'s #1 security solutions company by consistently delivering quality, innovation, and honest service. We envision a future where every property is intelligently protected.',
                  },
                  {
                    title: 'Our Values',
                    icon: '💎',
                    color: '#ff6b2b',
                    desc: 'Integrity in every installation. Genuine branded products. Transparent pricing with no hidden costs. Long-term customer relationships built on trust, expertise, and exceptional after-sales support.',
                  },
                ].map((item, i) => (
                  <div key={i} className="col-lg-4">
                    <motion.div
                      className="glass-card p-4 h-100"
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{item.icon}</div>
                      <h4 style={{ fontFamily: 'var(--font-display)', color: item.color, fontSize: '1.1rem', marginBottom: 12 }}>
                        {item.title}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </SectionRef>

      {/* Team */}
      <SectionRef>
        {(inView) => (
          <section className="section grid-bg">
            <div className="container">
              <div className="text-center mb-5">
                <div className="section-subtitle mb-2">Our Team</div>
                <h2 className="section-title">
                  Expert Professionals <span className="gradient-text">Behind Every Installation</span>
                </h2>
              </div>
              <div className="row gy-4 justify-content-center">
                {[
                  { name: 'Arun Sharma', role: 'Founder & CEO', exp: '15 years in security', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300' },
                  { name: 'Vikram Singh', role: 'Lead CCTV Technician', exp: 'Hikvision Certified', img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300' },
                  { name: 'Priya Nair', role: 'Network Engineer', exp: 'CCNA Certified', img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300' },
                  { name: 'Suresh Kumar', role: 'Support Manager', exp: '10 years in IT support', img: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300' },
                ].map((member, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.1 }}
                      style={{ textAlign: 'center' }}
                    >
                      <div style={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid var(--border-neon)',
                        margin: '0 auto 16px',
                        boxShadow: '0 0 20px rgba(0,212,255,0.2)',
                      }}>
                        <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <h6 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: 4 }}>
                        {member.name}
                      </h6>
                      <div style={{ color: 'var(--neon-blue)', fontSize: '0.8rem', fontFamily: 'var(--font-accent)', fontWeight: 600, marginBottom: 4 }}>
                        {member.role}
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{member.exp}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </SectionRef>

      {/* CTA */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container text-center">
          <h2 className="section-title mb-3">Ready to Work With Us?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>Book a free site visit and get a custom quote today</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              📱 WhatsApp Now
            </a>
            <a href="tel:+919876543210" className="btn-call">📞 Call Now</a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
