interface HeaderProps{
    onMenuButtonClick: () => void;
    onLogoClick: () => void;
}

export default function Header({ onMenuButtonClick, onLogoClick }: HeaderProps) {

    return (

        <header className="z-1 fixed top-0 w-full h-20 bg-zinc-800 shadow-md">
            <div className="w-screen h-1 bg-gradient-to-r bg-teal-300 to-blue-600"></div>
            <nav className="flex items-center justify-between px-6 h-full">
                <img onClick={onLogoClick} className="size-36" src="/logo.png" alt="Logo"/>
                <button 
                    onClick={onMenuButtonClick} 
                    className="text-white text-4xl p-2 rounded-md hover:bg-zinc-700 focus:ring-2 focus:ring-white transition-colors"
                    aria-label="Toggle menu"
                >
                    ///
                </button>
            </nav>
        </header>
    );
}
