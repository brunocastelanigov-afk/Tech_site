import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './components/pages/HomePage'
import ContactFormPage from './components/pages/ContactFormPage'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  const isContactRoute = pathname === '/contato' || pathname === '/contato/'

  return (
    <>
      <Navbar />
      {isContactRoute ? <ContactFormPage /> : <HomePage />}
      <Footer />
    </>
  )
}

export default App
