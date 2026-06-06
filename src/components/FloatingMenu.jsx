import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaArrowUp, FaTimes, FaBars } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

const PHONE = '+919876543210'
const MAPS_URL = 'https://maps.google.com/?q=Bangalore+India'

export default function FloatingMenu() {
  const [open, setOpen] = useState(false)

  const items = [
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      href: `https://wa.me/${PHONE}?text=Hello! I'm interested in CCTV installation.`,
      className: 'floating-whatsapp',
    },
    {
      icon: <FaPhone />,
      label: 'Call Now',
      href: `tel:${PHONE}`,
      className: 'floating-phone',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Get Directions',
      href: MAPS_URL,
      className: 'floating-maps',
    },
    {
      icon: <FaArrowUp />,
      label: 'Back to Top',
      href: null,
      className: 'floating-top',
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
  ]

  return (
    <div className="floating-menu">
      <AnimatePresence>
        {open && items.map((item, i) => (
          <motion.div
            key={i}
            className="floating-item"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ delay: i * 0.06, duration: 0.25, ease: 'easeOut' }}
          >
            <span className="floating-label">{item.label}</span>
            {item.onClick ? (
              <button
                className={`floating-btn ${item.className}`}
                onClick={item.onClick}
                aria-label={item.label}
              >
                {item.icon}
              </button>
            ) : (
              <a
                className={`floating-btn ${item.className}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      <button
        className="floating-trigger"
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle contact menu"
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </motion.div>
      </button>
    </div>
  )
}
