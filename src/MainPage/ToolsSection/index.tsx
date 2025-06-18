import { forwardRef } from 'react';
import ToolIcon from './ToolIcon';
import ToolGrid from './ToolGrid';
import { motion } from 'framer-motion';

const Tools = forwardRef<HTMLElement>((_props, ref) => {

  return (
        <motion.section 
            ref={ref}
            className='w-full flex flex-col justify-center items-center pt-24 lg:pt-45'
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            viewport={{once: true}}
            aria-labelledby="section-heading"
        >
            <h1 id="section-heading" className="text-center mx-auto text-zinc-200 text-4xl lg:text-6xl sm:text-5xl font-sans font-extrabold leading-tight mb-20">
                My Toolbox
            </h1>
            <div className="w-full flex flex-col lg:flex-row justify-around flex-wrap gap-y-12">
                <ToolGrid title='Development Tools' rowSize={2}>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' displayName='Linux'/>
                    <ToolIcon iconName='devicon-github-original' displayName='GitHub'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg' displayName='Neovim'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' displayName='Docker'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg' displayName='DBeaver'/>
                </ToolGrid>
                <ToolGrid title='Languages & Databases' rowSize={2}>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' displayName='JavaScript'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' displayName='TypeScript'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' displayName='Java'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' displayName='MySQL'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' displayName='PostgreSQL'/>
                </ToolGrid> 
                <ToolGrid title='Frameworks & Libraries' rowSize={2}>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' displayName='React'/>
                    <ToolIcon imgSrc='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' displayName='TailwindCSS'/>
                    <ToolIcon iconName='devicon-nextjs-plain' displayName='Next.js'/>
                    <ToolIcon iconName='devicon-express-original' displayName='Express'/>
                </ToolGrid>
            </div>
        </motion.section>
  );
})

export default Tools;
