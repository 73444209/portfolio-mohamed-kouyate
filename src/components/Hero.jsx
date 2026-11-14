function Hero() {
  return (
    <section id="accueil" className="hero-section">
      <div className="hero-container">
        {/* COLONNE GAUCHE : TEXTE & APPELS À L'ACTION */}
        <div className="hero-content">
          <span className="hero-badge">
            • MARKETING & COMMUNICATION · BAMAKO, MALI
          </span>

          <h1 className="hero-title">
            Mohamed Kouyaté
          </h1>

          <h2 className="hero-subtitle">
            Responsable Marketing et Communication
          </h2>

          <p className="hero-description">
            Stratégie marketing B2B, communication d’entreprise et développement
            d’opportunités d’affaires pour propulser la croissance des
            organisations.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Me contacter
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-kouyaté-b99531220/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Mon profil LinkedIn
            </a>
          </div>
        </div>

        {/* COLONNE DROITE : PORTRAIT PROFESSIONNEL */}
        <div className="hero-image-wrapper">
          <div className="hero-image-backdrop"></div>
          <img
            src="/image/mohamed-kouyate.jpg"
            alt="Portrait professionnel de Mohamed Kouyaté"
            className="hero-portrait"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;