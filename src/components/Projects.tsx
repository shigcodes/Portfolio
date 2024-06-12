import React, { useState } from 'react';

// Define the Project interface
interface Project {
    title: string;
    description: string;
    tools: string[];
    image: string;
    category: string;
    link: string; // Add link property for iframe source
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [iframeSrc, setIframeSrc] = useState<string | null>(null); // State to hold the current iframe source

    const projectData: Project[] = [
        {
            title: "Astral Verse",
            description: "A dynamic web design platform allowing users to mint and share NFT creations effortlessly.",
            tools: ["Figma", "Photoshop", "Illustrator"],
            image: "av.png",
            category: "Web Design",
            link: "https://adorable-travel-412785.framer.app/"
        },
        {
            title: "FoodLine",
            description: "A user-friendly website designed for users to explore, order, and savor authentic Chinese cuisine with unparalleled ease.",
            tools: ["Photoshop", "Figma", "Canva"],
            image: "fl.png",
            category: "Web Design",
            link: "https://fresh-squircle-912146.framer.app/"
        },
        {
            title: "EduPulse",
            description: "An intuitive online learning platform designed for pioneering a new approach to digital literacy.",
            tools: ["Photoshop", "Figma"],
            image: "ep.png",
            category: "Web Design",
            link: "https://experienced-globe-602112.framer.app/"
        },
        {
            title: "A&P Auto Care",
            description: "A cutting-edge carwash web design, with a sleek and intuitive user interface for effortless navigation and booking.",
            tools: ["Figma", "Photoshop", "Canva"],
            image: "ap.png",
            category: "Web Design",
            link: "https://beloved-service-573428.framer.app/"
        }
    ];

    const handleBackClick = () => {
        setSelectedProject(null);
        setIframeSrc(null); 
    };

    const toggleIframe = (link: string) => {
        setIframeSrc(link);
    }

    return (
        <>
            {iframeSrc && (
                <>
                    <iframe src={iframeSrc} style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        border: 'none',
                        width: '80%',
                        height: '80vh',
                        zIndex: 1000, 
                        borderRadius: '10px'
                    }}></iframe>
                    <button onClick={handleBackClick} style={{
                        position: 'fixed',
                        top: '10%',
                        left: '10%',
                        zIndex: 1001, 
                        backgroundColor: '#6A7CF5',
                        color: 'white',
                        padding: '10px',
                        width: '50px', 
                        height: '50px', 
                        borderRadius: '0', 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out'
                    }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#889BFF'} onMouseLeave={e => e.currentTarget.style.backgroundColor = '#6A7CF5'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m7 7l-7-7 7-7" />
                        </svg>
                    </button>
                </>
            )}
            <div id='projects' style={{ paddingTop: '50px' }} data-aos="zoom-in">
                {selectedProject ? (
                    <div className="flex flex-col items-center justify-center text-center m-10">
                        <button onClick={handleBackClick} className="mb-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-58 object-cover mb-4" />
                        <h2 className="text-4xl font-bold">{selectedProject.title}</h2>
                        <p className="text-gray-600">{selectedProject.description}</p>
                        <div className="mt-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{selectedProject.category}</span>
                            {selectedProject.tools.map((tool, toolIndex) => (
                                <span key={toolIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tool}</span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className=" flex flex-col items-center justify-center text-center m-10">
                        <h1 className="text-4xl" style={{
                            background: 'linear-gradient(to right, #687DF6, #8156E0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: '50px',
                            fontWeight: '500',
                            lineHeight: '1.2',
                            marginBottom: '10px',
                            marginTop: '50px'
                        }}>Projects</h1> <hr style={{ border: '1px solid black', width: '300px' }} />
                        <p className="m-5">
                            Here's a glimpse into the cool projects I've had the pleasure to work on. Dive in and explore!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 m-10" style={{ width: '90%' }}>
                            {projectData.map((project, index) => (
                                <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img src={project.image} alt={project.title} className="w-full h-58 object-cover" />
                                    <div className="p-4 bsolute bottom-0 left-0 w-full">
                                        <h2 className="text-xl font-bold">{project.title}</h2>
                                        <p className="text-gray-600">{project.description}</p>
                                        <div className="mt-2">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{project.category}</span>
                                            {project.tools.map((tool, toolIndex) => (
                                                <span key={toolIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <button onClick={() => toggleIframe(project.link)} className="absolute bottom-4 right-4 text-white rounded-full p-2 hover:scale-125 hover:bg-indigo-500 transition-transform duration-300 ease-in-out" style={{ backgroundColor: '#6A7CF5', transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:rotate-[-55deg] transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>


        </>
    );

};

export default Projects;