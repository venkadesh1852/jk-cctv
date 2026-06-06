import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingMenu from './components/FloatingMenu'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import WhyChooseUs from './pages/WhyChooseUs'
import Contact from './pages/Contact'
import { useState, useEffect } from 'react'

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollProgress />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <AppRoutes />
          <Footer />
          <FloatingMenu />
        </>
      )}
    </BrowserRouter>
  )
}

export default App
