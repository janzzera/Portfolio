
function ProjectCard() {
    return (
        <article className="project-row" id="project-onetap">
            <div className="project-row-header">
                <div className="project-title-group">
                <span className="project-index">01</span>
                <div>
                    <h3 className="project-name">
                    OneTap
                    <span className="pill-badge live">Capstone</span>
                    </h3>
                    <p className="project-tagline">Homeowners association management platform</p>
                </div>
                </div>
                <div className="project-links">
                <a href="https://github.com/Ggkyle/OneTap" target="_blank" rel="noopener noreferrer" className="external-link" title="Open source code repository">
                    <span>Source Code</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
                </div>
            </div>

            <p className="project-summary">
                A web app we built as a team of 3 for our capstone. It helps homeowners association admins and officers manage their community: announcements, facilities reservations, issue reporting, and a lightweight violations tracker. We also added a chatbot so residents can find what they need without digging through menus. Separate dashboards for residents, officers, and admins.
            </p>

            <div className="project-tech-tags" aria-label="Technologies used">
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">Laravel</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Livewire</span>
                <span className="tech-tag">Leaflet.js</span>
            </div>

            <details className="project-details">
                <summary className="details-toggle">
                <span>Under the hood</span>
                <svg className="chevron-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="details-content">
                <div className="specs-grid">
                    <div className="spec-card">
                    <span className="spec-label">Role-Based Access</span>
                    <p className="spec-value">Three separate dashboards (resident, officer, admin) with middleware-based role gating so each user only sees what they're supposed to.</p>
                    </div>
                    <div className="spec-card">
                    <span className="spec-label">Real-Time Feel</span>
                    <p className="spec-value">Used Livewire for reactive UI updates, so announcements, reservation statuses, and issue reports update without full page reloads.</p>
                    </div>
                    <div className="spec-card">
                    <span className="spec-label">Map Integration</span>
                    <p className="spec-value">Leaflet.js for community map views, letting officers pin and visualize reported issues by location within the subdivision.</p>
                    </div>
                </div>

                <div className="screenshot-carousel" data-carousel>
                    <div className="carousel-label">Screenshots</div>
                    <div className="carousel-viewport">
                    <div className="carousel-track">
                        <div className="carousel-slide active">
                        <img src="images/onetap-1.png" alt="OneTap screenshot 1" loading="lazy"/>
                        </div>
                        <div className="carousel-slide">
                        <img src="images/onetap-2.png" alt="OneTap screenshot 2" loading="lazy"/>
                        </div>
                        <div className="carousel-slide">
                        <img src="images/onetap-3.png" alt="OneTap screenshot 3" loading="lazy"/>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-controls">
                    <button className="carousel-btn carousel-prev" aria-label="Previous screenshot">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <div className="carousel-dots"></div>
                    <button className="carousel-btn carousel-next" aria-label="Next screenshot">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                    </div>
                </div>
                </div>
            </details>
        </article>
    );
}

export default ProjectCard