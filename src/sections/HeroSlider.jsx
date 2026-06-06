import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaCalendarCheck, FaShieldAlt, FaEye, FaWifi } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SLIDES = [
  {
    tag: 'Smart Home Security',
    title: ['Protect Your', 'Home 24/7'],
    description: 'AI-powered CCTV systems designed for complete home security. Real-time alerts, night vision, and mobile monitoring.',
    bg: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1920',
    icon: <FaShieldAlt />,
    accent: '#00d4ff',
  },
  {
    tag: 'Business Surveillance',
    title: ['Secure Your', 'Business Empire'],
    description: 'Enterprise-grade surveillance solutions for offices, factories, and commercial spaces. Multi-camera management.',
    bg: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920',
    icon: <FaEye />,
    accent: '#00ff88',
  },
  {
    tag: 'AI CCTV Monitoring',
    title: ['Intelligence', 'That Watches'],
    description: 'Next-generation AI cameras with face recognition, motion detection, and automated threat response systems.',
    bg: 'https://images.pexels.com/photos/60504/pexels-photo-60504.jpeg?auto=compress&cs=tinysrgb&w=1920',
    icon: <FaShieldAlt />,
    accent: '#00d4ff',
  },
  {
    tag: 'Enterprise Networking',
    title: ['Connected,', 'Unstoppable'],
    description: 'High-performance fiber and WiFi networking solutions. Structured cabling, server setup, and network maintenance.',
    bg: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1920',
    icon: <FaWifi />,
    accent: '#0066ff',
  },
]

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function HeroSlider() {
  const swiperRef = useRef(null)

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={900}
        style={{ height: '100%' }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {SLIDES.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div className="hero-slide">
                {/* Background */}
                <motion.div
                  className="hero-slide-bg"
                  animate={isActive ? { scale: 1.06 } : { scale: 1 }}
                  transition={{ duration: 7, ease: 'linear' }}
                  style={{ backgroundImage: `url(${slide.bg})` }}
                />
                <div className="hero-slide-overlay" />

                {/* Grid overlay */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 1,
                  backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)',
                  backgroundSize: '60px 60px',
                }} />

                {/* Scan line */}
                <motion.div
                  animate={{ y: ['0%', '110vh'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
                  style={{
                    position: 'absolute', left: 0, right: 0, top: 0,
                    height: 2,
                    background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                />

                {/* Content */}
                <div className="container position-relative" style={{ zIndex: 3 }}>
                  <div className="row align-items-center min-vh-100">
                    <div className="col-lg-7">
                      <div className="hero-content">
                        {isActive && (
                          <>
                            <motion.div
                              className="hero-tag"
                              custom={0}
                              variants={textVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <span style={{ width: 6, height: 6, background: slide.accent, borderRadius: '50%', boxShadow: `0 0 8px ${slide.accent}` }} />
                              {slide.tag}
                            </motion.div>

                            <div className="hero-title">
                              {slide.title.map((line, li) => (
                                <motion.span
                                  key={li}
                                  className="hero-title-line"
                                  custom={li + 1}
                                  variants={textVariants}
                                  initial="hidden"
                                  animate="visible"
                                  style={li === 1 ? {
                                    background: `linear-gradient(135deg, ${slide.accent}, #fff)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                  } : {}}
                                >
                                  {line}
                                </motion.span>
                              ))}
                            </div>

                            <motion.p
                              className="hero-description"
                              custom={3}
                              variants={textVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {slide.description}
                            </motion.p>

                            <motion.div
                              className="hero-buttons"
                              custom={4}
                              variants={textVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <a
                                href="https://wa.me/919876543210?text=Hi! I need a free site visit for CCTV installation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp"
                              >
                                <FaWhatsapp /> WhatsApp Now
                              </a>
                              <a href="tel:+919876543210" className="btn-call">
                                <FaPhone /> Call Now
                              </a>
                              <Link to="/contact" className="btn-neon d-inline-flex align-items-center gap-2">
                                <FaCalendarCheck style={{ fontSize: '0.75rem' }} />
                                Free Site Visit
                              </Link>
                            </motion.div>

                            <motion.div
                              className="hero-stats"
                              custom={5}
                              variants={textVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {[
                                { num: '1000+', label: 'Installations' },
                                { num: '500+', label: 'Happy Clients' },
                                { num: '5★', label: 'Rating' },
                              ].map((s, i) => (
                                <div key={i} className="hero-stat">
                                  <div className="hero-stat-number" style={{ color: slide.accent }}>
                                    {s.num}
                                  </div>
                                  <div className="hero-stat-label">{s.label}</div>
                                </div>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Right visual */}
                    {isActive && (
                      <div className="col-lg-5 d-none d-lg-flex justify-content-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                        >
                          <CctvHeroVisual accent={slide.accent} />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

function CctvHeroVisual({ accent }) {
  return (
    <div style={{ position: 'relative', width: 360, height: 360 }}>
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          border: `1px dashed ${accent}30`,
          borderRadius: '50%',
        }}
      />
      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 40,
          border: `1px solid ${accent}20`,
          borderRadius: '50%',
        }}
      />

      {/* Camera SVG */}
      <div style={{
        position: 'absolute',
        inset: 80,
        background: `radial-gradient(circle, ${accent}08 0%, transparent 70%)`,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <motion.svg
          viewBox="0 0 200 160"
          style={{ width: 180, filter: `drop-shadow(0 0 20px ${accent}60)` }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Camera body */}
          <rect x="20" y="50" width="120" height="70" rx="10" fill={`${accent}15`} stroke={accent} strokeWidth="1.5" />
          {/* Lens barrel */}
          <rect x="140" y="65" width="45" height="40" rx="8" fill={`${accent}12`} stroke={accent} strokeWidth="1.5" />
          {/* Lens */}
          <circle cx="163" cy="85" r="14" fill={`${accent}08`} stroke={accent} strokeWidth="1.5" />
          <circle cx="163" cy="85" r="8" fill={`${accent}20`} stroke={accent} strokeWidth="1" />
          <circle cx="163" cy="85" r="3" fill={accent} />
          {/* Mount bracket */}
          <path d="M60 50 L60 20 Q80 5 100 20 L100 50" fill={`${accent}10`} stroke={accent} strokeWidth="1.5" />
          {/* Status LEDs */}
          <circle cx="35" cy="65" r="4" fill={accent} opacity="0.9" />
          <circle cx="50" cy="65" r="4" fill="#ff2d55" opacity="0.9" />
          {/* IR dots */}
          {[0, 1, 2].map(i => (
            <motion.circle
              key={i}
              cx={30 + i * 15}
              cy={110}
              r="3"
              fill={accent}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
          {/* Field of view lines */}
          <motion.line x1="185" y1="85" x2="220" y2="55" stroke={accent} strokeWidth="0.8" strokeDasharray="4 4"
            animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line x1="185" y1="85" x2="220" y2="115" stroke={accent} strokeWidth="0.8" strokeDasharray="4 4"
            animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
        </motion.svg>
      </div>

      {/* Corner dots */}
      {[
        { top: '15%', left: '10%' },
        { top: '15%', right: '10%' },
        { bottom: '15%', left: '10%' },
        { bottom: '15%', right: '10%' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            ...pos,
            width: 6,
            height: 6,
            background: accent,
            borderRadius: '50%',
            boxShadow: `0 0 10px ${accent}`,
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
  )
}
