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

  return (
    <div className="flex justify-between items-center p-4 w-full">
      <div className="flex items-center">
        <img src="logo.png" alt="Tailwind Logo" style={{ height: '60px', width: 'auto' }} className="h-8 w-auto sm:h-10" />
      </div>
      <button
        className="inline-flex items-center p-2 rounded-md text-gray-700 md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col w-full md:flex md:flex-row md:items-center md:w-auto`}>
        <a onClick={() => handleNavClick('experience')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 mr-4 p-5">Experience</a>
        <a onClick={() => handleNavClick('projects')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 mr-4 p-5">Projects</a>
        <a onClick={() => handleNavClick('skills')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 mr-4 p-5">Skills</a>
        <a onClick={() => handleNavClick('about')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 mr-4 p-5">About</a>
        <a onClick={() => handleNavClick('contact')} className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-gray-900 p-5">Contact</a>
      </div>
    </div>
  );
}


export default NavBar

