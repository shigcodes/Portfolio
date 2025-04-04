import { useState, useEffect } from 'react';

const Hero = () => {

    const [resumeButtonHover, setResumeButtonHover] = useState(false);
    const [helloButtonHover, setHelloButtonHover] = useState(false);
    const [text, setText] = useState('');
    const fullName = 'Shigrid Ann';
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        if (index < fullName.length && !isDeleting) {
            setTimeout(() => {
                setText(fullName.slice(0, index + 1));
                setIndex(index + 1);
            }, speed);
        } else if (isDeleting) {
            setTimeout(() => {
                setText(fullName.slice(0, index - 1));
                setIndex(index - 1);
            }, speed);
        }

        if (index === fullName.length) {
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (index === 0 && isDeleting) {
            setIsDeleting(false);
            setSpeed(150);
        }

        if (isDeleting) {
            setSpeed(150);
        }
    }, [index, isDeleting]);

    return (
        <div className="flex justify-center items-center" style={{ height: '100vh' }} data-aos="fade-down">
            <div className="grid grid-cols-12 flex justify-between flex-row" style={{ width: '90%' }}>
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center p-5 ">
                    <div>
                        <h1 style={{
                            fontSize: '50px',
                            fontWeight: '500',
                            marginTop: '10px'
                        }}>Hello it's me,</h1 >
                        <div style={{
                            height: '72px', 
                            overflow: 'hidden' 
                        }}>
                            <h1 className="text-4xl" style={{
                                background: 'linear-gradient(to right, #687DF6, #8156E0)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: '60px',
                                fontWeight: '600',
                                lineHeight: '1.2',
                                marginBottom: '30px'
                            }}>{text}</h1>
                        </div>
                        <p style={{
                            fontSize: '20px',
                            fontWeight: '400',
                            padding: '10px 0',
                            marginBottom: '20px',
                            marginTop: '30px'
                        }}>Philippine-based <span style={{ fontWeight: 'bold', color: '#8156E0' }}>Web Developer</span> and <span style={{ fontWeight: 'bold', color: '#687DF6' }}>Designer</span> with technical experience in <span style={{ fontWeight: 'bold', color: '#8156E0' }}>SEO</span>. I specialize in creating engaging, user-friendly digital experiences that are optimized for visibility, performance, and growth. Let’s innovate and elevate the web together!</p>
                        <div className="flex justify-start p-3">
                            <button
                                onMouseEnter={() => setResumeButtonHover(true)}
                                onMouseLeave={() => setResumeButtonHover(false)}
                                className="hover:scale-110 transition-transform duration-300 ease-in-out"
                                style={{
                                    borderRadius: '50px',
                                    background: resumeButtonHover ? 'linear-gradient(to right, #8156E0, #687DF6)' : 'linear-gradient(to right, #687DF6, #8156E0)',
                                    color: 'white',
                                    padding: '10px 40px',
                                    border: '2px solid',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '20px',
                                }}>
                                My Resume <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                            </button>
                            <button
                                onMouseEnter={() => setHelloButtonHover(true)}
                                onMouseLeave={() => setHelloButtonHover(false)}
                                className="hover:scale-110 transition-transform duration-300 ease-in-out"
                                onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                style={{
                                    borderRadius: '50px',
                                    background: helloButtonHover ? '#8156E0' : 'transparent',
                                    color: helloButtonHover ? 'white' : '#8156E0',
                                    padding: '10px 40px',
                                    border: `2px solid ${helloButtonHover ? 'white' : '#8156E0'}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '16px',
                                    fontWeight: '500'
                                }}>
                                Say Hello
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 hidden md:block">
                    <img style={{ width: '100%' }} src="mainprofile.png" alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
