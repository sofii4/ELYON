import { useEffect, useRef } from 'react'
import minhaImagem from '../assets/images/casal2.png';

export default function AboutSection() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (leftRef.current)  observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="quem-somos" className="py-0 bg-elyon-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

        {/* ESQUERDA — Foto dos sócios */}
        <div
          ref={leftRef}
          className="reveal-left relative overflow-hidden h-[500px] lg:h-auto"
        >
          <img
            src={minhaImagem}
            alt="Sócios da Elyon Construções"
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-elyon-dark/60" />
          {/* Badge de credibilidade */}
          
        </div>

        {/* DIREITA — Texto */}
        <div
          ref={rightRef}
          className="reveal-right flex items-center bg-elyon-dark-2 px-10 md:px-16 py-16 lg:py-24"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-elyon-gold" />
              <span className="font-arimo text-elyon-gold text-xs tracking-[0.4em] uppercase">
                Nossa história
              </span>
            </div>

            <h2 className="font-aktiv font-bold text-4xl md:text-5xl text-white leading-tight mb-8">
              Quem <span className="text-elyon-gold">Somos</span>
            </h2>

            {/* Carta manifesto */}
            <div className="space-y-4 font-arimo text-white/65 leading-relaxed">
              <p>
                A Elyon Construções nasceu da união de profissionais apaixonados pelo ofício de construir.
                Somos uma família que encontrou na construção civil não apenas uma profissão,
                mas um propósito: transformar projetos em realidade com responsabilidade e excelência.
              </p>
              <p>
                Ao longo de mais de duas décadas, aprendemos que cada obra carrega uma história única.
                Por trás de cada metro quadrado há um sonho, um plano de vida, uma conquista que
                levou anos de dedicação para se tornar possível.
              </p>
              <p>
                É por isso que nos recusamos a encarar a construção como um produto de prateleira.
                Para nós, cada projeto é tratado com a seriedade e o cuidado que a sua conquista
                merece — do primeiro risco no papel à entrega das chaves.
              </p>
              <p className="text-elyon-gold/80 font-medium italic">
                Construímos com as mãos, mas principalmente com o coração.
                Elyon — o mais elevado padrão, em tudo que fazemos.
              </p>
            </div>

            {/* Assinatura decorativa */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-elyon-gold/20" />
              <span className="font-aktiv text-elyon-gold text-sm tracking-[0.3em] uppercase">
                Família Elyon
              </span>
              <div className="h-px flex-1 bg-elyon-gold/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
