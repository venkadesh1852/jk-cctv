import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion, useInView } from 'framer-motion'
import { FaStar } from 'react-icons/fa'




export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="section">
      <div className="container">
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            color: '#fff'
          }}
        >
          Google Reviews
        </h2>

        <div
          className="elfsight-app-1b5953dd-4fd2-4efd-96c7-336cdf60fef8"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  )
}