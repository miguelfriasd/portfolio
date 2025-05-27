import { Ref } from "react";
import ProjectCardLeft from "./ProjectCardLeft";
import ProjectCardRight from "./ProjectCardRight";

interface ProjectsProps{
    ref: Ref<HTMLDivElement> | undefined;
}

export default function Projects({ ref }: ProjectsProps) {
    return(
        <section className="flex flex-col items-center w-full pt-25" ref={ref}>
            <h1 className="text-zinc-200 text-5xl md:text-6xl font-sans font-extrabold leading-tight" >Projects</h1>            
            <p className="text-zinc-300 text-lg md:text-xl font-light">The latest projects i have worked on.</p>
            <ProjectCardLeft title="Heading 1" body="fasdfasd adsfasd fasdfs" image_url="/computer.jpg"/>
            <ProjectCardRight title="Heading 2" body="afsdfas asdfasdf adfasdfa" image_url="/computer.jpg"/>
            <ProjectCardLeft title="Heading 3" body="fasdfasd adsfasd fasdfs" image_url="/computer.jpg"/>
            <ProjectCardRight title="Heading 2" body="afsdfas asdfasdf adfasdfa" image_url="/computer.jpg"/>
            <ProjectCardLeft title="Button test" body="fasdfasd adsfasd fasdfs" image_url="/computer.jpg" repository_url="https://www.github.com"/>
        </section>
    );
}
