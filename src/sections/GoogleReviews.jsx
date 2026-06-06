import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion, useInView } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const REVIEWS = [
  {
    name: 'Rajesh Kumar',
    location: 'Whitefield, Bangalore',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    text: 'Outstanding service! SecureVision Pro installed 8 cameras at my home with perfect placement. The AI motion alerts are brilliant. Installation was done in just one day.',
    service: 'Home CCTV Installation',
    date: 'March 2025',
  },
  {
    name: 'Priya Sharma',
    location: 'Koramangala, Bangalore',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    text: 'Completely transformed our office security. 24 cameras, access control, and structured cabling all done professionally. Highly recommend to any business owner.',
    service: 'Office Security System',
    date: 'January 2025',
  },
  {
    name: 'Mohammed Farhan',
    location: 'Electronic City, Bangalore',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    text: 'Professional team, genuine Hikvision products, and honest pricing. They finished our factory CCTV project on time and the quality is exceptional. 5 stars!',
    service: 'Factory CCTV System',
    date: 'April 2025',
  },
  {
    name: 'Sunita Reddy',
    location: 'HSR Layout, Bangalore',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    text: 'WiFi setup and CCTV done together — flawless execution. The team was respectful, clean, and completed everything within the quoted price. Will use again.',
    service: 'WiFi + CCTV Package',
    date: 'February 2025',
  },
  {
    name: 'Arjun Nair',
    location: 'Indiranagar, Bangalore',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    text: 'The AMC support is excellent. Any issue is resolved within hours. Best CCTV company in Bangalore without a doubt. Upgraded from 2MP to 8MP — huge difference!',
    service: 'AMC Service',
    date: 'May 2025',
  },
  {
    name: 'Deepika Menon',
    location: 'Jayanagar, Bangalore',
    avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    text: 'Set up biometric attendance and access control for our school. The entire project was managed professionally and the system works without any issues since installation.',
    service: 'Biometric & Access Control',
    date: 'June 2025',
  },
]

function StarRating({ count }) {
  return (
    <div className="d-flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} style={{ color: '#ffd700', fontSize: '0.85rem' }} />
      ))}
    </div>
  )
}

export default function GoogleReviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <motion.div className="section-subtitle mb-2"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            Customer Reviews
          </motion.div>
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
            500+ Happy <span className="gradient-text">Customers</span>
          </motion.h2>
          {/* Google rating badge */}
          <motion.div
            className="d-inline-flex align-items-center gap-3 mt-3 px-4 py-2"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-full)',
            }}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: '#fff' }}>4.9/5</strong> on Google Reviews
            </div>
            <div className="d-flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <FaStar key={i} style={{ color: '#ffd700', fontSize: '0.75rem' }} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: 48 }}
          >
            {REVIEWS.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="review-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="reviewer-avatar"
                    />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        {review.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {review.location}
                      </div>
                    </div>
                  </div>

                  <StarRating count={review.rating} />

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: '12px 0' }}>
                    "{review.text}"
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 12,
                    borderTop: '1px solid var(--border-subtle)',
                  }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--neon-blue)', fontFamily: 'var(--font-accent)', fontWeight: 600 }}>
                      {review.service}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {review.date}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
