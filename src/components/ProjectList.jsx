
function ProjectList() {
    return (
        <section className="content-section" id="work" aria-label="Featured Projects">
            <div className="section-header">
                <span className="section-badge">01 // PROJECTS</span>
                <h2 className="section-title">Stuff I've Built</h2>
                <p className="section-desc">A capstone project and a personal side project (an Android app plus the API behind it). All built to solve real problems for real people.</p>
            </div>

            <div className="project-list">
                
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

                <article className="project-row" id="project-kilgi">
                <div className="project-row-header">
                    <div className="project-title-group">
                    <span className="project-index">02</span>
                    <div>
                        <h3 className="project-name">
                        Kilgi
                        <span className="pill-badge live">In Progress</span>
                        </h3>
                        <p className="project-tagline">Merchandising &amp; accounting app for vegetable vendors</p>
                    </div>
                    </div>
                    <div className="project-links">
                    <a href="https://github.com/janzzera/Kilgi" target="_blank" rel="noopener noreferrer" className="external-link" title="Open source code repository">
                        <span>Source Code</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                    </a>
                    </div>
                </div>

                <p className="project-summary">
                    An Android app I'm building for vegetable vendors who need a simple way to track their merchandise and money. You can batch-input purchases, log expenses and spoilages, then record end-of-day sales (retail or wholesale). It also tracks payables and receivables, and generates real accounting outputs: general journal, T-accounts, trial balance, income statement, owner's equity statement, and balance sheet. It works offline too. Everything you enter is saved on the phone first, then synced to the cloud database through the Kilgi API once you're back online.
                </p>

                <div className="project-tech-tags" aria-label="Technologies used">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Android Studio</span>
                    <span className="tech-tag">Jetpack Compose</span>
                    <span className="tech-tag">Room Database</span>
                    <span className="tech-tag">Data Sync</span>
                </div>

                <details className="project-details">
                    <summary className="details-toggle">
                    <span>Under the hood</span>
                    <svg className="chevron-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                    </summary>
                    <div className="details-content">
                    <div className="specs-grid">
                        <div className="spec-card">
                        <span className="spec-label">Accounting Engine</span>
                        <p className="spec-value">Built a full double-entry bookkeeping system from scratch: general journal, T-accounts, and auto-generated trial balance and financial statements.</p>
                        </div>
                        <div className="spec-card">
                        <span className="spec-label">Offline-First Sync</span>
                        <p className="spec-value">Room Database stores batch purchases, spoilage logs, sales records, and payables/receivables locally. Offline writes get queued and pushed to the cloud DB through the Kilgi API when the connection comes back.</p>
                        </div>
                        <div className="spec-card">
                        <span className="spec-label">UI</span>
                        <p className="spec-value">Jetpack Compose for a modern declarative UI. Batch input forms, daily sales summaries, and financial statement views, all native Android.</p>
                        </div>
                    </div>

                    <div className="screenshot-carousel" data-carousel>
                        <div className="carousel-label">Screenshots</div>
                        <div className="carousel-viewport">
                        <div className="carousel-track">
                            <div className="carousel-slide active">
                            <img src="images/kilgi-1.png" alt="Kilgi screenshot 1" loading="lazy"/>
                            </div>
                            <div className="carousel-slide">
                            <img src="images/kilgi-2.png" alt="Kilgi screenshot 2" loading="lazy"/>
                            </div>
                            <div className="carousel-slide">
                            <img src="images/kilgi-3.png" alt="Kilgi screenshot 3" loading="lazy"/>
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

                <article className="project-row" id="project-kilgi-api">
                <div className="project-row-header">
                    <div className="project-title-group">
                    <span className="project-index">03</span>
                    <div>
                        <h3 className="project-name">
                        Kilgi API
                        <span className="pill-badge live">Personal Project</span>
                        </h3>
                        <p className="project-tagline">Backend API that powers the Kilgi Android app</p>
                    </div>
                    </div>
                    <div className="project-links">
                    <a href="https://github.com/janzzera/KilgiAPI" target="_blank" rel="noopener noreferrer" className="external-link" title="Open source code repository">
                        <span>Source Code</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                    </a>
                    </div>
                </div>

                <p className="project-summary">
                    The backend for Kilgi. It's a REST API the Android app talks to for posting and getting data from the cloud database. Whenever the app saves a purchase, sale, or expense, it ends up here and gets stored in Supabase Postgres. Requests are secured with JWT tokens, so each vendor only gets access to their own records. It's deployed on Render, so the app can reach it from anywhere.
                </p>

                <div className="project-tech-tags" aria-label="Technologies used">
                    <span className="tech-tag">C#</span>
                    <span className="tech-tag">.NET Web API</span>
                    <span className="tech-tag">JWT</span>
                    <span className="tech-tag">Supabase</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">Render</span>
                </div>

                <details className="project-details">
                    <summary className="details-toggle">
                    <span>Under the hood</span>
                    <svg className="chevron-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                    </summary>
                    <div className="details-content">
                    <div className="specs-grid">
                        <div className="spec-card">
                        <span className="spec-label">REST Endpoints</span>
                        <p className="spec-value">Built with ASP.NET Core Web API. Endpoints for posting and fetching purchases, sales, expenses, and accounting records used by the app.</p>
                        </div>
                        <div className="spec-card">
                        <span className="spec-label">Auth</span>
                        <p className="spec-value">JWT token authentication. The app logs in once, gets a token, and sends it with every request so the API knows who's asking.</p>
                        </div>
                        <div className="spec-card">
                        <span className="spec-label">Cloud DB</span>
                        <p className="spec-value">Supabase Postgres as the cloud database. Acts as the source of truth that the Android app syncs its offline data to.</p>
                        </div>
                    </div>
                    </div>
                </details>
                </article>
            </div>
        </section>
    );
}

export default ProjectList