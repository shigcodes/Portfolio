const Hero = () => {
    return (
        <div className="flex justify-center items-center m-10">
            <div className="grid grid-cols-12 flex justify-between flex-row" style={{ width: '90%' }}>
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center p-5">
                    <div>
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
                            fontWeight: '200',
                            padding: '10px 0'
                        }}>Philippine-based UI/UX and Software Developer with a passion for crafting unforgettable digital experiences. Let's collaborate to build the web of tomorrow, one pixel at a time!</p>
                        <div className="flex justify-start p-3">
                            <button style={{
                                borderRadius: '50px',
                                background: 'linear-gradient(to right, #687DF6, #8156E0)',
                                color: 'white',
                                padding: '10px 40px',
                                border: '2px solid',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '20px'
                            }}>
                                My Resume <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                            </button>
                            <button style={{
                                borderRadius: '50px',
                                background: 'transparent',
                                color: '#8156E0',
                                padding: '10px 40px',
                                border: '2px solid #8156E0',
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

