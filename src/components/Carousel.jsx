
function Carousel({children}) {

    return (
        <div className="screenshot-carousel" data-carousel>
            <div className="carousel-label">Screenshots</div>
            <div className="carousel-viewport">
            <div className="carousel-track">
                {children}
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
    );
}

export default Carousel