import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import Portfolio from "@assets/portfolio.png"
import Computer from "@assets/computer.jpg"
import Sports from "@assets/sports.jpg"
import Attendance from "@assets/attendance.jpg"
import { forwardRef } from "react";

const Projects = forwardRef<HTMLElement>((_props, ref) => {

    return(
        <motion.section 
            ref={ref}
            className="flex flex-col items-center w-full gap-12 pt-45"
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            viewport={{once: true}}
        >
            <h1 className="text-zinc-200 text-5xl lg:text-6xl font-sans font-extrabold leading-tight" >Recent Projects</h1>            
            <ProjectCard 
                type="left"
                title="Personal Portfolio" 
                body="You're currently viewing this project! The idea behind it was to create something that reflects who I am—both personally and professionally—while also helping me improve my frontend development skills using React and TailwindCSS." 
                tags={['TailwindCSS', 'React', 'Typescript']} 
                image_url={Portfolio} 
                repository_url="https://github.com/miguelfriasd/portfolio"/
            >
            <ProjectCard
                type="right"
                title="Attendance Control App" 
                body="An attendance control app for one of my professors at ITSON, to streamline and simplify the student check-in process. The app uses Bluetooth to scan for nearby devices and automatically registers a student's attendance when their phone is detected." 
                tags={['Kotlin', 'SQLite']} 
                image_url={Attendance}
            />
            <ProjectCard 
                type="left"
                title="Macrocycle Management Web App" 
                body="A web application for ITSON’s sports complex to track athlete performance across each macrocycle. The application facilitates planning by calculating and registering individualized macrocycle plans for each of the school’s sports"
                tags={['Typescript', 'PostgreSQL']} 
                image_url={Sports} 
            />
            <ProjectCard
                type="right"
                title="Sales Management System" 
                body="A desktop sales management system developed for a local water purification company, with features for inventory control, sales tracking, and report generation." 
                tags={['Java', 'MySQL']} 
                image_url={Computer}
            />
        </motion.section>
    );
})

export default Projects
