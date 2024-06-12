const Skills = () => {
    return (
        <div id='skills' style={{ paddingTop: '100px' }}  data-aos="fade-right">
            <div className=" flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl" style={{
                    background: 'linear-gradient(to right, #687DF6, #8156E0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '50px',
                    fontWeight: '500',
                    lineHeight: '1.2',
                    marginBottom: '10px'
                }}>My Skills</h1> <hr style={{ border: '1px solid black', width: '300px' }} />
                <p className="m-5">
                    Presenting my skill set: a dynamic toolbox poised to elevate any project!
                </p>
                <div className="grid grid-cols-3 gap-20 m-10">
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold ">
                        <img src="swift.png" alt="Swift" className="sm:w-40 sm:h-auto" />
                        <p>Swift</p>
                    </div>
                    <div className="flex flex-col items-center  hover:scale-105 transition-transform duration-300 ease-in-out hover:font-bold">
                        <img src="swiftui.png" alt="SwiftUI" className="sm:w-40 sm:h-auto" />
                        <p>SwiftUI</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:font-bold">
                        <img src="react.png" alt="React" className="sm:w-40 sm:h-auto" />
                        <p>React</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:font-bold">
                        <img src="html.png" alt="HTML" className="sm:w-40 sm:h-auto" />
                        <p>HTML</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:font-bold">
                        <img src="css.png" alt="CSS" className="sm:w-40 sm:h-auto" />
                        <p>CSS</p>
                    </div>
                    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:font-bold">
                        <img src="javascript.png" alt="JavaScript" className="sm:w-40 sm:h-auto" />
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills
