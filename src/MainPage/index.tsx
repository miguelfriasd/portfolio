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
        <div className='flex flex-col justify-center items-center mx-10 md:mx-40 sm:mx-20 space-y-25'>
            <Intro handleNext={handleAboutClick}/>
            <About ref={aboutRef}/>   
            <Projects ref={projectsRef}/>
            <Tools ref={toolsRef}/>
            <Contact ref={contactRef}/>
        </div> 
    );
}
