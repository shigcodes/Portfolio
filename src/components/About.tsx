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
                                <h2 className="font-medium p-3"> UI/UX Designer | Software Developer </h2>
                            </div>
                            <div className="text-left">
                                <p className="text-lg m-10">
                                    Welcome to my digital space! I'm Shigrid Ann, a BS Information Technology student with a deep passion for <span className="text-blue-500 font-bold">UI/UX</span> and <span className="text-purple-500 font-bold">Software Development</span>. I offer hands-on experience in frontend development and graphic design through freelance projects. With a solid foundation in UI/UX design, I bring practical skills in creating captivating user interfaces.
                                </p>
                                <p className="text-lg m-10">
                                    I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in mind or just want to connect over a shared interest, feel free to reach out. Eager to leverage this expertise to contribute effectively to your team and deliver exceptional digital solutions!
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
