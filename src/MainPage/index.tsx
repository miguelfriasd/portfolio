import { Ref } from 'react';
import About from './About';
import Intro from './Intro';
import Tools from './ToolsSection/Tools';
import Contact from './Contact';

interface MainPageProps{
    aboutRef: Ref<HTMLDivElement> | undefined;
    toolsRef: Ref<HTMLDivElement> | undefined;
    handleAboutClick: () => void;
}

export default function MainPage({aboutRef, handleAboutClick, toolsRef}: MainPageProps){

    return(
        <div className='min-h-screen bg-zinc-800'>
            <div className='flex flex-col justify-center items-center xl:mx-40 mx-20 space-y-45'>
                <Intro handleNext={handleAboutClick}/>
                <About ref={aboutRef}/>   
                <Tools ref={toolsRef}/>
                <Contact />
            </div> 
        </div>
    );
}
