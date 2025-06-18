import { Ref } from 'react';
import About from './About';
import Intro from './Intro';
import Tools from './ToolsSection';
import Contact from './Contact';
import Projects from './ProjectsSection';

interface MainPageProps{
    aboutRef: Ref<HTMLDivElement> | undefined;
    toolsRef: Ref<HTMLDivElement> | undefined;
    contactRef: Ref<HTMLDivElement> | undefined;
    projectsRef: Ref<HTMLDivElement> | undefined;
    handleAboutClick: () => void;
}

export default function MainPage({aboutRef, projectsRef, handleAboutClick, toolsRef, contactRef}: MainPageProps){

    return(
        <div className='container mx-auto flex flex-col justify-center items-center sm:px-0 px-4 space-y-5 sm:space-y-15 lg:space-y-25'>
            <Intro handleNext={handleAboutClick}/>
            <About ref={aboutRef}/>   
            <Projects ref={projectsRef}/>
            <Tools ref={toolsRef}/>
            <Contact ref={contactRef}/>
        </div> 
    );
}
