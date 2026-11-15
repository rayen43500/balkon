import { useState } from 'react'
import logoImage from './assets/logo.png'
import { categories } from './menu-data'

export default function MenuPage() {
  const [menuFilter, setMenuFilter] = useState('Toutes')
  const visibleCategories = categories.filter(category => menuFilter === 'Toutes' || category.title === menuFilter)

  return <main className="menu-page">
    <header className="menu-page-header">
      <a href="../" aria-label="Retour au site Balkon"><img src={logoImage} alt="Balkon Café & Restaurant" /></a>
      <a className="menu-back-link" href="../">Retour au site <span aria-hidden="true">↗</span></a>
    </header>
    <article className="menu-catalog menu-page-catalog">
      <header className="menu-catalog-cover">
        <p className="eyebrow">BALKON · L’AOUINA</p>
        <h1>La carte</h1>
        <p>Un moment à savourer</p>
      </header>
      <nav className="menu-catalog-nav" aria-label="Filtrer la carte">
        <button type="button" className={menuFilter === 'Toutes' ? 'is-active' : ''} aria-pressed={menuFilter === 'Toutes'} onClick={() => setMenuFilter('Toutes')}>Tout voir</button>
        {categories.map(category => <button key={category.title} type="button" className={menuFilter === category.title ? 'is-active' : ''} aria-pressed={menuFilter === category.title} onClick={() => setMenuFilter(category.title)}>{category.title}</button>)}
      </nav>
      <div className={`menu-catalog-sections ${menuFilter !== 'Toutes' ? 'is-filtered' : ''}`}>
        {visibleCategories.map(category => <section className="menu-catalog-category" key={category.title}>
          <div className="menu-catalog-heading"><img src={category.image} alt="" /><div><p className="eyebrow">{category.eyebrow}</p><h2>{category.title}</h2></div></div>
          <div className="menu-dialog-list">{category.dishes.map(([name, description, price]) => <article className="menu-dialog-item" key={name}><div><h3>{name}</h3><p>{description}</p></div><strong>{price}</strong></article>)}</div>
        </section>)}
      </div>
      <p className="menu-dialog-note">Carte de démonstration : plats et prix proposés à titre indicatif, à remplacer par les informations officielles de Balkon.</p>
    </article>
    <footer className="menu-page-footer">BALKON · CAFÉ · RESTAURANT · LOUNGE</footer>
  </main>
}
