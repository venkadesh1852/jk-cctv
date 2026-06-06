import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaPhone, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const ALL_SERVICES = [
  {
    id: 'cctv-install',
    icon: '📷',
    title: 'CCTV Installation',
    color: '#00d4ff',
    img: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Professional CCTV installation for homes, offices, shops, and factories. We install Hikvision, Dahua, and CP Plus cameras with full HD and 4K options.',
    features: ['4K Ultra HD cameras', 'Night vision up to 100m', 'AI motion detection', 'Mobile live view', 'Cloud & local storage', 'Professional cable routing'],
    benefits: ['Same-day installation available', 'Full system demo & training', '1-year installation warranty'],
    process: ['Site survey', 'System design', 'Installation', 'Testing', 'Demo & handover'],
    faqs: [
      { q: 'How many cameras do I need?', a: 'For a standard home, 4–8 cameras is typical. We recommend a free site survey to determine the exact number and placement.' },
      { q: 'Which brand do you install?', a: 'We install Hikvision, Dahua, and CP Plus — all genuine branded products with full warranty support.' },
      { q: 'How long does installation take?', a: 'A standard 8-camera home installation takes 6–8 hours in a single day.' },
    ],
  },
  {
    id: 'cctv-maintain',
    icon: '🔧',
    title: 'CCTV Maintenance',
    color: '#00ff88',
    img: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Scheduled preventive maintenance and emergency repairs for all brands of CCTV systems. Keep your surveillance running at peak performance.',
    features: ['Camera cleaning & adjustment', 'DVR/NVR health check', 'Hard drive health test', 'Cable inspection', 'Software updates', 'Performance tuning'],
    benefits: ['Extends system life by 3–5 years', 'Prevents unexpected failures', 'Optimises recording quality'],
    process: ['Diagnostic check', 'Physical cleaning', 'Software update', 'Performance test', 'Report & recommendations'],
    faqs: [
      { q: 'How often should CCTV be serviced?', a: 'We recommend quarterly servicing for commercial sites and bi-annual for residential.' },
      { q: 'Do you service all brands?', a: 'Yes, we service all brands including Hikvision, Dahua, CP Plus, Honeywell, and more.' },
    ],
  },
  {
    id: 'amc',
    icon: '📋',
    title: 'Annual Maintenance Contract (AMC)',
    color: '#ff6b2b',
    img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Comprehensive AMC plans covering regular maintenance visits, emergency support, and priority response for your entire security system.',
    features: ['4 maintenance visits/year', '24/7 emergency support', 'Priority response (4hrs)', 'Parts replacement coverage', 'Free labour on repairs', 'Annual performance report'],
    benefits: ['Predictable annual cost', 'Zero downtime assurance', 'Dedicated account manager'],
    process: ['System audit', 'AMC agreement', 'Scheduled visits', 'Emergency support', 'Annual renewal'],
    faqs: [
      { q: 'What is covered in AMC?', a: 'Labour charges, preventive maintenance visits, software updates, and priority emergency response.' },
      { q: 'Is there a minimum system size?', a: 'AMC plans are available for systems with 4 cameras and above.' },
    ],
  },
  {
    id: 'wifi',
    icon: '📶',
    title: 'WiFi Installation',
    color: '#0066ff',
    img: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Professional WiFi setup and optimization for homes and offices. We design coverage maps, install access points, and configure for maximum performance.',
    features: ['Site survey & coverage planning', 'Enterprise WiFi 6 access points', 'Mesh networking', 'Guest network isolation', 'Bandwidth management', 'Remote monitoring'],
    benefits: ['100% WiFi coverage guaranteed', 'Eliminates dead zones', 'Supports 100+ concurrent devices'],
    process: ['RF site survey', 'AP placement design', 'Installation', 'Configuration', 'Speed testing'],
    faqs: [
      { q: 'What brands do you install?', a: 'We install Ubiquiti UniFi, TP-Link Omada, Cisco Meraki, and Netgear for enterprise applications.' },
      { q: 'Can you cover a 50,000 sqft office?', a: 'Yes, we design and deploy enterprise WiFi for large spaces including multi-floor buildings and warehouses.' },
    ],
  },
  {
    id: 'networking',
    icon: '🌐',
    title: 'Office Networking',
    color: '#a855f7',
    img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Complete office LAN/WAN infrastructure including switching, routing, VLAN configuration, and firewall setup for secure, high-performance networks.',
    features: ['Managed switch configuration', 'VLAN segmentation', 'Firewall & UTM setup', 'VPN configuration', 'Network monitoring', 'Bandwidth management'],
    benefits: ['Secure network segmentation', 'Optimal performance', 'Scalable for growth'],
    process: ['Network assessment', 'Architecture design', 'Equipment installation', 'Configuration', 'Testing & documentation'],
    faqs: [
      { q: 'Do you provide network documentation?', a: 'Yes, we provide complete network diagrams, IP allocation sheets, and configuration documentation.' },
    ],
  },
  {
    id: 'fiber',
    icon: '⚡',
    title: 'Fiber Networking',
    color: '#06b6d4',
    img: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'High-speed fiber optic network deployment for businesses requiring ultra-low latency and gigabit connectivity across buildings or campuses.',
    features: ['Singlemode & multimode fiber', 'Fusion splicing', 'OTDR testing', 'OFC conduit laying', 'SFP module setup', 'End-to-end testing'],
    benefits: ['Up to 100Gbps bandwidth', 'Zero electromagnetic interference', 'Future-proof infrastructure'],
    process: ['Route planning', 'Conduit installation', 'Fiber pulling', 'Splicing & termination', 'OTDR testing'],
    faqs: [
      { q: 'What is the maximum fiber distance?', a: 'Singlemode fiber can cover up to 10km+ without signal loss, suitable for campus and building-to-building links.' },
    ],
  },
  {
    id: 'cabling',
    icon: '🔌',
    title: 'Structured Cabling',
    color: '#ff2d55',
    img: 'https://images.pexels.com/photos/60504/pexels-photo-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Professional Cat6/Cat6A structured cabling with proper cable management, patch panels, labeling, and ANSI/TIA compliance certification.',
    features: ['Cat6/Cat6A/Cat7 cabling', 'Patch panel installation', 'Proper cable management', 'End-to-end labeling', 'Performance certification', 'Rack cable dressing'],
    benefits: ['TIA-568 compliant installation', 'Easy future expansion', 'Neat professional finish'],
    process: ['Cable schedule creation', 'Conduit installation', 'Cable pulling', 'Termination', 'Testing & certification'],
    faqs: [
      { q: 'Do you provide cabling certification?', a: 'Yes, we provide Fluke Network certification for all structured cabling installations.' },
    ],
  },
  {
    id: 'server',
    icon: '🖥️',
    title: 'Server Setup',
    color: '#ffd700',
    img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Complete server rack installation, NAS/SAN setup, virtualization deployment, and ongoing server maintenance for businesses of all sizes.',
    features: ['Rack & UPS installation', 'Windows Server setup', 'RAID configuration', 'Virtualization (VMware/Hyper-V)', 'Backup solutions', 'Remote management'],
    benefits: ['Centralized data management', 'Business continuity planning', 'Reduced IT infrastructure costs'],
    process: ['Requirements analysis', 'Hardware procurement', 'Rack installation', 'OS & software setup', 'Testing & handover'],
    faqs: [
      { q: 'Do you provide server hardware?', a: 'Yes, we supply and install servers from Dell, HP, and Lenovo with full warranty.' },
    ],
  },
  {
    id: 'access',
    icon: '🔐',
    title: 'Access Control Systems',
    color: '#00d4ff',
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Smart access control solutions including RFID, fingerprint, face recognition, and mobile-based entry systems for offices, factories, and apartments.',
    features: ['RFID card access', 'Fingerprint biometric', 'Face recognition', 'Mobile app control', 'Door log reports', 'Multi-level authorization'],
    benefits: ['Eliminate physical key management', 'Real-time door access logs', 'Remote access management'],
    process: ['Requirements study', 'System design', 'Door controller installation', 'Enrollment', 'Testing'],
    faqs: [
      { q: 'Can access control integrate with CCTV?', a: 'Yes, we integrate access control with CCTV to automatically trigger recording when a door is accessed.' },
    ],
  },
  {
    id: 'biometric',
    icon: '👆',
    title: 'Biometric Attendance',
    color: '#00ff88',
    img: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Fingerprint, face recognition, and iris-based biometric attendance systems with payroll integration and detailed reporting for businesses.',
    features: ['Fingerprint & face recognition', 'Payroll software integration', 'Real-time attendance reports', 'Shift management', 'Overtime calculation', 'Mobile attendance app'],
    benefits: ['Eliminates buddy punching', 'Automated payroll processing', 'Compliant with labour laws'],
    process: ['Employee enrollment', 'System configuration', 'Software integration', 'Training', 'Go-live support'],
    faqs: [
      { q: 'Does it integrate with Tally/QuickBooks?', a: 'Yes, we support integration with popular payroll and HR software including Tally, Zoho, and custom APIs.' },
    ],
  },
  {
    id: 'vdp',
    icon: '🔔',
    title: 'Video Door Phone',
    color: '#ff6b2b',
    img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Smart video door phones with mobile app integration, two-way audio, night vision, and remote unlock for apartments, villas, and offices.',
    features: ['HD video calling', 'Night vision doorbell', 'Remote mobile unlock', 'Two-way audio', 'Visitor snapshot', 'Multi-tenant support'],
    benefits: ['See visitors before opening', 'Remote door access via app', 'Visitor log with photos'],
    process: ['Outdoor unit installation', 'Indoor panel setup', 'Network configuration', 'App setup', 'Testing'],
    faqs: [
      { q: 'Can I answer the door from my phone?', a: 'Yes, our video door phones work with smartphones so you can see and communicate with visitors from anywhere.' },
    ],
  },
]

