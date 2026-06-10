import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import devilleImg from '../assets/images/empr/deville1.png'
import marajoImg from '../assets/images/empr/marajo1.png'
import paratiImg from '../assets/images/empr/parati1.png'
import santaMatildeImg from '../assets/images/empr/stamatilde1.png'
import veronaImg from '../assets/images/empr/verona1.png'

const obras = [
  {
    id: 1,
    title: 'Deville',
    tipo: 'Residencial',
    img: devilleImg,
  },
  {
    id: 2,
    title: 'Parati',
    tipo: 'Residencial',
    img: paratiImg,
  },
  {
    id: 3,
    title: 'Marajó',
    tipo: 'Residencial',
    img: marajoImg,
  },
  {
    id: 4,
    title: 'Santa Matilde',
    tipo: 'Residencial',
    img: santaMatildeImg,
  },
  {
    id: 5,
    title: 'Verona',
    tipo: 'Residencial',
    img: veronaImg,
  },
  {
    id: 6,
    title: 'Casa Bruno',
    tipo: 'Projeto',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Casa Karina',
    tipo: 'Projeto',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Casa Eleandro',
    tipo: 'Projeto',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Casa Charlene',
    tipo: 'Projeto',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Casa Mônica',
    tipo: 'Projeto',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'El Dorado',
    tipo: 'Vem Aí!',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format&fit=crop',
  },
]

// Duplica para carrossel infinito
const obrasLoop = [...obras, ...obras]

function ObrasCard({ obra }) {
  return (
    <div className="flex-shrink-0 w-72 md:w-80 relative group overflow-hidden">
      <div className="aspect-[4/5] overflow-hidden bg-elyon-dark/80">
        <img
          src={obra.img}
          alt={obra.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {/* Overlay hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-elyon-dark via-elyon-dark/10 to-transparent opacity-90" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="font-arimo text-elyon-gold text-xs tracking-widest uppercase mb-1">
          {obra.tipo}
        </div>
        <h3 className="font-aktiv font-bold text-white text-lg">{obra.title}</h3>
        <div className="h-px w-0 group-hover:w-full bg-elyon-gold transition-all duration-500 mt-3" />
      </div>
    </div>
  )
}

export default function WorksSection() {
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="obras" className="py-28 bg-elyon-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div ref={headerRef} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-elyon-gold" />
              <span className="font-arimo text-elyon-gold text-xs tracking-[0.4em] uppercase">Portfólio</span>
            </div>
            <h2 className="font-aktiv font-bold text-4xl md:text-5xl text-white">
              Conheça nossas <span className="text-elyon-gold">Obras</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group flex items-center gap-3 border border-elyon-gold/30 hover:border-elyon-gold text-elyon-gold font-arimo text-sm px-6 py-3 tracking-wider uppercase transition-all duration-300 hover:bg-elyon-gold hover:text-elyon-dark self-start md:self-auto"
          >
            Ver portfólio completo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* CARROSSEL AUTO-SCROLL */}
      <div className="relative">
        {/* Fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-elyon-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-elyon-dark to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="carousel-track gap-5 px-6">
            {obrasLoop.map((obra, i) => (
              <ObrasCard key={`${obra.id}-${i}`} obra={obra} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
