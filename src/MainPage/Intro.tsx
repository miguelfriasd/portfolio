import { Ref } from "react";

interface IntroProps{
    ref: Ref<HTMLDivElement> | undefined;
}

export default function Intro({ref}: IntroProps) {

    return (
        <div ref={ref} className="flex flex-col items-center text-center space-y-12">
            <h2 className="self-start text-gray-200 text-3xl md:text-4xl font-light tracking-wide">
                Hi! My name is
            </h2>
            <h1 className="pb-6 text-9xl md:text- font-extrabold drop-shadow-lg text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-teal-300 to-blue-600">
                Miguel Frías
            </h1>
            <h2 className="text-gray-200 text-2xl md:text-4xl font-medium italic max-w-2xl leading-relaxed">
                I am a <span className="text-blue-400 font-semibold">passionate</span> software developer always looking for opportunities to learn and improve my development skills.
            </h2>
        </div>
    );
}
