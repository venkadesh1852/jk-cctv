import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { stiffness: 120, damping: 18 })
  const ringY = useSpring(dotY, { stiffness: 120, damping: 18 })

  useEffect(() => {
    const move = (e) => {
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [dotX, dotY])

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ left: dotX, top: dotY }}
      />
      <motion.div
        className="cursor-ring"
        style={{ left: ringX, top: ringY, x: '-50%', y: '-50%' }}
      />
    </>
  )
}