function FAQ({ faqs }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="mt-3">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            {faq.q}
            {open === i ? <FaChevronUp style={{ fontSize: '0.7rem', color: 'var(--neon-blue)' }} /> : <FaChevronDown style={{ fontSize: '0.7rem' }} />}
          </div>
          <AnimatePresence>
            {open === i && (
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {faq.a}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

function ServiceCard({ service }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-5"
    >
      <div className="row gy-4 align-items-start">
        {/* Image */}
        <div className="col-lg-5">
          <div style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: `1px solid ${service.color}25`,
            boxShadow: `0 0 30px ${service.color}10`,
            aspectRatio: '16/9',
          }}>
            <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Content */}
        <div className="col-lg-7">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div style={{
              width: 52,
              height: 52,
              background: `${service.color}15`,
              border: `1px solid ${service.color}30`,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
            }}>
              {service.icon}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.8rem)', color: service.color, margin: 0 }}>
              {service.title}
            </h2>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>{service.desc}</p>

          <div className="row gy-3 mb-4">
            <div className="col-md-6">
              <h6 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: service.color, marginBottom: 10 }}>
                Features
              </h6>
              <div className="d-flex flex-column gap-1">
                {service.features.map((f, i) => (
                  <div key={i} className="d-flex align-items-center gap-2">
                    <div style={{ width: 5, height: 5, background: service.color, borderRadius: '50%', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <h6 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: service.color, marginBottom: 10 }}>
                Benefits
              </h6>
              <div className="d-flex flex-column gap-1">
                {service.benefits.map((b, i) => (
                  <div key={i} className="d-flex align-items-start gap-2">
                    <span style={{ color: '#00ff88', flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process steps */}
          <div className="d-flex flex-wrap gap-2 mb-4">
            {service.process.map((step, i) => (
              <div key={i} className="d-flex align-items-center gap-1">
                <div style={{
                  width: 22,
                  height: 22,
                  background: service.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.6rem',
                  fontWeight: 900,
                  color: '#000',
                }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{step}</span>
                {i < service.process.length - 1 && <span style={{ color: 'var(--text-muted)' }}>→</span>}
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: 20 }}>
            <h6 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: service.color, marginBottom: 8 }}>
              FAQ
            </h6>
            <FAQ faqs={service.faqs} />
          </div>

          {/* CTA */}
          <div className="d-flex flex-wrap gap-2">
            <a href={`https://wa.me/919876543210?text=Hi! I'm interested in ${service.title}.`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp style={{ fontSize: '0.8rem' }} /> WhatsApp
            </a>
            <a href="tel:+919876543210" className="btn-call">
              <FaPhone style={{ fontSize: '0.8rem' }} /> Call Now
            </a>
          </div>
        </div>
      </div>
      <hr className="divider-neon mt-5" />
    </motion.div>
  )
}

export default function Services() {
  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Hero */}
      <div className="page-hero" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="glow-orb glow-orb-blue" style={{ width: 500, height: 500, top: -150, right: -100 }} />
        <div className="container position-relative" style={{ zIndex: 1, textAlign: 'center' }}>
          <div className="section-subtitle mb-2">What We Offer</div>
          <h1 className="section-title mb-4">
            Complete Security &<br /><span className="gradient-text">Networking Solutions</span>
          </h1>
          <p className="section-description mx-auto mb-4">
            From CCTV installation to enterprise networking — we provide end-to-end technology solutions for homes and businesses.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp /> Get Free Quote
            </a>
            <a href="tel:+919876543210" className="btn-call">
              <FaPhone /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          {ALL_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </motion.div>
  )
}
