const Tools = () => {
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
        <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
                <img src="swift.png" alt="Swift" className="w-40 h-40" />
                <p>Swift</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="swiftui.png" alt="SwiftUI" className="w-40 h-40" />
                <p>SwiftUI</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="react.png" alt="React" className="w-40 h-40" />
                <p>React</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="html.png" alt="HTML" className="w-40 h-40" />
                <p>HTML</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="css.png" alt="CSS" className="w-40 h-40" />
                <p>CSS</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="javascript.png" alt="JavaScript" className="w-40 h-40" />
                <p>JavaScript</p>
            </div>
        </div>
    </div>
}
export default Tools;

