import { motion } from 'framer-motion'
import HeroSlider from '../sections/HeroSlider'
import CCTVExperience from '../sections/CCTVExperience'
import ComparisonTool from '../sections/ComparisonTool'
import CCTVExplainer from '../sections/CCTVExplainer'
import HowCCTVWorks from '../sections/HowCCTVWorks'
import NetworkingServices from '../sections/NetworkingServices'
import ProjectShowcase from '../sections/ProjectShowcase'
import GoogleReviews from '../sections/GoogleReviews'
import TrustStats from '../sections/TrustStats'
import GoogleMapSection from '../sections/GoogleMapSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
  return (
    <motion.div
      className="page-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSlider />
      <CCTVExperience />
      <ComparisonTool />
      <CCTVExplainer />
      <HowCCTVWorks />
      <NetworkingServices />
      <ProjectShowcase />
      <GoogleReviews />
      <TrustStats />
      <GoogleMapSection />
    </motion.div>
  )
}
