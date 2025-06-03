import MenuProps from "./MenuProps";
import Menu from "@assets/menu.png"
import Logo from "@assets/logo.png"

export default function Header({ onMenuButtonClick, onLogoClick, onAboutClick, onProjectsClick, onToolsClick, onContactClick}: MenuProps) {

    return (
        <header className="z-1 fixed top-0 w-full h-20 bg-zinc-800 shadow-md">
          <div className="w-screen h-1 bg-gradient-to-r from-teal-300 to-blue-600"></div>
          <nav className="flex items-center justify-between px-6 h-full">
            <img onClick={onLogoClick} className="cursor-pointer w-22 h-auto" src={Logo} alt="Logo" />

            {/* Right side container */}
            <div className="ml-auto flex items-center gap-3">
              {/* Menu spans (visible on md+) */}
              <div className="hidden md:flex gap-3">
                <span onClick={onAboutClick} className="cursor-pointer text-gray-300 font-sans text-xl transition-all hover:text-gray-500">About</span>
                <span onClick={onProjectsClick} className="cursor-pointer text-gray-300 font-sans text-xl transition-altrue hover:text-gray-500">Projects</span>
                <span onClick={onToolsClick} className="cursor-pointer text-gray-300 font-sans text-xl transition-all hover:text-gray-500">Tools</span>
                <span onClick={onContactClick} className="cursor-pointer text-gray-300 font-sans text-xl transition-all hover:text-gray-500">Contact</span>
              </div>

                {/* Button (visible below md) */}
                <div 
                  onClick={onMenuButtonClick}
                  className="cursor-pointer md:hidden w-14 h-14 rounded-full bg-transparent hover:bg-zinc-700 focus:ring-2 focus:ring-white transition-all flex items-center justify-center"
                  aria-label="Toggle menu"
                >
                  <img 
                    src={Menu} 
                    alt="Menu" 
                    className="w-8 h-8"
                  />
                </div>
            </div>
          </nav>
        </header>
    );
}
