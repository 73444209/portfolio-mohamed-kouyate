function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Identité à gauche */}
        <a href="#accueil" className="navbar-logo">
          Mohamed <span>Kouyaté</span>
        </a>

        {/* Menu vers vos 8 sections au centre */}
        <nav className="navbar-menu">
          <a href="#accueil">Accueil</a>
          <a href="#a-propos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#experiences">Expériences</a>
          <a href="#projets">Projets</a>
          <a href="#portfolio-visuel">Portfolio visuel</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Boutons d'action à droite */}
        <div className="navbar-actions">
          <a
            href="https://www.linkedin.com/in/mohamed-kouyaté-b99531220/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin-nav"
          >
            LinkedIn
          </a>
          <a
            href="/image/CV-Mohamed-Kouyate.pdf"
            download="CV-Mohamed-Kouyaté.pdf"
            className="btn-cv"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;