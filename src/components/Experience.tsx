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
            <div className="grid grid-cols-12 border-b border-black flex justify-between flex-row" style={{ width: '50%' }}>
                <div className="flex flex-col items-center justify-between border border-black col-span-6 p-4">
                    <h1 className="text-2xl"> New York, United States</h1>
                    <p className="text-sm text-gray-400">September 2023 – April 2024</p>
                    <h1 className="text-2xl"> Hamburg, Germany</h1>
                    <p className="text-sm text-gray-400">April 2023 – November 2024</p>
                    <h1 className="text-2xl"> Manila, Philippines</h1>
                    <p className="text-sm text-gray-400">May 2020 – July 2021</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }} className="col-span-6 border border-black" >
                    <img src="exp.png" alt="exp" />
                    <div className="flex flex-col items-center justify-between border border-black col-span-6 p-4">
                        <h1 className="text-2xl"> iOS Frontend Developer</h1>
                        <p className="text-sm text-gray-400">Lickability</p>
                        <h1 className="text-2xl"> Event Specialist</h1>
                        <p className="text-sm text-gray-400">Stackstream Dev Community</p>
                        <h1 className="text-2xl"> Freelance Graphic Designer</h1>
                        <p className="text-sm text-gray-400">PHB Worx International Inc.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;

