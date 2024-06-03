import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div id='contact' style={{ paddingTop: '100px', paddingLeft: '0', paddingRight: '0' }}  data-aos="fade-down">
            <div className=" flex flex-col items-center justify-center text-center" style={{ width: '100%' }}>
                <h1 className="text-4xl" style={{
                    background: 'linear-gradient(to right, #687DF6, #8156E0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '50px',
                    fontWeight: '500',
                    lineHeight: '1.2',
                    marginBottom: '10px'
                }}>Get in Touch</h1> <hr style={{ border: '1px solid black', width: '300px' }} />
                <p className="m-5">
                    Reach out and let's craft a path of creativity and success for your next big project!
                </p>
                <div className="flex flex-wrap justify-center md:space-x-4 p-5">
                    <div className="flex flex-col items-center m-5">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <img src="linkedin.png" alt="LinkedIn" />
                        </div>
                        <button className="mt-2 text-white py-1 px-3 rounded" style={{ backgroundColor: '#6A7CF5' }}>View LinkedIn</button>
                    </div>
                    <div className="flex flex-col items-center m-5">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <img src="gmail.png" alt="Gmail" />
                        </div>
                        <button className="mt-2 text-white py-1 px-3 rounded " style={{ backgroundColor: '#6A7CF5' }}>Send me an Email</button>
                    </div>
                    <div className="flex flex-col items-center m-5">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <img src="whatsapp.png" alt="Whatsapp" />
                        </div>
                        <button className="mt-2 text-white py-1 px-3 rounded " style={{ backgroundColor: '#6A7CF5' }}>Send a Message</button>
                    </div>
                    <div className="flex flex-col items-center m-5">
                        <div className="w-24 h-24 flex items-center justify-center">
                            <img src="instagram.png" alt="Instagram" />
                        </div>
                        <button className="mt-2 text-white py-1 px-3 rounded" style={{ backgroundColor: '#6A7CF5' }}>View Instagram</button>
                    </div>
                </div>
                <footer className="bg-purple-500 text-white py-4 w-full text-center p-5" style={{ backgroundColor: '#6A7CF5', width: '100%' }}>
                    <div className="flex justify-center space-x-4 mt-4 m-3">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div >
                    <p className='m-2'>SAD | PORTFOLIO</p>
                    <p className='m-2'>2024 © Shigrid Ann Docil · All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    )
}

export default Contact;
