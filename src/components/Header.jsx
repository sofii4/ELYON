import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoImg from '../assets/images/dourado.png'
import WhatsAppIcon from './WhatsAppIcon'

const WHATSAPP_NUMBER = '554934300522'
const WHATSAPP_MSG = encodeURIComponent('Olá! Vim pelo site da Elyon Construções e gostaria de mais informações.')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

const navLinks = [
  { label: 'Serviços',   href: '/#servicos'  },
  { label: 'Essência',   href: '/#essencia'  },
  { label: 'Quem Somos', href: '/#quem-somos'},
  { label: 'Obras',      href: '/#obras'     },
  { label: 'Contato',    href: '/#contato'   },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll para âncoras
  const handleAnchor = (e, href) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault()
        const id = href.replace('/#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
      }
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-elyon-dark/95 backdrop-blur-md border-b border-elyon-gold/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/#hero" onClick={(e) => handleAnchor(e, '/#hero')} className="flex items-center gap-2 group">
          <img src={logoImg} alt="Elyon Construções" className="h-12 w-auto object-contain" />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className="font-arimo text-sm tracking-wider text-white/70 hover:text-elyon-gold transition-colors duration-300 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA BOTÃO */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-elyon-gold hover:bg-elyon-gold-light text-elyon-dark font-aktiv font-bold text-sm px-5 py-2.5 tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Fale Conosco
          </a>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden text-elyon-gold p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-elyon-dark/98 backdrop-blur-xl border-t border-elyon-gold/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className="font-arimo text-base tracking-wider text-white/70 hover:text-elyon-gold transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-elyon-gold text-elyon-dark font-aktiv font-bold text-sm px-5 py-3 tracking-widest uppercase"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  )
}
