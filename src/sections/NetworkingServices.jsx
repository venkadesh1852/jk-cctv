import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaWifi, FaNetworkWired, FaServer, FaSitemap, FaTools, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    icon: <FaWifi />,
    title: 'WiFi Setup & Optimization',
    desc: 'Enterprise WiFi installation with full coverage, mesh networks, and load balancing for seamless connectivity.',
    color: '#00d4ff',
  },
  {
    icon: <FaNetworkWired />,
    title: 'Office Networking',
    desc: 'Complete LAN/WAN setup with managed switches, VLANs, and firewall configuration for secure office networks.',
    color: '#00ff88',
  },
  {
    icon: <FaSitemap />,
    title: 'Fiber Networking',
    desc: 'High-speed fiber optic cabling and termination for businesses requiring ultra-low latency connectivity.',
    color: '#0066ff',
  },
  {
    icon: <FaNetworkWired />,
    title: 'Structured Cabling',
    desc: 'Cat6/Cat6A structured cabling with proper cable management, labeling, and performance certification.',
    color: '#ff6b2b',
  },
  {
    icon: <FaServer />,
    title: 'Server Setup',
    desc: 'Rack installation, server configuration, RAID setup, and virtualization solutions for enterprise infrastructure.',
    color: '#a855f7',
  },
  {
    icon: <FaTools />,
    title: 'Network Maintenance',
    desc: '24/7 monitoring, annual maintenance contracts, and rapid response support to keep your network running.',
    color: '#ff2d55',
  },
]

export default function NetworkingServices() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section grid-bg">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <motion.div className="section-subtitle mb-2"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
              Networking Solutions
            </motion.div>
            <motion.h2 className="section-title"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              Complete Network <span className="gradient-text">Infrastructure</span>
            </motion.h2>
          </div>
          <div className="col-lg-6">
            <motion.p className="section-description"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}>
              From small office WiFi to enterprise data center deployments — we design, install, and maintain networks that power businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
              className="mt-3"
            >
              <Link to="/services" className="btn-neon d-inline-flex align-items-center gap-2">
                View All Services
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="row gy-4">
          {SERVICES.map((svc, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="service-icon-wrap" style={{
                  background: `${svc.color}12`,
                  borderColor: `${svc.color}30`,
                  color: svc.color,
                }}>
                  {svc.icon}
                </div>
                <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>
                  {svc.title}
                </h5>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {svc.desc}
                </p>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6, color: svc.color, fontSize: '0.8rem', fontFamily: 'var(--font-accent)', fontWeight: 600 }}>
                  Learn More →
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
