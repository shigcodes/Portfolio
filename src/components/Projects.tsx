const Projects = () => {
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
            <p>
                Here's a glimpse into the cool projects I've had the pleasure to work on. Dive in and explore!
            </p>
        </div>
    )
}

export default Projects

