interface ToolIconProps{
    displayName: string;
    iconName?: string;
    imgSrc?: string
}

export default function ToolIcon ({imgSrc, iconName, displayName}: ToolIconProps) {
    const classes = 'mb-2 transition-all duration-200 ease-in group-hover:scale-115';
    const iconClasses = `text-8xl text-white ${classes} ${iconName}`;
    const imgClasses = `w-24 h-24 ${classes}`;;

    return (
        <div 
            className="group flex flex-col rounded-lg p-3 mx-2 my-1 transform transition-all duration-200 ease-in hover:bg-zinc-700"
        >
            {imgSrc && <img className={imgClasses} src={imgSrc} alt="" />}
            {iconName && !imgSrc && <i className={iconClasses}/>}
            <span className="text-center text-zinc-800 transition-all duration-200 ease-in group-hover:text-zinc-300">{displayName}</span>
        </div>
    )
}

