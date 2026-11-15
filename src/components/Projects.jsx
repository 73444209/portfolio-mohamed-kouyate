function Projects() {
  return (
    <section id="projets" className="projects-section">
      <div className="section-container">
        <div className="section-header reveal reveal-fade-up">
          <span className="section-subtitle">Réalisations professionnelles</span>
          <h2 className="section-title">Projets & Campagnes B2B</h2>
        </div>

        <div className="projects-grid" data-stagger-group>
          {/* PROJET 1 : Stratégie B2B & Campagnes Lenovo */}
          <div className="project-case-card reveal reveal-zoom-in">
            <div className="project-case-top">
              <span className="project-number">01</span>
              <span className="project-client">Glob Access · Bamako</span>
            </div>
            <h3>Stratégie B2B & Campagnes Lenovo</h3>
            <p className="project-desc">
              Déploiement de campagnes marketing B2B ciblant 50 entreprises
              stratégiques (mines, industrie, banques, ONG) : structuration des
              offres matérielles (ThinkBook, ThinkPad) et argumentation TCO.
            </p>
            <div className="project-impact">
              <strong>Impact :</strong> Positionnement haute valeur et
              génération d’opportunités grands comptes.
            </div>
            <div className="project-tags-footer">
              <span>Marketing B2B</span>
              <span>Offres TCO</span>
              <span>Grands Comptes</span>
            </div>
          </div>

          {/* PROJET 2 : Intégration CRM & Automatisation */}
          <div className="project-case-card project-case-accent reveal reveal-zoom-in">
            <div className="project-case-top">
              <span className="project-number">02</span>
              <span className="project-client">HubSpot & Mailchimp</span>
            </div>
            <h3>Architecture CRM & Automatisation</h3>
            <p className="project-desc">
              Mise en place de pipelines de vente structurés, segmentation
              avancée des contacts, lead scoring comportemental et campagnes
              d’e-mailing automatisées pour fluidifier la conversion.
            </p>
            <div className="project-impact">
              <strong>Impact :</strong> Alignement Marketing-Ventes et suivi
              précis de la maturité des prospects.
            </div>
            <div className="project-tags-footer">
              <span>HubSpot CRM</span>
              <span>Lead Scoring</span>
              <span>Mailchimp</span>
            </div>
          </div>

          {/* PROJET 3 : Digital Selling & Sales Enablement */}
          <div className="project-case-card reveal reveal-zoom-in">
            <div className="project-case-top">
              <span className="project-number">03</span>
              <span className="project-client">Prospection & Social Selling</span>
            </div>
            <h3>Digital Selling & Sales Enablement</h3>
            <p className="project-desc">
              Élaboration de méthodologies de prospection multicanale sur
              LinkedIn, création d’outils d’aide à la vente (catalogues, fiches
              solutions) et accompagnement opérationnel des équipes.
            </p>
            <div className="project-impact">
              <strong>Impact :</strong> Accélération du cycle de prospection et
              crédibilité commerciale renforcée.
            </div>
            <div className="project-tags-footer">
              <span>Social Selling</span>
              <span>Sales Enablement</span>
              <span>LinkedIn B2B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;