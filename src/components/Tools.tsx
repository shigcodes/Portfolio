const Tools = () => {
    return (
        <div id='tools' style={{ paddingTop: '100px' }}>
            <div className=" flex flex-col items-center justify-center text-center" data-aos="fade-left">
            <h1 className="text-4xl" style={{
                    background: 'linear-gradient(to right, #687DF6, #8156E0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '50px',
                    fontWeight: '500',
                    lineHeight: '1.2',
                    marginBottom: '10px'
                }}>My Tools</h1> <hr style={{ border: '1px solid black', width: '300px' }} />
                <p className="m-5">
                    Take a look at the tools I rely on and discover how they shape my work.
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-20 m-10">
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold ">
                        <img src="figma.png" alt="Swift" className="sm:w-40 sm:h-auto" />
                        <p>Figma</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="photoshop.png" alt="Photoshop" className="sm:w-40 sm:h-auto" />
                        <p>Adobe Photoshop</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="illustrator.png" alt="React" className="sm:w-40 sm:h-auto" />
                        <p>Adobe Illustrator</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="canva.png" alt="HTML" className="sm:w-40 sm:h-auto" />
                        <p>Canva</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="vscode.png" alt="CSS" className="sm:w-40 sm:h-auto" />
                        <p>VS Code</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="xcode.png" alt="JavaScript" className="sm:w-40 sm:h-auto" />
                        <p>Xcode</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="wordpress.png" alt="WordPress" className="sm:w-40 sm:h-auto" />
                        <p>WordPress</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="ghl.png" alt="GoHighLevel" className="sm:w-40 sm:h-auto" />
                        <p>Go High Level</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="elementor.png" alt="Elementor" className="sm:w-40 sm:h-auto" />
                        <p>Elementor</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="yoast.png" alt="Yoast" className="sm:w-40 sm:h-auto" />
                        <p>Yoast</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="propertyfilter.png" alt="Property Filter" className="sm:w-40 sm:h-auto" />
                        <p>Property Filter</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;

