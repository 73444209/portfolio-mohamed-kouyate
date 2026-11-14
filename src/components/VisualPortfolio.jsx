function VisualPortfolio() {
  return (
    <section id="portfolio-visuel" className="visual-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Communication Corporate & Contenu de Marque</span>
          <h2 className="section-title">Portfolio visuel & Campagnes</h2>
        </div>

        <div className="visual-grid">
          {/* CARTE 1 : Stratégie d'Acquisition & Inbound Marketing (YouTube) */}
          <div className="visual-card">
            <div className="video-responsive">
              <iframe
                src="https://www.youtube.com/embed/pLwTboNaJy0"
                title="Stratégie d'Acquisition & Génération de Leads B2B - Mohamed Kouyaté"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="visual-card-body">
              <span className="project-tag">Inbound Marketing & Acquisition B2B</span>
              <h3>Stratégie de Génération de Leads Qualifiés</h3>
              <p>
                Conception de contenus à forte valeur ajoutée pour structurer le
                tunnel d’acquisition : ciblage ICP, stratégies Inbound/Outbound,
                nurturing automatisé et qualification des prospects.
              </p>
            </div>
          </div>

          {/* CARTE 2 : Campagne Publicitaire Glob Access (Lecteur LinkedIn intégré) */}
          <div className="visual-card">
            <div className="video-responsive">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7523679052680032256?compact=1"
                title="Campagne Publicitaire Glob Access - Mohamed Kouyaté"
                allowFullScreen
              ></iframe>
            </div>
            <div className="visual-card-body">
              <span className="project-tag">Communication Produit & B2B</span>
              <h3>Campagne Publicitaire Glob Access</h3>
              <p>
                Conception créative, montage dynamique et déploiement d’une
                campagne vidéo B2B pour promouvoir les équipements et solutions
                professionnelles Lenovo auprès des entreprises à Bamako.
              </p>
            </div>
          </div>

          {/* CARTE 3 : Étude de Cas & Écosystème Digital B2B */}
          <div className="visual-card">
            <div className="campaign-banner campaign-banner-secondary">
              <div className="campaign-banner-overlay">
                <span className="campaign-platform">Étude de Cas · Direction Marketing</span>
                <h4>ÉCOSYSTÈME B2B</h4>
                <p>Identité, Catalogues & Lead Gen</p>
              </div>
            </div>
            <div className="visual-card-body">
              <span className="project-tag">Communication Corporate & CRM</span>
              <h3>Refonte Digitale & Campagnes TCO Lenovo</h3>
              <p>
                Création du catalogue de services, fiches solutions, bannières
                LinkedIn/Meta, vitrine WhatsApp Business et pilotage d’une
                campagne B2B ciblant 50 grands comptes (industrie, ONG, banques)
                avec suivi sur HubSpot CRM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisualPortfolio;