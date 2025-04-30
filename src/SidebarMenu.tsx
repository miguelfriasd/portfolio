interface SidebarMenuProps{
    onClose: () => void;
}

export default function SidebarMenu({ onClose }: SidebarMenuProps) {

    return (
        <>
            {/* Backdrop */}
            <div 
                onClick={onClose} 
                className="z-2 fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <div 
                className="z-2 fixed rounded-l-xl right-0 top-0 h-screen w-64 bg-zinc-800 shadow-lg flex flex-col"
            >
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-700">
                    <h1 className="text-lg font-semibold text-white">Menu</h1>
                    <button 
                        onClick={onClose} 
                        className="text-white text-xl p-2 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="space-y-3 px-6 py-4 text-white">
                    <li className="hover:text-zinc-300 cursor-pointer">
                        <span>Hola</span>
                    </li>       
                    <li className="hover:text-zinc-300 cursor-pointer">
                        <span>Adios</span>
                    </li>       
                </ul> 
            </div>
        </>
    );
}
