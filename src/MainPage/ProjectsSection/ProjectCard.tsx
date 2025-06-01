import ProjectCardProps from './ProjectCardProps'
import ProjectCardContent from './ProjectCardContent';
import { easeInOut, motion } from 'framer-motion';


export default function ProjectCard({
  title,
  body,
  image_url,
  repository_url,
  tags,
  type,
}: ProjectCardProps) {
  const mobileOverlayClass = type === 'left' ? 
    "absolute inset-0 bg-teal-800/70 text-white p-6 flex flex-col justify-between lg:hidden" 
        : 
    "absolute inset-0 bg-cyan-800/70 text-white p-6 flex flex-col justify-between lg:hidden";
  const desktopSectioClass = type === 'left' ? 
    "hidden lg:flex flex-col justify-between p-6 bg-gradient-to-r from-teal-800 to-teal-600 text-white w-full lg:w-3/5" 
        : 
    "hidden lg:flex flex-col justify-between p-6 bg-gradient-to-r from-cyan-800 to-cyan-600 text-white w-full lg:w-3/5";

  const mainClass = type === 'left' ? 
      "relative flex flex-col lg:flex-row w-full border border-zinc-900 shadow-lg rounded-lg overflow-hidden"
    :
      "relative flex flex-col lg:flex-row-reverse w-full border border-zinc-900 shadow-lg rounded-lg overflow-hidden"

  const initialX = type === 'left' ? 100 : -100;

    return (
        <motion.div
          className={mainClass}
          initial={{ x: initialX, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{once: true}}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            transition: {
              duration: 0.3,
              ease: easeInOut,
            },
          }}
        >
          {/* Image Section */}
          <div className="relative w-auto lg:w-2/5 h-96 lg:h-80">
            <img
              className="object-cover w-full h-full"
              src={image_url}
              alt={`${title} preview`}
            />

            {/* Mobile overlay */}
            <div className={mobileOverlayClass}>
              <ProjectCardContent
                title={title}
                body={body}
                tags={tags}
                repository_url={repository_url}
              />
            </div>
          </div>

          {/* Desktop section */}
          <div className={desktopSectioClass}>
            <ProjectCardContent
              title={title}
              body={body}
              tags={tags}
              repository_url={repository_url}
            />
          </div>
        </motion.div>
    );
}
