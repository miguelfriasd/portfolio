import { Ref } from 'react';
import ToolIcon from './ToolIcon';
import ToolGrid from './ToolGrid';

interface ToolsProps{
    ref: Ref<HTMLDivElement> | undefined;
}

export default function Tools({ ref }: ToolsProps) {

  return (
    <section ref={ref} className="w-full flex flex-col justify-center items-center">
        <h1 className="text-center text-zinc-300 text-5xl md:text-6xl font-sans font-extrabold leading-tight mb-20">
            My toolbox
        </h1>
        <div className='w-full flex justify-around flex-wrap'>
            <ToolGrid title='Misc' rowSize={3}>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' displayName='Linux'/>
                    <ToolIcon iconName='devicon-github-original' displayName='Github'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg' displayName='Neovim'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' displayName='Docker'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg' displayName='DBeaver'/>
            </ToolGrid>
            <ToolGrid title='Languages' rowSize={3}>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' displayName='Javascript'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' displayName='Typescript'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' displayName='Java'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' displayName='MySQL'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' displayName='PostgreSQL'/>
            </ToolGrid>
            <ToolGrid title='Frameworks' rowSize={3}>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' displayName='React'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' displayName='TailwindCSS'/>
                    <ToolIcon iconName='devicon-express-original' displayName='Express'/>
            </ToolGrid>
        </div>
    </section>
  );
}
