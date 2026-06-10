import { Link } from 'react-router-dom'
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react'
import logoImg from '../assets/images/dourado.png'
import WhatsAppIcon from './WhatsAppIcon'

const WHATSAPP_NUMBER = '554934300522'
const WHATSAPP_MSG = encodeURIComponent('Olá! Vim pelo site da Elyon Construções e gostaria de mais informações.')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

export default function Footer() {
  return (
    <footer className="bg-elyon-dark border-t border-elyon-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LOGO + SLOGAN */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src={logoImg} alt="Elyon Construções" className="h-20 w-auto object-contain mb-4" />
            </div>
            <p className="font-arimo text-white/50 text-sm leading-relaxed">
              Construindo legados com excelência, precisão e propósito. Elyon — o mais elevado padrão.
            </p>
            {/* Redes sociais */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/elyonconstrucoes.oficial/', label: 'Instagram' },
                { icon: Facebook,  href: 'https://www.facebook.com/geaemp',  label: 'Facebook'  },
                { icon: Mail, href: 'mailto:elyon.controladoria@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-elyon-gold/20 flex items-center justify-center text-elyon-gold/50 hover:text-elyon-gold hover:border-elyon-gold transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h4 className="font-aktiv font-bold text-elyon-gold text-xs tracking-[0.3em] uppercase mb-5">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Serviços',         href: '/#servicos'  },
                { label: 'Nossa Essência',   href: '/#essencia'  },
                { label: 'Quem Somos',       href: '/#quem-somos'},
                { label: 'Nossas Obras',     href: '/#obras'     },
                { label: 'Portfólio',        href: '/portfolio'  },
                { label: 'Contato',          href: '/#contato'   },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="font-arimo text-sm text-white/50 hover:text-elyon-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="font-aktiv font-bold text-elyon-gold text-xs tracking-[0.3em] uppercase mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-elyon-gold mt-0.5 flex-shrink-0" />
                <span className="font-arimo text-sm text-white/50">Xanxerê, Santa Catarina — Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-elyon-gold flex-shrink-0" />
                <a href={`tel:${WHATSAPP_NUMBER}`} className="font-arimo text-sm text-white/50 hover:text-elyon-gold transition-colors">
                  (49) 49 3430 0522
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-elyon-gold flex-shrink-0" />
                <a href="mailto:contato@elyonconstrucoes.com.br" className="font-arimo text-sm text-white/50 hover:text-elyon-gold transition-colors">
                  elyon.controladoria@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* WHATSAPP CTA */}
          <div>
            <h4 className="font-aktiv font-bold text-elyon-gold text-xs tracking-[0.3em] uppercase mb-5">Fale Conosco</h4>
            <p className="font-arimo text-sm text-white/50 mb-5 leading-relaxed">
              Pronto para começar seu projeto? Nossa equipe está à sua disposição.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-elyon-gold hover:bg-elyon-gold-light text-elyon-dark font-aktiv font-bold text-xs px-5 py-3 tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* DIVISOR + COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-elyon-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-arimo text-xs text-white/30">
            © {new Date().getFullYear()} Elyon Construções. Todos os direitos reservados.
          </p>
          <p className="font-arimo text-xs text-white/30">
            CNPJ: 24.777.947./0001-71
          </p>
        </div>
      </div>
    </footer>
  )
}
