import {
  ShieldCheck,
  Search,
  Construction,
  Layout,
  Hammer,
  MessageCircle,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Zap,
  ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// SEO Config
const SEO_CONFIG = {
  title: "MDR Engenharia e Construção | Excelência em Construção, Reformas e Segurança",
  description: "MDR Engenharia: há mais de 10 anos transformando ideias em resultados concretos. Especialistas em construção civil, reformas, regularização e segurança eletrônica.",
};

const Logo = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative flex flex-col items-start">
      <svg width="45" height="25" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-[-2px]">
        <path d="M15 45 L50 15 L70 35 L70 20 L80 20 L80 43 L105 60" stroke="var(--brand-accent)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 50 L110 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col">
        <span className="font-black text-xl tracking-tighter leading-none">MDR <span className="text-[var(--brand-accent)]">ENGENHARIA</span></span>
        <div className="flex items-center gap-1">
          <div className="h-[1.5px] w-3 bg-[var(--brand-accent)]"></div>
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-50">E Construção</span>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Temporariamente: modo escuro desativado, mantendo apenas o tema claro.
  const darkMode = false;

  useEffect(() => {
    document.title = SEO_CONFIG.title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', SEO_CONFIG.description);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5562984279654";
  const contactInfo = {
    phones: ["62 98427-9654", "62 99311-1770"],
    email: "comercial@mdrengenharia.com.br",
    instagram: "@mdrengenharia_",
    location: "Goiânia, Goiás"
  };
  const contactPhones = [
    { label: contactInfo.phones[0], href: "tel:+5562984279654" },
    { label: contactInfo.phones[1], href: "tel:+5562993111770" }
  ];

  const navLinks = [
    { name: 'Empresa', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Clientes', href: '#clientes' },
  ];

  const clients = [
    "UFG", "Realiza Construtora", "Vigor", "Sesc", "Jardim Tropical", "Conexão", "Melcon", "Ara-Fix",
    "Bio Instinto", "Brasil Park Shopping", "Telgo Telecom", "Grand Tropical", "Colégio Nexus",
    "HEG Hospital", "Premiere Park", "Constat", "Mendez", "Allbox", "Sabor & Arte", "Sunflower",
    "Bretas", "Irmãos Soares", "Linea"
  ];

  return (
    <div
      data-theme="light"
      className={`min-h-screen transition-colors duration-500 font-sans selection:bg-[var(--brand-accent)] ${darkMode ? 'bg-[#080808] text-white' : 'bg-[#fcfcfc] text-black'}`}
    >
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? (darkMode ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-white/80 backdrop-blur-md border-b border-black/5') : 'bg-transparent'} py-4`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[var(--brand-accent-soft)] transition-colors ${darkMode ? 'text-white/70' : 'text-black/70'}`}>{link.name}</a>
            ))}

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[var(--brand-accent-strong)] px-7 py-3 rounded-sm text-[10px] font-black tracking-[0.2em] hover:bg-[var(--brand-accent)] transition-all uppercase text-white">Falar com Especialista</a>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className={`fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 p-8 md:hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-black tracking-tighter uppercase">{link.name}</a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-[var(--brand-accent-strong)] py-6 rounded-2xl text-center font-black text-xl text-white"
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section - Page 1 */}
        <section className={`relative min-h-[90vh] flex items-center pt-32 overflow-hidden ${darkMode ? 'bg-black' : 'bg-[#f5f5f5]'}`}>
          <div className="absolute inset-0 z-0 opacity-80">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1920"
              className="w-full h-full object-cover"
              alt="Background Obras"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 ${darkMode ? 'bg-linear-to-b from-black via-black/80 to-black' : 'bg-linear-to-b from-white via-white/80 to-[#f5f5f5]'}`}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-12 bg-[var(--brand-accent)]"></div>
                <span className="text-[var(--brand-accent-soft)] text-[10px] font-black uppercase tracking-[0.5em]">Excelência em Serviços</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 uppercase">
                MDR ENGENHARIA<br />
                <span className="text-[var(--brand-accent)] italic">E CONSTRUÇÃO</span>
              </h1>
              <p className={`text-xl max-w-xl mb-12 font-light leading-relaxed ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                Há mais de 10 anos transformando ambientes com solidez, transparência e tecnologia.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href={whatsappLink} className="bg-[var(--brand-accent-strong)] text-white px-12 py-6 rounded-sm font-black text-xs tracking-widest uppercase hover:bg-[var(--brand-accent)] transition-all flex items-center justify-center gap-3">
                  Solicitar Proposta <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sobre a Empresa - Page 2 */}
        <section id="sobre" className={`py-16 md:py-32 ${darkMode ? 'bg-[#080808]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-10 md:mb-16 uppercase tracking-tighter italic">Sobre nossa <span className="text-[var(--brand-accent)]">Empresa</span></h2>
                <div className="grid gap-8">
                  {[
                    { title: "Missão", content: "Executar obras com excelência técnica e planejamento, valorizando a qualidade, o prazo e a satisfação do cliente." },
                    { title: "Visão", content: "Construir cada projeto com transparência, qualidade e respeito, entregando sempre excelência em cada serviço." },
                    { title: "Valores", content: "Fazer o que é certo, excelência, transparência, segurança, responsabilidade." }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      className="group"
                    >
                      <h3 className="text-2xl font-bold mb-4 border-b-2 border-[var(--brand-accent)] pb-2 inline-block transition-all group-hover:pr-10">{item.title}</h3>
                      <p className={`text-lg leading-relaxed ${darkMode ? 'text-white/50' : 'text-black/50'}`}>{item.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <div className={`aspect-[4/5] rounded-sm overflow-hidden border shadow-2xl ${darkMode ? 'border-white/5' : 'border-black/5'}`}>
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
                    alt="Capacete e Plantas"
                    className={`w-full h-full object-cover transition-all duration-700 ${darkMode ? 'grayscale hover:grayscale-0' : 'hover:scale-105'}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-[var(--brand-accent-strong)] p-8 md:p-12 text-white shadow-2xl">
                  <div className="text-4xl md:text-5xl font-black mb-1">10+</div>
                  <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-70">Anos de Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem Somos - Page 3 */}
        <section className={`py-16 md:py-32 border-y ${darkMode ? 'border-white/5 bg-black' : 'border-black/5 bg-[#fcfcfc]'}`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-8 md:mb-12 uppercase tracking-tighter italic">Quem <span className="text-[var(--brand-accent)]">Somos</span></h2>
            <div className={`space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
              <p>
                A MDR Engenharia é uma empresa especializada há mais de 10 anos em soluções integradas de construção civil, reformas e segurança eletrônica, atuando com foco em qualidade, segurança e planejamento em cada etapa do projeto.
              </p>
              <p>
                Nosso compromisso é transformar ideias em resultados concretos, oferecendo serviços completos que vão do planejamento e execução da obra até regularização, consultoria e sistemas de segurança eletrônica, sempre com acompanhamento técnico e transparência total.
              </p>
              <p>
                Cada projeto é conduzido com responsabilidade e atenção aos detalhes, garantindo ao cliente tranquilidade, cumprimento de prazos e excelência nos resultados, unindo eficiência construtiva, proteção e valorização do patrimônio em soluções integradas.
              </p>
            </div>
          </div>
        </section>

        {/* Escopo de Serviços - Page 4, 5, 6 */}
        <section id="servicos" className={`py-16 md:py-32 ${darkMode ? 'bg-[#080808]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-xs md:text-sm font-bold text-[var(--brand-accent-soft)] uppercase tracking-[0.5em] mb-4 md:mb-6">Nosso Portfólio</h2>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic">Escopo de <span className="text-[var(--brand-accent)]">Serviços</span></h3>
            </div>

            {/* Construção e Reformas / Regularização e Consultoria / Gerenciamento de Obras */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16 md:mb-24">
              {[
                {
                  title: "Construção e Reformas",
                  icon: Construction,
                  description: "Obras executadas com planejamento, acompanhamento técnico e foco em qualidade, prazo e organização.",
                  items: [
                    "Construção residencial",
                    "Construção comercial",
                    "Ampliações",
                    "Execução de obras",
                    "Retrofit",
                    "Modernização de ambientes",
                    "Revitalização de imóveis",
                    "Gerenciamento de obras"
                  ]
                },
                {
                  title: "Regularização e Consultoria",
                  icon: Search,
                  description: "Soluções técnicas para adequação, regularização e acompanhamento profissional de obras e imóveis.",
                  items: [
                    "Laudos técnicos",
                    "ART",
                    "Vistorias",
                    "Consultoria técnica",
                    "Regularização de imóveis"
                  ]
                },
                {
                  title: "Gerenciamento de Obras",
                  icon: Layout,
                  description: "Gerenciamento eficiente para garantir organização, controle e qualidade em todas as etapas da obra.",
                  items: [
                    "Planejamento",
                    "Cronograma de execução",
                    "Fiscalização de obra",
                    "Controle de qualidade",
                    "Gestão de fornecedores",
                    "Acompanhamento técnico"
                  ]
                }
              ].map((s, i) => (
                <div key={i} className={`p-8 md:p-10 border rounded-sm transition-all ${darkMode ? 'bg-zinc-900 border-white/5 hover:border-[var(--brand-accent)]' : 'bg-gray-50 border-black/5 hover:border-[var(--brand-accent)] hover:bg-white hover:shadow-xl'}`}>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 flex items-center gap-4">
                    <s.icon className="text-[var(--brand-accent)]" size={28} />
                    {s.title}
                  </h4>
                  <p className={`text-sm leading-relaxed mb-8 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>{s.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
                    {s.items.map((item, idx) => (
                      <li key={idx} className={`text-sm flex items-start gap-3 ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                        <CheckCircle2 size={14} className="text-[var(--brand-accent)] mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Solução Completa + Segurança Eletrônica */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="relative overflow-hidden rounded-sm border border-[var(--brand-accent)] bg-[var(--brand-accent-strong)] text-white p-10 md:p-12 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <Hammer size={28} className="opacity-90" />
                  <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Solução Completa</h4>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  Além da construção ou reforma, a MDR também entrega o imóvel preparado com soluções em segurança eletrônica, proporcionando mais praticidade, proteção e valorização do patrimônio.
                </p>
                <div className="mt-10">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white text-[var(--brand-accent-strong)] px-10 py-5 rounded-sm font-black text-[10px] md:text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all"
                  >
                    Solicitar atendimento <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className={`p-10 md:p-12 border rounded-sm relative overflow-hidden group ${darkMode ? 'bg-zinc-900 border-white/5' : 'bg-gray-50 border-black/5'}`}>
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-4 relative z-10">
                  <ShieldCheck className="text-[var(--brand-accent)]" size={32} />
                  Segurança Eletrônica
                </h4>
                <p className={`text-sm leading-relaxed mb-8 relative z-10 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>
                  Integração de soluções em segurança para residências, empresas e condomínios.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 relative z-10">
                  {[
                    "CFTV",
                    "Alarmes",
                    "Controle de acesso",
                    "Cerca elétrica",
                    "Vídeo porteiro",
                    "Automação",
                    "Monitoramento"
                  ].map((text, i) => (
                    <li key={i} className={`flex items-center gap-4 ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais - Page 7 */}
        <section id="diferenciais" className={`py-16 md:py-32 ${darkMode ? 'bg-black' : 'bg-[#fcfcfc]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
              <div>
                <h2 className="text-xs md:text-sm font-bold text-[var(--brand-accent-soft)] uppercase tracking-[0.5em] mb-6 md:mb-10">Qualidade Garantida</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8 md:mb-12">
                  DIFERENCIAIS MDR<br /><span className="text-[var(--brand-accent)]">ENGENHARIA</span>
                </h3>
                <div className="space-y-10">
                  {[
                    { t: "Planejamento e transparência", d: "O cliente acompanha cada etapa da obra com clareza." },
                    { t: "Acompanhamento técnico constante", d: "Supervisão por profissional habilitado em todas as execuções." },
                    { t: "Comprometimento com prazos e qualidade", d: "Foco total na entrega dentro do cronograma combinado." },
                    { t: "Comunicação direta e humanizada", d: "Atendimento ágil e acompanhamento próximo de cada cliente." },
                    { t: "Equipe qualificada e confiável", d: "Profissionais experientes em cada área de atuação." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="shrink-0 w-12 h-12 rounded-full border border-[var(--brand-accent)] flex items-center justify-center text-[var(--brand-accent)] font-black">
                        <CheckCircle2 size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                        <p className={darkMode ? 'text-white/40' : 'text-black/40'}>{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden min-h-[300px] h-[400px] lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
                  alt="Tecnologia e Engenharia"
                  className={`absolute inset-0 w-full h-full object-cover grayscale opacity-50 ${darkMode ? 'invert-0' : 'invert'}`}
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 ${darkMode ? 'bg-linear-to-r from-black via-black/40 to-transparent lg:from-black lg:to-transparent' : 'bg-linear-to-r from-[#fcfcfc] via-[#fcfcfc]/40 to-transparent lg:from-[#fcfcfc] lg:to-transparent'}`}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Segmentos Atendidos - Page 8 */}
        <section className={`py-16 md:py-32 border-y ${darkMode ? 'bg-[#080808] border-white/5' : 'bg-white border-black/5'}`}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-12 md:mb-20 uppercase tracking-tighter italic">Segmentos <span className="text-[var(--brand-accent)]">Atendidos</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {[
                { label: "Obras Residenciais", icon: Layout },
                { label: "Obras Comerciais", icon: Hammer },
                { label: "Manutenções em Geral", icon: Construction },
                { label: "Execuções por Etapas", icon: Zap },
                { label: "Segurança Eletrônica", icon: ShieldCheck },
                { label: "Regularização de Imóveis", icon: Search }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className={`w-20 h-20 mx-auto rounded-full border flex items-center justify-center mb-6 group-hover:bg-[var(--brand-accent-strong)] transition-colors ${darkMode ? 'bg-zinc-900 border-white/5' : 'bg-gray-100 border-black/5'}`}>
                    <item.icon size={32} className="text-[var(--brand-accent)] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest leading-relaxed block">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clientes - Page 9 */}
        <section id="clientes" className={`py-16 md:py-32 ${darkMode ? 'bg-black' : 'bg-[#fcfcfc]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className={`text-center text-[10px] font-bold uppercase tracking-[0.8em] mb-12 md:mb-20 ${darkMode ? 'text-white/30' : 'text-black/30'}`}>Alguns de nossos clientes:</h2>
            <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center grayscale hover:grayscale-0 transition-all duration-700 ${darkMode ? 'opacity-40 hover:opacity-100' : 'opacity-60 hover:opacity-100'}`}>
              {clients.map((c, i) => (
                <div key={i} className="text-center font-black text-xs hover:scale-110 transition-transform cursor-default">
                  {c.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / Contato - Page 10 */}
        <footer className={`py-16 md:py-32 relative border-t ${darkMode ? 'bg-black border-white/5' : 'bg-white border-black/5'}`}>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
              <div>
                <Logo className="mb-10 md:mb-12" />
                <h4 className="text-4xl md:text-5xl font-black mb-10 md:mb-12 uppercase tracking-tighter italic">Fale com a <span className="text-[var(--brand-accent)]">Gente!</span></h4>
                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                      <Phone className="text-[var(--brand-accent)]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      {contactPhones.map((p, i) => (
                        <a
                          key={i}
                          href={p.href}
                          className={`text-xl md:text-2xl font-black leading-tight hover:text-[var(--brand-accent)] transition-colors ${darkMode ? 'text-white' : 'text-black'}`}
                        >
                          {p.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                      <Search className="text-[var(--brand-accent)]" size={20} />
                    </div>
                    <span className="text-md font-bold break-all">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                      <Instagram className="text-[var(--brand-accent)]" size={20} />
                    </div>
                    <span className="text-md font-bold">{contactInfo.instagram}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
                      <Layout className="text-[var(--brand-accent)]" size={20} />
                    </div>
                    <span className="text-md font-bold">{contactInfo.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end mt-8 lg:mt-0">
                <div className="p-8 md:p-12 bg-[var(--brand-accent)] rounded-sm">
                  <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 italic uppercase text-white">Pronto para começar seu projeto?</h2>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-[var(--brand-accent)] px-4 md:px-12 py-5 md:py-6 rounded-sm font-black text-center block hover:bg-black hover:text-white transition-all uppercase tracking-widest text-[10px] md:text-xs">
                    Falar com Especialista
                  </a>
                </div>
                <p className={`mt-12 text-[10px] font-bold uppercase tracking-[0.4em] ${darkMode ? 'text-white/20' : 'text-black/20'}`}>© MDR ENGENHARIA E CONSTRUÇÃO. EXCELÊNCIA EM SERVIÇOS.</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-50 p-3 md:p-4 bg-[var(--brand-accent)] text-white rounded-full shadow-2xl hover:bg-[var(--brand-accent-strong)] transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </main>
    </div>
  );
}
