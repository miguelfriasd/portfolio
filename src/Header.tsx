interface HeaderProps{
    onMenuButtonClick: () => void;
    onLogoClick: () => void;
    onAboutClick: () => void;
    onProjectsClick: () => void;
    onToolsClick: () => void;
    onContactClick: () => void;
}

export default function Header({ onMenuButtonClick, onLogoClick, onAboutClick, onProjectsClick, onToolsClick, onContactClick}: HeaderProps) {

    return (

<header className="z-1 fixed top-0 w-full h-20 bg-zinc-800 shadow-md">
  <div className="w-screen h-1 bg-gradient-to-r from-teal-300 to-blue-600"></div>
  <nav className="flex items-center justify-between px-6 h-full">
    <img onClick={onLogoClick} className="size-36" src="/logo.png" alt="Logo" />

    {/* Right side container */}
    <div className="ml-auto flex items-center gap-3">
      {/* Menu spans (visible on md+) */}
      <div className="hidden md:flex gap-3">
        <span onClick={onAboutClick} className="text-gray-300 font-thin text-3xl transition-all hover:text-gray-500">About</span>
        <span className="text-gray-300 font-thin text-3xl">|</span>
        <span onClick={onProjectsClick} className="text-gray-300 font-thin text-3xl transition-all hover:text-gray-500">Projects</span>
        <span className="text-gray-300 font-thin text-3xl">|</span>
        <span onClick={onToolsClick} className="text-gray-300 font-thin text-3xl transition-all hover:text-gray-500">Tools</span>
        <span className="text-gray-300 font-thin text-3xl">|</span>
        <span onClick={onContactClick} className="text-gray-300 font-thin text-3xl transition-all hover:text-gray-500">Contact</span>
      </div>

      {/* Button (visible below md) */}
      <button 
        onClick={onMenuButtonClick} 
        className="md:hidden text-white text-4xl p-2 rounded-md hover:bg-zinc-700 focus:ring-2 focus:ring-white transition-all"
        aria-label="Toggle menu"
      >
        ///
      </button>
    </div>
  </nav>
</header>
    );
}
