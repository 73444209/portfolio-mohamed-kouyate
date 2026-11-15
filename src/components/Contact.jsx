function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header reveal reveal-fade-in">
          <span className="section-subtitle contact-subtitle">
            Échangeons sur vos projets
          </span>
          <h2 className="section-title contact-title">Contactez-moi</h2>
        </div>

        <div className="contact-grid">
          {/* COLONNE GAUCHE : Coordonnées professionnelles */}
          <div className="contact-info reveal reveal-fade-in">
            <h3>Coordonnées professionnelles</h3>
            <p className="contact-intro">
              Disponible pour échanger sur vos enjeux de stratégie marketing B2B,
              de communication d’entreprise et de développement commercial.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <span className="contact-label">Localisation</span>
                <span className="contact-value">Bamako, Mali</span>
              </div>

              <div className="contact-detail-item">
                <span className="contact-label">Téléphone & WhatsApp</span>
                <a href="tel:+22370167516" className="contact-link">
                  +223 73 44 42 09
                </a>
              </div>

              <div className="contact-detail-item">
                <span className="contact-label">E-mail professionnel</span>
                <a href="mailto:mhdkte@gmail.com" className="contact-link">
                  mhdkte@gmail.com
                </a>
              </div>

              <div className="contact-detail-item">
                <span className="contact-label">Réseau B2B</span>
                <a
                  href="https://www.linkedin.com/in/mohamed-kouyaté-b99531220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn · Mohamed Kouyaté ↗
                </a>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Formulaire contrasté */}
          <form
            className="contact-form-card reveal reveal-fade-in"
            action="https://formspree.io/f/votre-code-ici"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom et prénom"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="votre.email@entreprise.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Objet de votre message</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Proposition, mission ou prise de contact"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Entrez votre message ici..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary btn-submit">
              Envoyer le message
            </button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mohamed Kouyaté — Responsable Marketing & Communication. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;