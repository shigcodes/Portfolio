import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [scrollButtonHover, setScrollButtonHover] = useState(false);
    const [showButton, setShowButton] = useState(false);
    
    const scrollToTop = () => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    };
    
    useEffect(() => {
        const handleScroll = () => {
            // Show button when page is scrolled down 100px
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            {showButton && (
                <button
                    onMouseEnter={() => setScrollButtonHover(true)}
                    onMouseLeave={() => setScrollButtonHover(false)}
                    onClick={scrollToTop}
                    className="scale-100 hover:scale-125 transition-transform duration-300 ease-in-out"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        borderRadius: '50%',
                        background: scrollButtonHover ? 'linear-gradient(to right, #8156E0, #687DF6)' : 'linear-gradient(to right, #687DF6, #8156E0)',
                        color: 'white',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                    }}>
                    <i className="fas fa-arrow-up"></i>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;