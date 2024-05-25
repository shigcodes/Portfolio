const Hero = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-12 border-b border-black flex justify-between flex-row" style={{ width: '90%' }}>
                <div className="col-span-6 border border-black flex flex-col justify-center p-5">
                    <div className="border border-black">
                        <h1 style={{
                            fontSize: '50px',
                            fontWeight: '500'
                        }}>Hello it's me,</h1>
                        <h1 className="text-4xl" style={{
                            background: 'linear-gradient(to right, #687DF6, #8156E0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: '50px',
                            fontWeight: '500',
                            lineHeight: '1.2',
                            marginBottom: '10px'
                        }}>Shigrid Ann</h1>
                        <p style={{
                            fontSize: '16px',
                            fontWeight: '200'
                        }}>Philippine-based UI/UX and Software Developer with a passion for crafting unforgettable digital experiences. Let's collaborate to build the web of tomorrow, one pixel at a time!</p>
                        <div className="flex justify-center">
                            <button style={{
                                borderRadius: '50px',
                                background: 'linear-gradient(to right, #687DF6, #8156E0)',
                                color: 'white',
                                padding: '10px 40px',
                                border: '2px solid',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                My Resume <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                            </button>
                            <div className="on-dark">
                                <button className="border-gradient border-gradient-purple rounded-full" style={{ borderRadius: '20px', color: 'black' }}>
                                    I have a gradient
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <img style={{ width: '100%' }} src="mainprofile.png" alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Hero;

