const Projects = () => {
    const projectData = [
        {
            title: "Astral Verse",
            description: "A dynamic web design platform allowing users to mint and share NFT creations effortlessly.",
            tools: ["Figma", "Photoshop", "Illustrator"],
            image: "av.png",
            category: "Web Design"
        },
        {
            title: "FoodLine",
            description: "A user-friendly website designed for users to explore, order, and savor authentic Chinese cuisine with unparalleled ease.",
            tools: ["Photoshop", "Illustrator"],
            image: "fl.png",
            category: "Web Design"
        },
        {
            title: "EduPulse",
            description: "An intuitive online learning platform designed for pioneering a new approach to digital literacy.",
            tools: ["Photoshop"],
            image: "ep.png",
            category: "Web Design"
        },
        {
            title: "A&P Auto Care",
            description: "A cutting-edge carwash web design, with a sleek and intuitive user interface for effortless navigation and booking.",
            tools: ["Photoshop", "Illustrator"],
            image: "ap.png",
            category: "Web Design"
        }
    ];

    return (
        <div className=" flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl" style={{
                background: 'linear-gradient(to right, #687DF6, #8156E0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '50px',
                fontWeight: '500',
                lineHeight: '1.2',
                marginBottom: '10px'
            }}>Projects</h1> <hr style={{ border: '1px solid black', width: '300px' }} />
            <p className="m-5">
                Here's a glimpse into the cool projects I've had the pleasure to work on. Dive in and explore!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 m-10" style={{ width: '90%' }}>
                {projectData.map((project, index) => (
                    <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
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
                        <div className="absolute bottom-4 right-4 bg-purple-500 text-white rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects