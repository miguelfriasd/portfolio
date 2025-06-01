import { forwardRef } from "react";
import { motion } from "framer-motion";
import Me from "@assets/me.jpg"

const About = forwardRef<HTMLElement>((_props, ref) => {

  return (
        <motion.section 
            ref={ref}
            className="flex flex-col items-center gap-12 max-w-5xl w-full pt-30 lg:pt-45"
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            viewport={{once: true}}
        >
            <h1 className="text-zinc-200 text-5xl lg:text-6xl font-sans font-extrabold leading-tight">
               About Me
            </h1>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="text-zinc-300 text-md lg:text-lg font-light mb-5 space-y-4">
                    <p>
                        I'm a 23-year-old developer based in Sonora, México, recently graduated from Instituto Tecnológico de Sonora with a degree in Software Engineering. Over the past four years, I’ve focused primarily on backend development, working on several academic and personal projects.
                    </p>
                    <p>
                        I’m currently expanding into frontend development, learning React and Tailwind CSS through hands-on projects—like this portfolio. I enjoy solving real-world problems with clean, maintainable code and collaborating with others to build great software.
                    </p>
                    <p>
                        My goal is to grow as a full-stack developer and contribute to meaningful, impactful projects. Outside of tech, I enjoy music and exploring new hobbies.
                    </p>  
                </div>
                <img
                    className="border-3 border-solid bg-gradient-to-r bg-teal-300 to-blue-600 border-transparent max-w-xs rounded-lg object-cover"
                    src={Me}
                    alt="Picture of me."
                />
          </div>
        </motion.section>
  );
})

export default About;
