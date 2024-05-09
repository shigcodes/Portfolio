const Experience = () => {
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
            }}>Experience</h1> <hr style={{ border: '1px solid black', width: '300px' }} />
            <p>
                Explore my work experience and let's discover the potential for collaboration.
            </p>
            <div className="flex flex-col items-center justify-between border border-black">
                <h1 className="text-2xl"> New York, United States</h1>
                <p>September 2023 – April 2024</p>
            </div>
        </div>
    )
}

export default Experience;

