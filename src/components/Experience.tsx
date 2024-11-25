
const Experience = () => {

    return (
        <div id='experience' style={{ paddingTop: '50px' }} data-aos="fade-down">
            <div className="flex flex-col items-center justify-center text-center m-30">
                <h1 className="text-4xl" style={{
                    background: 'linear-gradient(to right, #687DF6, #8156E0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '50px',
                    fontWeight: '500',
                    lineHeight: '1.2',
                    marginBottom: '10px',
                    marginTop: '50px'
                }}>Experience
                </h1>
                <hr style={{ border: '1px solid black', width: '300px' }} />
                <p className="m-5">
                    Explore my work experience and let's discover the potential for collaboration.
                </p>
                <div className="grid grid-cols-12 gap-4 relative m-10" style={{ width: '80%' }} data-aos="fade-right">
                    <div className="col-span-5 flex flex-col items-center ">
                    <div className="mb-8">
                            <h1 className="text-2xl">Birmingham, United Kingdom</h1>
                            <p className="text-sm text-gray-400">July 2024 – November 2024</p>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-2xl">New York, USA</h1>
                            <p className="text-sm text-gray-400">September 2022 – April 2024</p>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-2xl">Hamburg, Germany</h1>
                            <p className="text-sm text-gray-400">March 2023 – November 2023</p>
                        </div>
                        <div>
                            <h1 className="text-2xl">Manila, Philippines</h1>
                            <p className="text-sm text-gray-400">May 2020 – July 2021</p>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col items-center justify-between relative">
                    <div className="w-8 h-8 rounded-full border-2 border-dashed mb-8 z-10" style={{ backgroundColor: '#6A7CF5' }} ></div>
                        <div className="w-8 h-8 rounded-full border-2 border-dashed mb-8 z-10 bg-black"  ></div>
                        <div className="w-8 h-8 rounded-full border-2 border-dashed mb-8 z-10" style={{ backgroundColor: '#6A7CF5' }} ></div>
                        <div className="w-8 h-8 rounded-full border-2 border-dashed z-10 bg-black" ></div>
                        <div className="h-full w-0.5 border-l-2 border-dashed border-gray-500 absolute" style={{ top: '0', left: '50%', transform: 'translateX(-50%)' }}></div>
                    </div>
                    <div className="col-span-5 flex flex-col items-center">
                    <div className="mb-8">
                            <h1 className="text-2xl">Visual UI Designer & SEO Editor</h1>
                            <p className="text-sm text-gray-400">SMHQ Network</p>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-2xl">iOS Frontend Developer</h1>
                            <p className="text-sm text-gray-400">Lickability</p>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-2xl">Event Specialist</h1>
                            <p className="text-sm text-gray-400">Stackstream Dev Community</p>
                        </div>
                        <div>
                            <h1 className="text-2xl">Freelance Graphic Designer</h1>
                            <p className="text-sm text-gray-400">PHB Worx International Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

