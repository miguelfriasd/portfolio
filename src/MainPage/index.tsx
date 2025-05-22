import { Ref } from 'react';
import About from './About';
import Intro from './Intro';
import Tools from './ToolsSection/Tools';
import Contact from './Contact';
import Projects from './Projects';

interface MainPageProps{
    aboutRef: Ref<HTMLDivElement> | undefined;
    toolsRef: Ref<HTMLDivElement> | undefined;
    contactRef: Ref<HTMLDivElement> | undefined;
    projectsRef: Ref<HTMLDivElement> | undefined;
    handleAboutClick: () => void;
}

export default function MainPage({aboutRef, projectsRef, handleAboutClick, toolsRef, contactRef}: MainPageProps){

    return(
        <div className='min-h-screen bg-zinc-800'>
            <div className='flex flex-col justify-center items-center xl:mx-40 mx-20 space-y-45'>
                <Intro handleNext={handleAboutClick}/>
                <About ref={aboutRef}/>   
                <Projects ref={projectsRef}/>
                <Tools ref={toolsRef}/>
                <Contact ref={contactRef}/>
            </div> 
        </div>
    );
}
