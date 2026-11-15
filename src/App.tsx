import { useEffect, useState } from 'react'
import coverImage from './assets/coverimage.png'
import logoImage from './assets/logo.png'
import panoramicView from './assets/vuepanoramique.png'
import galleryLeft from './assets/galerie1.png'
import galleryRight from './assets/galerie2.png'
import interiorNook from './assets/vue intreur/frame_012.jpg'
import interiorLights from './assets/vue intreur/frame_018.jpg'
import menuCoffee from './assets/consomation/café glacer.png'
import menuBreakfast from './assets/consomation/petitdejener.jpg'
import menuSeafood from './assets/consomation/fruit de mere.png'
import menuDessert from './assets/consomation/sucrée.png'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Coffee, Heart, MapPin, Menu as MenuIcon, MoveRight, Sparkles, UtensilsCrossed, X } from 'lucide-react'

const photos = {
  hero: coverImage,
  about: panoramicView,
  coffee: 'photo-1509042239860-f550ce710b93',
  breakfast: 'photo-1533920379810-6bedac961555',
  food: 'photo-1547592180-85f173990554',
  dessert: 'photo-1578985545062-69928b1d9587',
  interior: panoramicView,
  table: interiorNook,
  lounge: 'photo-1559339352-11d035aa65de',
  detail: interiorLights,
}
const navItems = [['À propos', 'apropos'], ['Menu', 'menu'], ['Galerie', 'galerie'], ['Expérience', 'experience'], ['Contact', 'contact']]
const categories = [
  { title: 'Cafés & boissons', eyebrow: 'LE RITUEL DU CAFÉ', copy: 'Cafés, créations glacées et boissons fraîches.', image: menuCoffee, dishes: [['Café turc', 'Café traditionnel, servi chaud', '4,5 DT'], ['Cappuccino', 'Espresso et mousse de lait', '8 DT'], ['Café glacé', 'Café, lait et glaçons', '10 DT'], ['Citronnade maison', 'Citron frais et menthe', '9 DT'], ['Chocolat chaud', 'Chocolat onctueux', '9 DT'], ['Thé à la menthe', 'Thé vert et menthe fraîche', '5 DT']] },
  { title: 'Petit-déjeuner', eyebrow: 'LES MATINS DOUX', copy: 'Un assortiment gourmand à partager.', image: menuBreakfast, dishes: [['Petit-déjeuner tunisien', 'Œuf, fromage, olives et pain', '18 DT'], ['Pancakes au miel', 'Pancakes moelleux et miel', '16 DT'], ['Toast avocat', 'Pain grillé, avocat et œuf', '19 DT'], ['Brunch Balkon', 'Assortiment salé et sucré', '29 DT'], ['Crêpe au chocolat', 'Crêpe fine et chocolat', '14 DT'], ['Granola maison', 'Yaourt, fruits et granola', '15 DT']] },
  { title: 'Plats & spécialités', eyebrow: 'À TABLE', copy: 'Grillades et suggestions de la mer.', image: menuSeafood, dishes: [['Pâtes aux fruits de mer', 'Sauce tomate et fruits de mer', '34 DT'], ['Poisson grillé', 'Poisson du jour et garniture', '42 DT'], ['Salade César', 'Poulet grillé, parmesan et croûtons', '25 DT'], ['Couscous au poisson', 'Semoule et poisson, façon maison', '38 DT'], ['Escalope panée', 'Escalope dorée et frites', '27 DT'], ['Pâtes crémeuses', 'Sauce crème et champignons', '26 DT']] },
  { title: 'Desserts', eyebrow: 'LA NOTE SUCRÉE', copy: 'Desserts fruités et douceurs chocolatées.', image: menuDessert, dishes: [['Fondant au chocolat', 'Cœur chocolaté, servi tiède', '14 DT'], ['Crêpe aux fruits', 'Fruits frais et coulis', '16 DT'], ['Cheesecake maison', 'Part du jour', '15 DT'], ['Tiramisu', 'Crème mascarpone et café', '14 DT'], ['Salade de fruits', 'Sélection de fruits frais', '12 DT'], ['Crêpe caramel', 'Caramel et éclats de noisette', '13 DT']] },
]
const gallery = [
  { id: galleryLeft, label: 'Le salon et sa lumière chaleureuse', shape: 'gallery-edge' },
  { id: panoramicView, label: 'Une vue panoramique du salon', shape: 'gallery-center-wide' },
  { id: interiorNook, label: 'Un coin salon accueillant', shape: 'gallery-center-detail' },
  { id: galleryRight, label: 'Une autre perspective du salon', shape: 'gallery-edge' },
]
const features = [
  { icon: UtensilsCrossed, title: 'Une cuisine savoureuse', description: 'Une invitation à découvrir et à se retrouver autour de la table.' },
  { icon: Sparkles, title: 'Une ambiance raffinée', description: 'La lumière, les matières et le cadre composent une atmosphère à part.' },
  { icon: Coffee, title: 'Le plaisir de recevoir', description: 'Du premier café aux derniers instants d’une belle soirée.' },
  { icon: Heart, title: 'Des moments à partager', description: 'Une belle adresse pour les petites et grandes occasions.' },
]
function Brand({ small = false }: { small?: boolean }) {
  return <a className={`brand ${small ? 'brand-small' : ''}`} href="#accueil" aria-label="Balkon, accueil">
    <img className="brand-image" src={logoImage} alt="Balkon Café & Restaurant" />
  </a>
}
function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={reduceMotion ? undefined : { opacity: 0, y: 26 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuFilter, setMenuFilter] = useState('Toutes')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowRight') setLightbox(i => i === null ? null : (i + 1) % gallery.length)
      if (event.key === 'ArrowLeft') setLightbox(i => i === null ? null : (i - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [lightbox])
  const closeMenu = () => setMobileOpen(false)
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Balkon+L%27Aouina+Tunis'
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="header-brand" href="#accueil" aria-label="Balkon, accueil"><Brand /></a>
      <nav className="desktop-nav" aria-label="Navigation principale">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a className="header-cta" href="#contact"><span>Nous trouver</span><ArrowUpRight size={15} /></a>
      <button className="menu-toggle" aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? <X /> : <MenuIcon />}</button>
      <AnimatePresence>{mobileOpen && <motion.nav className="mobile-nav" aria-label="Navigation mobile" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>{navItems.map(([label, id], index) => <motion.a key={id} href={`#${id}`} onClick={closeMenu} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.045 }}>{label}<ArrowUpRight size={15} /></motion.a>)}<a className="mobile-find" href="#contact" onClick={closeMenu}>Nous trouver <ArrowUpRight size={15} /></a></motion.nav>}</AnimatePresence>
    </header>

    <main>
      <section id="accueil" className="hero" aria-label="Balkon L’Aouina — Café, restaurant et lounge">
        <div className="hero-photo" style={{ backgroundImage: `url(${photos.hero})` }} /><div className="hero-shade" />
        <div className="hero-inner">
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } } }}>
            <motion.p className="eyebrow" variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}>CAFÉ <span>·</span> RESTAURANT <span>·</span> LOUNGE</motion.p>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>Bien plus qu’un lieu.<br /><em>Un art de vivre.</em></motion.h1>
            <motion.p className="hero-description" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>À L’Aouina, découvrez une adresse singulière<br className="desktop-break" /> où l’on vient pour le cadre et où l’on reste pour l’instant.</motion.p>
            <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
              <a className="button button-gold" href="#menu">Découvrir le menu <ArrowDownRight size={16} /></a>
              <a className="button button-outline" href="#contact">Nous contacter <ArrowUpRight size={15} /></a>
            </motion.div>
          </motion.div>
          <a className="hero-scroll" href="#apropos"><span className="scroll-ring"><ArrowDown size={14} /></span><span>ENTRER DANS L’UNIVERS BALKON</span></a>
          <span className="hero-index">36°51′ N&nbsp;&nbsp; 10°17′ E</span>
        </div>
        <div className="hero-caption"><span>L’AOUINA, TUNIS</span><span className="caption-rule" /><span>CAFÉ · TABLE · LOUNGE</span></div>
      </section>

      <section id="apropos" className="about section-pad">
        <div className="about-ornament" aria-hidden="true" />
        <Reveal className="about-visual"><img src={photos.about} alt="Vue du salon intérieur de Balkon, avec ses tables et ses luminaires" loading="lazy" /><span className="image-tag">LE SALON BALKON</span><span className="visual-number">01 <i /> 04</span></Reveal>
        <Reveal className="about-copy" delay={0.1}><p className="eyebrow">L’ESPRIT BALKON</p><h2>Un lieu pour se retrouver.<br /><em>Un espace pour en profiter.</em></h2><span className="gold-rule" /><p className="body-copy">Il y a des lieux où l’on se retrouve naturellement. Le temps d’un café, autour d’une belle table ou pour prolonger la soirée, Balkon cultive le plaisir des choses simples, dans un cadre pensé pour en profiter.</p><a className="text-link" href="#experience">Découvrir l’expérience <MoveRight size={17} /></a></Reveal>
        <div className="about-stamp"><span>UN MOMENT</span><span>À VOTRE</span><span>IMAGE <i>✳</i></span></div>
      </section>

      <section id="menu" className="menu-section section-pad">
        <Reveal className="section-heading"><div><p className="eyebrow">À LA CARTE</p><h2>À chaque moment,<br /><em>son plaisir.</em></h2></div><div className="heading-aside"><span className="gold-rule" /><p>Une table à partager.<br />Une carte à découvrir.</p></div></Reveal>
        <div className="menu-grid">{categories.map((item, i) => <Reveal className="menu-card-wrap" key={item.title} delay={i * 0.075}><button className="menu-card" type="button" onClick={() => setMenuOpen(true)} aria-label={`Ouvrir la carte complète : ${item.title}`}><img src={item.image} alt={item.title} loading="lazy" /><span className="menu-card-shade" /><span className="menu-card-num">0{i + 1} / 04</span><span className="menu-card-copy"><span className="menu-card-eyebrow">{item.eyebrow}</span><span className="menu-card-bottom"><span><strong>{item.title}</strong><small>{item.copy}</small></span><span className="round-arrow"><ArrowUpRight size={16} /></span></span></span></button></Reveal>)}</div>
        <p className="menu-note">Touchez une catégorie pour consulter la carte complète.</p>
      </section>

      <section id="galerie" className="gallery-section section-pad"><Reveal className="section-heading gallery-heading"><div><p className="eyebrow">EN IMAGES</p><h2>Un lieu, mille<br /><em>façons d’en profiter.</em></h2></div><p className="gallery-hint">Quelques instants chez Balkon<br /><span>Une invitation à découvrir la suite.</span></p></Reveal>
        <div className="gallery-grid">{gallery.map((item, index) => <Reveal className={item.shape} key={item.id} delay={index * 0.07}><button className="gallery-tile" onClick={() => setLightbox(index)} aria-label={`Agrandir la photo : ${item.label}`}><img src={item.id} alt={item.label} loading="lazy" /><span className="gallery-hover"><span>{item.label}</span><span className="gallery-open"><ArrowUpRight size={18} /></span></span></button></Reveal>)}</div>
        <div className="gallery-bottom"><span>UN APERÇU DE L’UNIVERS BALKON</span><span className="caption-rule" /><span>01 — 04</span></div>
      </section>

      <section id="experience" className="experience"><div className="experience-top section-pad"><div><p className="eyebrow">L’EXPÉRIENCE BALKON</p><h2>Le plaisir de se sentir<br /><em>à sa place.</em></h2></div><p className="experience-intro">Des retrouvailles autour d’un café,<br />un déjeuner qui s’éternise, une soirée<br />qui mérite qu’on la prolonge.</p></div><div className="feature-grid section-pad">{features.map(({ icon: Icon, title, description }, index) => <Reveal className="feature" key={title} delay={index * 0.06}><span className="feature-number">0{index + 1}</span><span className="feature-icon"><Icon size={22} strokeWidth={1.3} /></span><h3>{title}</h3><p>{description}</p></Reveal>)}</div></section>

        <section id="contact" className="contact-section section-pad"><Reveal className="contact-panel"><div className="contact-copy"><p className="eyebrow">VOTRE PROCHAINE ESCALE</p><h2>Le bonheur<br />est <em>juste là.</em></h2><p>Venez découvrir Balkon à L’Aouina, Tunis.<br />Pour toute question, consultez l’itinéraire<br />et retrouvez l’établissement sur la carte.</p><div className="contact-buttons"><a className="button button-gold" href={mapsUrl} target="_blank" rel="noreferrer">Itinéraire <MapPin size={16} /></a><a className="button button-outline" href={mapsUrl} target="_blank" rel="noreferrer">Voir la carte <ArrowUpRight size={15} /></a></div></div><a className="map-card" href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Rechercher Balkon L'Aouina sur Google Maps"><img src={photos.hero} alt="Façade éclairée du café restaurant Balkon L’Aouina" loading="lazy" /><span className="map-veil" /><span className="map-pin"><MapPin size={18} /></span><span className="map-card-copy"><small>RETROUVEZ-NOUS</small><strong>Balkon <i>L’Aouina, Tunis</i></strong><span>Ouvrir l’itinéraire <ArrowUpRight size={14} /></span></span><span className="map-coordinate">L’AOUINA — TUNIS</span></a></Reveal></section>
    </main>

    <footer className="site-footer"><div className="footer-main"><div className="footer-brand-col"><Brand /><p>Café · Restaurant · Lounge<br />L’Aouina, Tunis</p></div><div className="footer-nav"><span className="footer-label">EXPLORER</span>{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div><div className="footer-contact"><span className="footer-label">NOUS TROUVER</span><a href={mapsUrl} target="_blank" rel="noreferrer">L’Aouina, Tunis <ArrowUpRight size={13} /></a></div><a className="back-top" href="#accueil" aria-label="Retour en haut"><ArrowUpRight size={18} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} BALKON L’AOUINA</span><span>UN LIEU À VIVRE, UN MOMENT À PARTAGER</span><a href="#accueil">RETOUR EN HAUT ↑</a></div></footer>
    <AnimatePresence>{menuOpen && <motion.div className="menu-dialog-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)}><motion.section className="menu-catalog" role="dialog" aria-modal="true" aria-label="Carte complète de Balkon" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} onClick={event => event.stopPropagation()}><button className="menu-dialog-close" type="button" aria-label="Fermer la carte" onClick={() => setMenuOpen(false)}><X /></button><header className="menu-catalog-cover"><p className="eyebrow">BALKON · L’AOUINA</p><h2>La carte</h2><p>Un moment à savourer</p></header><nav className="menu-catalog-nav" aria-label="Filtrer la carte"><button type="button" className={menuFilter === 'Toutes' ? 'is-active' : ''} aria-pressed={menuFilter === 'Toutes'} onClick={() => setMenuFilter('Toutes')}>Tout voir</button>{categories.map(category => <button key={category.title} type="button" className={menuFilter === category.title ? 'is-active' : ''} aria-pressed={menuFilter === category.title} onClick={() => setMenuFilter(category.title)}>{category.title}</button>)}</nav><div className="menu-catalog-sections">{categories.filter(category => menuFilter === 'Toutes' || category.title === menuFilter).map(category => <section className="menu-catalog-category" key={category.title}><div className="menu-catalog-heading"><p className="eyebrow">{category.eyebrow}</p><h3>{category.title}</h3></div><div className="menu-dialog-list">{category.dishes.map(([name, description, price]) => <article className="menu-dialog-item" key={name}><div><h4>{name}</h4><p>{description}</p></div><strong>{price}</strong></article>)}</div></section>)}</div><p className="menu-dialog-note">Carte de démonstration : plats et prix proposés à titre indicatif, à remplacer par les informations officielles de Balkon.</p></motion.section></motion.div>}</AnimatePresence>
    <AnimatePresence>{lightbox !== null && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Galerie photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Fermer"><X /></button><button className="lightbox-arrow lightbox-prev" aria-label="Photo précédente" onClick={e => { e.stopPropagation(); setLightbox(i => i === null ? null : (i - 1 + gallery.length) % gallery.length) }}><ArrowLeft /></button><motion.img key={lightbox} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} src={gallery[lightbox].id} alt={gallery[lightbox].label} onClick={e => e.stopPropagation()} /><button className="lightbox-arrow lightbox-next" aria-label="Photo suivante" onClick={e => { e.stopPropagation(); setLightbox(i => i === null ? null : (i + 1) % gallery.length) }}><ArrowRight /></button><span className="lightbox-caption">{gallery[lightbox].label}<span>{String(lightbox + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span></span></motion.div>}</AnimatePresence>
  </>
}
export default App
