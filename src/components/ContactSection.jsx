import { useEffect, useRef } from 'react'
import { Instagram, Facebook, Mail } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const WHATSAPP_NUMBER = '554934300522'
const WHATSAPP_MSG    = encodeURIComponent('Olá! Vim pelo site da Elyon Construções e gostaria de conversar sobre meu projeto.')
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

const socials = [
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Facebook,  href: 'https://facebook.com',  label: 'Facebook'  },
  { Icon: Mail, href: 'mailto:elyon.controladoria@gmail.com', label: 'Email' },
]

export default function ContactSection() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contato" className="py-28 bg-elyon-dark relative overflow-hidden">
      <div className="absolute inset-0 arch-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elyon-gold/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Label */}
        <div
          ref={(el) => (refs.current[0] = el)}
          className="reveal flex items-center justify-center gap-4 mb-6"
        >
          <span className="w-8 h-px bg-elyon-gold/40" />
          <span className="font-arimo text-elyon-gold text-xs tracking-[0.4em] uppercase">Entre em contato</span>
          <span className="w-8 h-px bg-elyon-gold/40" />
        </div>

        {/* Headline */}
        <h2
          ref={(el) => (refs.current[1] = el)}
          className="reveal font-aktiv font-bold text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ transitionDelay: '100ms' }}
        >
          Fale <span className="text-elyon-gold">Conosco</span>
        </h2>

        {/* Subtitle */}
        <p
          ref={(el) => (refs.current[2] = el)}
          className="reveal font-arimo text-white/50 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ transitionDelay: '200ms' }}
        >
          Seu projeto merece atenção de especialistas. Conte-nos sua ideia e vamos construí-la juntos.
        </p>

        {/* WhatsApp CTA */}
        <div
          ref={(el) => (refs.current[3] = el)}
          className="reveal mb-12"
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-elyon-gold text-elyon-dark font-aktiv font-bold text-sm px-10 py-5 tracking-widest uppercase transition-all duration-300 hover:bg-elyon-gold-light hover:scale-105 active:scale-95 shadow-lg shadow-elyon-gold/20"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Iniciar Conversa no WhatsApp
          </a>
        </div>

        {/* Social icons */}
        <div
          ref={(el) => (refs.current[4] = el)}
          className="reveal flex justify-center gap-4"
          style={{ transitionDelay: '400ms' }}
        >
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 border border-white/10 hover:border-elyon-gold flex items-center justify-center text-white/30 hover:text-elyon-gold transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
