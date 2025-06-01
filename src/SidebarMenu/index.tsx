import { AnimatePresence, motion } from "framer-motion";
import MenuProps from "../MenuProps";
import SidebarMenuItem from "./SidebarMenuItem";
import Logo from "@assets/logo.png"
import Close from "@assets/close.png"
import About from "@assets/about.png"
import Projects from "@assets/projects.png"
import Tools from "@assets/tools.png"
import Contact from "@assets/contact.png"


interface SidebarMenuProps extends MenuProps{
    isVisible: boolean;
    handleClose: () => void;
}

export default function SidebarMenu({ onLogoClick, onAboutClick, onProjectsClick, onContactClick, onToolsClick, isVisible, handleClose }: SidebarMenuProps) {

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div key="sidebar-wrapper">
                    {/* Backdrop */}
                    <motion.div 
                        onClick={handleClose} 
                        className="z-2 fixed inset-0 bg-black/50 backdrop-blur-sm"
                        whileInView={{opacity: 1}}
                        initial={{opacity:0}}
                        exit={{opacity:0}}
                        transition={{duration:0.5}}
                        key="backdrop"
                    />

                    {/* Sidebar */}
                    <motion.div 
                        className="z-2 fixed rounded-l-xl right-0 top-0 h-screen w-64 bg-zinc-800 shadow-lg flex flex-col"
                        whileInView={{opacity: 1, x:0}}
                        initial={{opacity:0, x: 100}}
                        exit={{opacity:0, x: 100}}
                        transition={{duration:0.5}}
                        key="sidebar"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center border-b py-3 px-4 mb-4 border-zinc-700">
                            <img onClick={() => {
                                handleClose();
                                onLogoClick();
                            }} className="cursor-pointer w-20 h-auto" src={Logo} alt="Menu"/ >
                            <img onClick={handleClose} className="cursor-pointer w-12 p-3 h-auto rounded-full hover:bg-zinc-700 focus:ring-2 focus:ring-white transition-all" src={Close} alt="Close"/ >
                        </div>

                        {/* Menu Items */}
                        <ul>
                            <SidebarMenuItem 
                                heading="About" 
                                icon_url={About}
                                onClick={() =>{
                                    handleClose();
                                    onAboutClick();
                                }}
                            />
                            <SidebarMenuItem 
                                heading="Projects" 
                                icon_url={Projects}
                                onClick={() =>{
                                    handleClose();
                                    onProjectsClick();
                                }}
                            />
                            <SidebarMenuItem 
                                heading="Tools" 
                                icon_url={Tools}
                                onClick={() =>{
                                    handleClose();
                                    onToolsClick();
                                }}
                            />
                            <SidebarMenuItem 
                                heading="Contact" 
                                icon_url={Contact}
                                onClick={() =>{
                                    handleClose();
                                    onContactClick();
                                }}
                            />
                        </ul> 
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
