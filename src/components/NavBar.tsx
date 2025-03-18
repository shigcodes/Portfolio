import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'projects', 'skills', 'tools', 'about', 'contact'];
      
      // Find which section is currently most visible in the viewport
      let currentSection = '';
      let maxVisibility = 0;
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visiblePercentage = visibleHeight / section.offsetHeight;
          
          if (visiblePercentage > maxVisibility && visiblePercentage > 0.2) {
            maxVisibility = visiblePercentage;
            currentSection = sectionId;
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(sectionId);
      setTimeout(() => {
        AOS.refresh(); 
      }, 1000);  
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to determine link classes based on active state
  const getLinkClasses = (sectionId: string) => {
    const baseClasses = "cursor-pointer block mt-4 md:inline-block md:mt-0 hover:text-purple-600";
    const activeClasses = activeSection === sectionId ? "text-purple-600 font-medium" : "text-gray-600";
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <div className="flex justify-between items-center p-4 w-full z-50 bg-white fixed top-0 right-0 p-4 bg-white">
      <div className="flex items-center">
        <img src="logo.png" alt="Tailwind Logo" style={{ height: '60px', width: 'auto' }} className="h-8 w-auto sm:h-10" />
      </div>
      <button
        onClick={toggleMenu}
        className="inline-flex items-center p-2 rounded-md text-gray-700 md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          // This is the close icon (X) shown when isOpen is true
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // This is the hamburger menu icon shown when isOpen is false
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      <div className={`flex flex-col items-end justify-start fixed top-0 right-0 p-4 bg-white shadow-md z-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button onClick={toggleMenu} className="self-end">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <a onClick={() => handleNavClick('experience')} className={`${getLinkClasses('experience')} mb-4 p-5`}>Experience</a>
        <a onClick={() => handleNavClick('projects')} className={`${getLinkClasses('projects')} mb-4 p-5`}>Projects</a>
        <a onClick={() => handleNavClick('skills')} className={`${getLinkClasses('skills')} mb-4 p-5`}>Skills</a>
        <a onClick={() => handleNavClick('tools')} className={`${getLinkClasses('tools')} mb-4 p-5`}>Tools</a>
        <a onClick={() => handleNavClick('about')} className={`${getLinkClasses('about')} mb-4 p-5`}>About</a>
        <a onClick={() => handleNavClick('contact')} className={`${getLinkClasses('contact')} p-5`}>Contact</a>
      </div>
      <div className={`hidden md:flex flex-column items-center w-auto`}>
        <a onClick={() => handleNavClick('experience')} className={`${getLinkClasses('experience')} mr-4 p-5`}>Experience</a>
        <a onClick={() => handleNavClick('projects')} className={`${getLinkClasses('projects')} mr-4 p-5`}>Projects</a>
        <a onClick={() => handleNavClick('skills')} className={`${getLinkClasses('skills')} mr-4 p-5`}>Skills</a>
        <a onClick={() => handleNavClick('tools')} className={`${getLinkClasses('tools')} mr-4 p-5`}>Tools</a>
        <a onClick={() => handleNavClick('about')} className={`${getLinkClasses('about')} mr-4 p-5`}>About</a>
        <a onClick={() => handleNavClick('contact')} className={`${getLinkClasses('contact')} p-5`}>Contact</a>
      </div>
    </div>
  );
}

export default NavBar

