import React from 'react';

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl" style={{
                background: 'linear-gradient(to right, #687DF6, #8156E0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '50px',
                fontWeight: '500',
                lineHeight: '1.2',
                marginBottom: '10px'
            }}>Experience
            </h1>
            <hr style={{ border: '1px solid black', width: '300px' }} />
            <p className="m-5">
                Explore my work experience and let's discover the potential for collaboration.
            </p>
            <div className="grid grid-cols-12 gap-4 relative" style={{ width: '80%' }}>
                <div className="col-span-5 flex flex-col items-center border border-black">
                    <div className="mb-8">
                        <h1 className="text-2xl">New York, United States</h1>
                        <p className="text-sm text-gray-400">September 2023 – April 2024</p>
                    </div>
                    <div className="mb-8">
                        <h1 className="text-2xl">Hamburg, Germany</h1>
                        <p className="text-sm text-gray-400">April 2023 – November 2024</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Manila, Philippines</h1>
                        <p className="text-sm text-gray-400">May 2020 – July 2021</p>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-between relative border border-black">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-dashed mb-8 z-10"></div>
                    <div className="w-8 h-8 bg-black rounded-full border-2 border-dashed mb-8 z-10"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-dashed z-10"></div>
                    <div className="h-full w-0.5 border-l-2 border-dashed border-gray-500 absolute" style={{ top: '0', left: '50%', transform: 'translateX(-50%)' }}></div>
                </div>
                <div className="col-span-5 flex flex-col items-center border border-black">
                    <div className="mb-8">
                        <h1 className="text-2xl">iOS Frontend Developer</h1>
                        <p className="text-sm text-gray-400">Lickability</p>
                    </div>
                    <div className="mb-8">
                        <h1 className="text-2xl">Event Specialist</h1>
                        <p className="text-sm text-gray-400">Stackstream Dev Community</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Freelance Graphic Designer</h1>
                        <p className="text-sm text-gray-400">PHB Worx International Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

