import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col items-end justify-start fixed top-0 right-0 p-4 bg-white shadow-md z-50">
          <button onClick={toggleMenu} className="self-end">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a onClick={() => handleNavClick('experience')} className="cursor-pointer text-gray-600 hover:text-purple-700 mb-4 p-5">Experience</a>
          <a onClick={() => handleNavClick('projects')} className="cursor-pointer text-gray-600 hover:text-purple-700 mb-4 p-5">Projects</a>
          <a onClick={() => handleNavClick('skills')} className="cursor-pointer text-gray-600 hover:text-purple-700 mb-4 p-5">Skills</a>
          <a onClick={() => handleNavClick('tools')} className="cursor-pointer text-gray-600 hover:text-purple-700 mb-4 p-5">Tools</a>
          <a onClick={() => handleNavClick('about')} className="cursor-pointer text-gray-600 hover:text-purple-700 mb-4 p-5">About</a>
          <a onClick={() => handleNavClick('contact')} className="cursor-pointer text-gray-600 hover:text-purple-700 p-5">Contact</a>
        </div>
      )}
      <div className={`hidden md:flex flex-column items-center w-auto`}>
        <a onClick={() => handleNavClick('experience')} className="cursor-pointer  text-gray-600 hover:text-purple-700 mr-4 p-5">Experience</a>
        <a onClick={() => handleNavClick('projects')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-purple-700 mr-4 p-5">Projects</a>
        <a onClick={() => handleNavClick('skills')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-purple-700 mr-4 p-5">Skills</a>
        <a onClick={() => handleNavClick('tools')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-purple-700 mr-4 p-5">Tools</a>
        <a onClick={() => handleNavClick('about')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-purple-700 mr-4 p-5">About</a>
        <a onClick={() => handleNavClick('contact')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-purple-700 p-5">Contact</a>
      </div>
    </div>
  );
}

export default NavBar

