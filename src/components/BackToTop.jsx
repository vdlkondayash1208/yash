import { useState, useEffect } from 'react'

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const checkScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg z-40 transition-all duration-300 transform hover:-translate-y-1 ${show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}

export default BackToTop
