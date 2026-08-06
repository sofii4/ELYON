import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Maximize2, BedDouble, Bath } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppIcon from '../components/WhatsAppIcon'
import devilleImg from '../assets/images/empr/deville1.png'
import marajoImg from '../assets/images/empr/marajo1.png'
import paratiImg from '../assets/images/empr/parati1.png'
import santaMatildeImg from '../assets/images/empr/stamatilde1.png'
import veronaImg from '../assets/images/empr/verona1.png'
import BSImg from '../assets/images/empr/BS.png'
import ELImg from '../assets/images/empr/EL.png'
import KSImg from '../assets/images/empr/KS.png'

const WHATSAPP_URL = `https://wa.me/554934300522?text=${encodeURIComponent('Olá! Tenho interesse em um dos empreendimentos do portfólio Elyon.')}`

const projects = [
  {
    id: 1,
    title: 'Residencial Deville',
    description:
      'O termo Deville vem do modelo Sedan DeVille, um clássico de estilo americano com grandes dimensões. O residencial oferece 32 apartamentos com acabamento em alto padrão, com metragens de 66 m² e 97 m², opções de 2 ou 3 dormitórios (sendo 1 suíte), cozinha e sala integradas, área de serviço, banheiro social, 1 vaga de garagem, além de salão de festas e vagas adicionais para venda.',
    local: 'Bairro La Salle, Xanxerê, SC',
    area: '66 a 97 m²',
    quartos: 2,
    banheiros: 1,
    tipo: 'Predial',
    img: devilleImg,
    status: 'Finalizando',
  },
  {
    id: 2,
    title: 'Residencial Parati',
    description:
      'O termo Parati também remete a tranquilidade e serenidade, conceito que guiou este residencial em uma área calma para famílias. O empreendimento é um condomínio fechado com tipologias variadas: casas geminadas térreas de 50 m², 60 m² e 72 m², sobrados de 93 m² com 2 suítes e uma casa térrea independente de 100 m². O residencial conta com playground, pet play, chima roda, pavimentação em paver, iluminação externa solar, porteiro eletrônico, luz e água individualizadas.',
    local: 'Bairro Primo Tacca, Xanxerê, SC',
    area: '50 a 100 m²',
    quartos: 2,
    banheiros: 1,
    tipo: 'Condomínio Fechado',
    img: paratiImg,
    status: 'Entregue',
  },
  {
    id: 3,
    title: 'Residencial Marajó',
    description:
      'Marajó, alem de significar anteparo do mar em tupi, tambem remete ao clássico brasileiro derivado do Chevette. Os traços desse queridinho inspiraram a proposta arquitetônica do residencial, reforcando sua exclusividade. O projeto possui 5 casas geminadas térreas de aproximadamente 51,5 m², com 2 quartos, cozinha e sala integradas, área de serviço, banheiro social, quintal externo, vaga de garagem, laje e pavimentação asfáltica.',
    local: 'Próximo ao Hiper Badotti, Xanxerê, SC',
    area: '51,5 m²',
    quartos: 2,
    banheiros: 1,
    tipo: 'Condomínio',
    img: marajoImg,
    status: 'Entregue',
  },
  {
    id: 4,
    title: 'Residencial Santa Matilde',
    description:
      'Santa Matilde faz referencia a um carro brasileiro marcante, simbolo de desempenho e beleza, e tambem carrega o significado de força na batalha. O residencial conta com 34 apartamentos no Bairro Nossa Senhora de Lourdes, com área privativa de aproximadamente 41,2179 m² e área total de 55,0335 m², com 2 dormitórios, cozinha e sala integradas, área de serviço, banheiro social, ponto de gás para churrasqueira e vaga de estacionamento. O empreendimento ainda oferece playground, salão de festas, elevador e pavimentação de calçamento.',
    local: 'Bairro Nossa Senhora de Lourdes, Xanxerê, SC',
    area: '41,2 m² privativos',
    quartos: 2,
    banheiros: 1,
    tipo: 'Predial',
    img: santaMatildeImg,
    status: 'Entregue',
  },
  {
    id: 5,
    title: 'Residencial Verona',
    description:
      'O nome Verona inspira os traços da formação arquitetônica do residencial e reforçam sua exclusividade. O projeto possui 2 pavimentos, porcelanato 60x60, portas laqueadas, aberturas com vidro laminado, encanamento preparado para água quente, espera para climatizador, acabamento elétrico de alto padrão, ótima localização, pavimentação asfáltica e área de lazer.',
    local: 'Bairro São Jorge, Xanxerê, SC',
    area: '2 pavimentos',
    quartos: 1,
    banheiros: 1,
    tipo: 'Condomínio',
    img: veronaImg,
    status: 'Entregue',
  },
  {
    id: 6,
    title: 'Casa BS',
    description:
      'Uma residência contemporânea de alto padrão com volumetria marcante e linhas imponentes. O projeto prioriza a integração fluida dos ambientes sociais, iluminação natural valorizada e acabamentos de extrema sofisticação.',
    tipo: 'Casa',
    img: BSImg,
    status: 'Em Andamento',
  },
  {
    id: 7,
    title: 'Casa EL',
    description:
      'Projeto residencial exclusivo que combina arquitetura moderna e funcionalidade. Com design elegante e privacidade para a família, a obra destaca materiais nobres e integração perfeita entre área interna e externa.',
    tipo: 'Casa',
    img: ELImg,
    status: 'Em Andamento',
  },
  {
    id: 8,
    title: 'Casa KS',
    description:
      'Casa de altíssimo padrão com proposta arquitetônica limpa e imponente. Planejada em cada detalhe para oferecer máximo conforto térmico e acústico, tecnologia e estética atemporal.',
    tipo: 'Casa',
    img: KSImg,
    status: 'Em Andamento',
  },
]

