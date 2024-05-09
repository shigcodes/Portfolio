const NavBar = () => {
  return (
    <div className="grid grid-cols-12 border-b border-black flex justify-between flex-row">
      <div className="col-span-5 border border-black">
        <img style={{ marginLeft: '30px' }} src="logo.png" alt="Tailwind Logo" width={80} height={80} />
      </div>
      <div className="col-span-7 border border-black flex justify-evenly gap-10 items-center p-5">
        <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
        <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
      </div>
    </div>
  );
}

export default NavBar

