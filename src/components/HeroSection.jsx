import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import lionImg from '../assets/images/2.png'
import WhatsAppIcon from './WhatsAppIcon'

const WHATSAPP_URL = `https://wa.me/554934300522?text=${encodeURIComponent('Olá! Gostaria de conversar sobre meu projeto.')}`

// Componente de counter animado
function CounterCard({ targetNumber, suffix, label, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          const startTime = Date.now()
          const interval = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(targetNumber * progress))
            
            if (progress === 1) clearInterval(interval)
          }, 30)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [targetNumber, duration, hasAnimated])

  return (
    <div ref={ref} className="flex flex-col items-center flex-shrink-0">
      <div className="font-aktiv font-bold text-2xl text-white mb-4">
        {count}{suffix}
      </div>
      <p className="font-arimo text-elyon-gold text-xs tracking-wide uppercase text-center whitespace-pre-line">
        {label}
      </p>
    </div>
  )
}

export default function HeroSection() {
  const textRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const [showLion, setShowLion] = useState(false)

  useEffect(() => {
    // Stagger animation on mount
    const els = [textRef.current, subtitleRef.current, ctaRef.current, statsRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      setTimeout(() => {
        el.style.transition = 'opacity 1s ease, transform 1s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300 + i * 250)
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowLion(true), 700)
    return () => clearTimeout(timer)
  }, [])

  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-elyon-dark">

      {/* LION LOGO DECORATIVE */}
      <div className="absolute inset-y-0 left-0 z-[1] flex items-center pointer-events-none -translate-x-[24%] lg:-translate-x-[36%]">
        <img
          src={lionImg}
          alt="Logo do leão Elyon"
          className={`hidden lg:block w-[64vw] max-w-[760px] min-w-[560px] object-contain object-left transition-all duration-1000 ease-out ${showLion ? 'opacity-15 translate-x-0' : '-translate-x-24 opacity-0'}`}
        />
      </div>

      {/* BACKGROUND: imagem de obra premium com overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
          alt="Obra de alto padrão Elyon"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-elyon-dark via-elyon-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-elyon-dark via-transparent to-elyon-dark/30" />
        {/* Grade arquitetônica */}
        <div className="absolute inset-0 arch-grid opacity-40" />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16 lg:pl-24 xl:pl-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            {/* TÍTULO PRINCIPAL */}
            <div ref={subtitleRef} className="mb-8">
              <div className="overflow-hidden mb-2">
                <h1 className="font-aktiv font-bold leading-none text-[clamp(5rem,14vw,11rem)] text-elyon-gold tracking-tighter">
                  ELYON
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2 className="font-aktiv font-light text-[clamp(1.5rem,4vw,3rem)] text-white/90 tracking-[0.15em] uppercase leading-tight">
                  Construções
                </h2>
              </div>

            

              <p className="font-arimo text-white/60 text-lg leading-relaxed mt-6 max-w-xl">
                Transformamos visões em legados. Cada projeto é conduzido com a precisão técnica
                e o cuidado que a sua conquista merece.
              </p>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-elyon-gold hover:bg-elyon-gold-light text-elyon-dark font-aktiv font-bold text-sm px-8 py-4 tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-elyon-gold/20"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
                Fale com um Especialista
              </a>
              <button
                onClick={() => document.getElementById('obras')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 border border-white/20 hover:border-elyon-gold text-white/70 hover:text-elyon-gold font-arimo text-sm px-8 py-4 tracking-wider uppercase transition-all duration-300"
              >
                Ver Nossas Obras
              </button>
            </div>

            {/* ESTATÍSTICAS COM CONTAGEM ANIMADA */}
            <div ref={statsRef} className="mt-12 flex flex-nowrap gap-16 md:gap-20 items-end">
              <CounterCard targetNumber={2} suffix="" label="Décadas de 
              Experiência" duration={2000} />
              <CounterCard targetNumber={35} suffix=" mil" label="M² de Área 
              Construída" duration={2500} />
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="font-aktiv font-bold text-2xl text-white mb-4">
                  ✓
                </div>
                <p className="font-arimo text-elyon-gold text-xs tracking-wide uppercase text-center">
                  Certificações de<br />Qualidade
                </p>
              </div>
            </div>
            
          </div>

          
        </div>
      </div>

      {/* SETA SCROLL DOWN */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-elyon-gold/50 hover:text-elyon-gold transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
