# Elyon Construções — Site Institucional

Site institucional completo para a Elyon Construções.
**Stack:** React + Vite + Tailwind CSS + Framer Motion + React Router

---

## 🚀 Como rodar o projeto

### 1. Pré-requisitos
- Node.js 18+ instalado ([baixar aqui](https://nodejs.org))
- Um terminal (Prompt de Comando, PowerShell ou VS Code Terminal)

### 2. Instalar dependências

```bash
cd elyon-site
npm install
```

### 3. Rodar em modo desenvolvimento

```bash
npm run dev
```

Acesse: **http://localhost:5173**

### 4. Build para produção

```bash
npm run build
```

Os arquivos serão gerados em `/dist`.

---

## 🎨 Configuração das Fontes (Aktiv Grotesk)

Coloque os arquivos `.woff2` da Aktiv Grotesk em:

```
src/
  assets/
    fonts/
      AktivGrotesk-Regular.woff2
      AktivGrotesk-Medium.woff2
      AktivGrotesk-Bold.woff2
      AktivGrotesk-Light.woff2
```

O `@font-face` já está configurado em `src/index.css`.

> **Enquanto não tiver os arquivos:** O site funcionará normalmente usando Georgia/serif como fallback para títulos.

---

## 📱 Configurar WhatsApp

Substitua o número do WhatsApp em dois arquivos:

1. `src/components/Header.jsx` — linha `const WHATSAPP_NUMBER = '5549999999999'`
2. `src/components/Footer.jsx` — mesma constante
3. `src/components/HeroSection.jsx` — URL inline
4. `src/components/ContactSection.jsx` — mesma constante
5. `src/pages/PortfolioPage.jsx` — constante `WHATSAPP_URL`

> **Dica:** Use buscar e substituir (Ctrl+H no VS Code) por `5549999999999` e troque pelo número real.

---

## 🏗️ Estrutura de Pastas

```
elyon-site/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              ← Entrada React + Router
    ├── index.css             ← Estilos globais + @font-face
    ├── assets/
    │   ├── fonts/            ← Arquivos .woff2 aqui
    │   └── images/           ← Imagens locais (opcional)
    ├── components/
    │   ├── Header.jsx        ← Navbar sticky
    │   ├── Footer.jsx        ← Rodapé
    │   ├── HeroSection.jsx   ← Seção principal (Hero)
    │   ├── ServicesSection.jsx
    │   ├── EssenceSection.jsx
    │   ├── AboutSection.jsx  ← Quem Somos 50/50
    │   ├── WorksSection.jsx  ← Carrossel de obras
    │   ├── FeaturesSection.jsx
    │   └── ContactSection.jsx
    └── pages/
        ├── LandingPage.jsx   ← Página principal (/)
        └── PortfolioPage.jsx ← Portfólio (/portfolio)
```

---

## 🎨 Paleta de Cores

| Nome         | Hex       | Uso                   |
|-------------|-----------|----------------------|
| Azul Navy   | `#1e325c` | Seções, destaques    |
| Dourado     | `#d7b46a` | CTAs, ícones, títulos|
| Preto/Escuro| `#1d1d1b` | Background principal |

---

## 📞 Contato

Ajuste as informações de contato em:
- `src/components/Footer.jsx` — endereço, telefone, e-mail
- `src/components/ContactSection.jsx` — telefone, e-mail

---

## 🚀 Deploy na Vercel

Este projeto já está pronto para publicar como SPA na Vercel.

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Roteamento SPA: configurado em `vercel.json`

Não versionar a pasta `dist/` no repositório.

---

## 🖼️ Trocar imagens

As imagens atuais são do Unsplash (placeholders).
Para trocar, substitua as URLs `https://images.unsplash.com/...` nos componentes
pelo caminho local (`/src/assets/images/foto.jpg`) ou URL definitiva.