function ProjectCard({ project, reverse }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Verifica se o projeto possui ao menos uma especificação cadastrada
  const hasSpecs = project.local || project.area || project.quartos || project.banheiros

  return (
    <div
      ref={ref}
      className={`reveal grid grid-cols-1 lg:grid-cols-2 min-h-[520px] ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      {/* IMAGEM */}
      <div className="relative overflow-hidden h-72 lg:h-auto group">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-elyon-dark/60 to-transparent lg:bg-none" />
        {/* Status badge */}
        <div className="absolute top-6 left-6 font-aktiv font-bold text-xs tracking-[0.3em] text-elyon-gold border border-elyon-gold/40 bg-elyon-dark/60 backdrop-blur-sm px-4 py-2 uppercase">
          {project.status}
        </div>
      </div>

      {/* TEXTO */}
      <div className="flex items-center bg-elyon-dark-2 px-8 md:px-14 py-12 lg:py-16 border border-elyon-gold/5">
        <div>
          {/* Tipo */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-elyon-gold" />
            <span className="font-arimo text-elyon-gold text-xs tracking-[0.3em] uppercase">{project.tipo}</span>
          </div>

          <h3 className="font-aktiv font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="font-arimo text-white/55 leading-relaxed mb-8 text-base">
            {project.description}
          </p>

          {/* Especificações Renderizadas Condicionalmente */}
          {hasSpecs && (
            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.local && (
                <div className="flex items-center gap-3 text-white/50">
                  <MapPin size={15} className="text-elyon-gold flex-shrink-0" />
                  <span className="font-arimo text-sm">{project.local}</span>
                </div>
              )}
              {project.area && (
                <div className="flex items-center gap-3 text-white/50">
                  <Maximize2 size={15} className="text-elyon-gold flex-shrink-0" />
                  <span className="font-arimo text-sm">{project.area}</span>
                </div>
              )}
              {project.quartos > 0 && (
                <div className="flex items-center gap-3 text-white/50">
                  <BedDouble size={15} className="text-elyon-gold flex-shrink-0" />
                  <span className="font-arimo text-sm">{project.quartos} quartos</span>
                </div>
              )}
              {project.banheiros > 0 && (
                <div className="flex items-center gap-3 text-white/50">
                  <Bath size={15} className="text-elyon-gold flex-shrink-0" />
                  <span className="font-arimo text-sm">{project.banheiros} banheiros</span>
                </div>
              )}
            </div>
          )}

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-elyon-gold/30 hover:border-elyon-gold hover:bg-elyon-gold hover:text-elyon-dark text-elyon-gold font-arimo text-xs px-6 py-3 tracking-widest uppercase transition-all duration-300"
          >
            <WhatsAppIcon className="w-[14px] h-[14px]" />
            Tenho interesse
          </a>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  // Scroll para o topo ao entrar na página
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <Header />
      <main className="bg-elyon-dark min-h-screen">

        {/* HERO DO PORTFOLIO */}
        <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 arch-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-elyon-navy/30 to-transparent" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-elyon-gold/60 hover:text-elyon-gold font-arimo text-sm tracking-widest uppercase transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              Voltar ao site
            </Link>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-px bg-elyon-gold/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-elyon-gold" />
              <span className="w-12 h-px bg-elyon-gold/40" />
            </div>

            <h1 className="font-aktiv font-bold text-5xl md:text-7xl text-white mb-6">
              Portfólio <span className="text-elyon-gold">Completo</span>
            </h1>
            <p className="font-arimo text-white/55 text-xl leading-relaxed">
              Cada projeto é a prova do nosso compromisso com a excelência.
              Conheça os empreendimentos que definem o padrão Elyon.
            </p>
          </div>
        </div>

        {/* PROJETOS */}
        <div className="divide-y divide-elyon-gold/5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>

        {/* SEÇÃO CTA FINAL */}
        <div className="py-24 px-6 text-center bg-elyon-dark-2 relative overflow-hidden">
          <div className="absolute inset-0 arch-grid opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-aktiv font-bold text-4xl text-white mb-4">
              Pronto para o seu <span className="text-elyon-gold">próximo projeto?</span>
            </h2>
            <p className="font-arimo text-white/50 mb-8 text-lg">
              Fale com nossa equipe e descubra como a Elyon pode transformar a sua ideia em realidade.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-elyon-gold hover:bg-elyon-gold-light text-elyon-dark font-aktiv font-bold px-8 py-4 tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-elyon-gold/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Falar com a Elyon
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}