import Carousel from "./Carousel";
import { projects } from "../data/projects";

function ProjectCard() {

    return (
        <>
        {
        projects.map((project, index) => (
            <article className="project-row" id="project-onetap">
                <div className="project-row-header">
                    <div className="project-title-group">
                    <span className="project-index">{index++}</span>
                    <div>
                        <h3 className="project-name">
                        {project.name}
                        <span className="pill-badge live">{project.badge}</span>
                        </h3>
                        <p className="project-tagline">{project.tagline}</p>
                    </div>
                    </div>
                    <div className="project-links">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="external-link" title="Open source code repository">
                        <span>Source Code</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                    </a>
                    </div>
                </div>

                <p className="project-summary">
                    {project.summary}
                </p>

                <div className="project-tech-tags" aria-label="Technologies used">
                    {
                        project.tech.map((tech) => 
                            <span className="tech-tag">{tech}</span>
                    )}
                </div>

                <details className="project-details">
                    <summary className="details-toggle">
                        <span>Under the hood</span>
                        <svg className="chevron-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                    </summary>
                    <div className="details-content">
                        <div className="specs-grid">
                            {
                                project.specs.map((spec) =>
                                    <div className="spec-card">
                                        <span className="spec-label">{spec.label}</span>
                                        <p className="spec-value">{spec.value}</p>
                                    </div>
                                )
                            }
                        </div>
                        {
                            project.screenshots.length != 0 && 
                                <Carousel>
                                    {
                                        project.screenshots.map((screenshot) => (
                                            <div className="carousel-slide active">
                                                <img src={screenshot} alt="App Screenshot" loading="lazy"/>
                                            </div>
                                        )
                                        )
                                    }
                                </Carousel>
                        }
                        
                    </div>
                </details>
            </article>
        ))
        }
        </>);
}

export default ProjectCard