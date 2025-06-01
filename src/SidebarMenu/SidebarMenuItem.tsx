interface SidebarMenuItemProps{
    heading: string;
    icon_url: string;
    onClick: () => void;
}

export default function SidebarMenuItem({heading, icon_url, onClick}: SidebarMenuItemProps){
    return ( 
        <li className="cursor-pointer">
            <div 
                className="flex flex-row w-full items-center gap-3 p-4 text-xl text-gray-300 font-sans transition-all hover:bg-zinc-700 "
                onClick={onClick}
            >
                <img className="size-6" src={icon_url} alt=""/>
                <h1>{heading}</h1>
            </div>
        </li>       
    )
}
