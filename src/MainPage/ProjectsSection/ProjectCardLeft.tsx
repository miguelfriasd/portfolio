import ProjectCardProps from './ProjectCardProps'

export default function ProjectCardLeft({ title, body, image_url, repository_url }: ProjectCardProps) {

  return (
    <div className="relative flex flex-col lg:flex-row border border-zinc-900 shadow-lg rounded-lg my-10 overflow-hidden transition-all hover:skew-x-2">
      
      {/* Image Section */}
      <div className="relative w-auto lg:w-2/5 h-96 lg:h-auto">
        <img
          className="object-cover w-full h-full"
          src={image_url}
          alt="Project Image"
        />

        {/* Overlay text on small screens only */}
        <div className="absolute inset-0 bg-teal-800/70 text-white p-6 flex flex-col justify-between lg:hidden">
          <div>
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            <p className="text-zinc-200">{body}</p>
          </div>
          <div className="flex flex-row items-center mt-4 text-xs font-bold justify-between">
                <div className="flex flex-row justify-between gap-5">
                    <p className="text-zinc-300 bg-zinc-200/15">Java</p>
                    <p className="text-zinc-300 bg-zinc-200/15">Typescript</p>
                    <p className="text-zinc-300 bg-zinc-200/15">Javascript</p>
                </div>
                {repository_url && 
                    <a href={repository_url} className='p-2 rounded-lg bg-white text-zinc-800'>
                        <div className='flex items-center gap-1'>
                            <span>Source Code</span>
                            <img className='w-5 h-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                        </div>
                    </a>
                }
          </div>
        </div>
      </div>

      {/* Text block for large screens only */}
      <div className="hidden lg:flex flex-col justify-between p-6 bg-teal-800 text-white w-full lg:w-3/5">
        <div>
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          <p className="text-zinc-200">{body}</p>
        </div>
          <div className="flex flex-row items-center mt-4 text-xs font-bold justify-between">
                <div className="flex flex-row justify-between gap-5">
                    <p className="text-zinc-300 bg-zinc-200/15">Java</p>
                    <p className="text-zinc-300 bg-zinc-200/15">Typescript</p>
                    <p className="text-zinc-300 bg-zinc-200/15">Javascript</p>
                </div>
                {repository_url && 
                    <a href={repository_url} className='p-2 rounded-lg bg-white text-zinc-800'>
                        <div className='flex items-center gap-1'>
                            <span>Source Code</span>
                            <img className='w-5 h-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                        </div>
                    </a>
                }
          </div>
      </div>
    </div>
  );
}
