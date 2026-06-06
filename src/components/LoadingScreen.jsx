import { motion, AnimatePresence } from 'framer-motion'
import { FaShieldAlt } from 'react-icons/fa'

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{
            width: 64,
            height: 64,
            border: '2px solid rgba(0,212,255,0.2)',
            borderTop: '2px solid #00d4ff',
            borderRadius: '50%',
            margin: '0 auto 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaShieldAlt style={{ color: '#00d4ff', fontSize: '1.4rem', position: 'absolute' }} />
        </motion.div>
        <div className="loading-logo">SecureVision Pro</div>
        <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', letterSpacing: '0.25em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 24 }}>
          Next-Gen Security Intelligence
        </div>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>
      </motion.div>
    </motion.div>
  )
}
