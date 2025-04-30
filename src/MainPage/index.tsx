import { Ref } from 'react';
import About from './About';
import Intro from './Intro';
import Tools from './Tools';

interface MainPageProps{
    introRef: Ref<HTMLDivElement> | undefined;
}

export default function MainPage({introRef}: MainPageProps){

    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-800 px-8 py-36 space-y-50">
            <Intro ref={introRef}/>
            <About/>   
            <Tools/>
        </div>
    );
}
