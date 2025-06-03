import './App.css'
import {useEffect, useState, useCallback, useRef} from 'react';
import Header from './Header';
import SidebarMenu from './SidebarMenu';
import MainPage from './MainPage/';
import Footer from './footer';

function App() {
    const [showSidebarMenu, setShowSidebarMenu] = useState(false);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const toolsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const handleAboutClick = useCallback(() => {
        if(aboutRef.current){
            aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    const handleProjectsClick = useCallback(() => {
        if(projectsRef.current){
            projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    const handleToolsClick = useCallback(() => {
        if(toolsRef.current){
            toolsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    const handleContactClick = useCallback(() => {
        if(contactRef.current){
            contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    const handleLogoClick = useCallback(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

    const handleMenuButtonClick = useCallback(() => {
        setShowSidebarMenu(true);
    }, []);

    const handleMenuClose = useCallback(() => {
        setShowSidebarMenu(false);
    }, []);

    useEffect(() => {
        if (showSidebarMenu) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [showSidebarMenu]);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.pageX}px`;
                cursorRef.current.style.top = `${e.pageY}px`;
            }
        };

        document.addEventListener("mousemove", moveCursor);
        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div className='bg-zinc-800'>
            <MainPage 
                aboutRef={aboutRef} 
                projectsRef={projectsRef} 
                toolsRef={toolsRef}
                contactRef={contactRef} 
                handleAboutClick={handleAboutClick}
            />
            <SidebarMenu 
                isVisible={showSidebarMenu} 
                handleClose={handleMenuClose} 
                onAboutClick={handleAboutClick} 
                onProjectsClick={handleProjectsClick} 
                onToolsClick={handleToolsClick} 
                onContactClick={handleContactClick} 
                onLogoClick={handleLogoClick} 
            />
            <Header 
                onAboutClick={handleAboutClick} 
                onProjectsClick={handleProjectsClick} 
                onToolsClick={handleToolsClick} 
                onContactClick={handleContactClick} 
                onLogoClick={handleLogoClick} 
                onMenuButtonClick={handleMenuButtonClick} 
            />
            <Footer/>
            {/* Cursor element */}
            <div ref={cursorRef} className="hidden lg:block cursor-trail"></div>
        </div>
    );
}

export default App;
