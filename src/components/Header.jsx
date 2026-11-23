
function Header() {
    return (
        <header className="top-nav" id="top-nav">
            <div className="nav-inner">
            <a href="#" className="nav-brand">
                <div className="avatar-mark" aria-hidden="true">JH</div>
                <div className="brand-text">
                <span className="brand-name">John Argie Hista</span>
                <span className="brand-tagline">Software Developer · Building Stuff That Works</span>
                </div>
            </a>

            <nav className="nav-links" aria-label="Page Sections">
                <a href="#work" className="nav-link active" data-section="work">Projects</a>
                <a href="#stack" className="nav-link" data-section="stack">Tools</a>
                <a href="#contact" className="nav-link" data-section="contact">Contact</a>
            </nav>

            <button className="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
            </div>

            <div className="mobile-menu" id="mobile-menu" aria-hidden="true">
            <nav className="mobile-nav-links">
                <a href="#work" className="mobile-nav-link" data-section="work">Projects</a>
                <a href="#stack" className="mobile-nav-link" data-section="stack">Tools</a>
                <a href="#contact" className="mobile-nav-link" data-section="contact">Contact</a>
            </nav>
            </div>
        </header>
    );
}

export default Header