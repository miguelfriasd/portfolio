import './App.css'
import {useEffect, useState, useCallback, useRef} from 'react';
import Header from './Header';
import SidebarMenu from './SidebarMenu';
import MainPage from './MainPage/';

function App() {
    const [showSidebarMenu, setShowSidebarMenu] = useState(false);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const introRef = useRef<HTMLDivElement | null>(null);

    const handleLogoClick = useCallback(() => {
        //if(introRef.current){
        //    introRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        //}
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
        <div>
            <MainPage introRef={introRef}/>
            {showSidebarMenu && <SidebarMenu onClose={handleMenuClose} />}
            <Header onLogoClick={handleLogoClick} onMenuButtonClick={handleMenuButtonClick} />
            {/* Cursor element */}
            <div ref={cursorRef} className="cursor-trail"></div>
        </div>
    );
}

export default App;
