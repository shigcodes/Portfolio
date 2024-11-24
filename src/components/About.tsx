const About = () => {
    return (
        <div id='about' style={{ paddingTop: '100px'}}  data-aos="zoom-in">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl" style={{
                    background: 'linear-gradient(to right, #687DF6, #8156E0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '3rem',
                    fontWeight: '500',
                    lineHeight: '1.2',
                    marginBottom: '10px'
                }}>About Me</h1> <hr style={{ border: '1px solid black', width: '300px' }} />
                <p className="m-5">
                    Discover more about me. Let's forge connections and set forth on a journey of exploration together!
                </p>
                <div className="flex flex-col items-center justify-center text-center p-5">
                    <div className="flex flex-col md:flex-row items-center">
                        <img style={{ width: '50%', alignSelf: 'center' }} src="profile2.png" alt="logo" />
                        <div className="flex flex-col justify-center">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Shigrid Ann Docil</h1>
                                <h2 className="font-medium p-3"> UI/UX | Software Developer </h2>
                            </div>
                            <div className="text-left">
                                <p className="text-lg m-10">
                                    Welcome to my digital space! I'm Shigrid Ann, a BS Information Technology student with a deep passion for <span style={{ fontWeight: 'bold', color: '#8156E0' }}>UI/UX</span> and <span style={{ fontWeight: 'bold', color: '#687DF6' }}>Software Developer</span> and <span style={{ fontWeight: 'bold', color: '#8156E0' }}>SEO</span>.  I specialize in crafting engaging, user-friendly digital experiences that are optimized for visibility, performance, and growth. Through various projects, I've gained hands-on experience in frontend development, graphic design, and implementing effective SEO strategies to enhance online presence and performance.
                                </p>
                                <p className="text-lg m-10">
                                I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in mind or want to connect over shared interests, feel free to reach out. I'm excited to contribute my expertise to your team and deliver exceptional, optimized digital solutions!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
