import ProjectCard from "./ProjectCard";

function ProjectList() {
    return (
        <section className="content-section" id="work" aria-label="Featured Projects">
            <div className="section-header">
                <span className="section-badge">01 // PROJECTS</span>
                <h2 className="section-title">Stuff I've Built</h2>
                <p className="section-desc">A capstone project and a personal side project (an Android app plus the API behind it). All built to solve real problems for real people.</p>
            </div>

            <div className="project-list">
                <ProjectCard />
            </div>
        </section>
    );
}

export default ProjectList