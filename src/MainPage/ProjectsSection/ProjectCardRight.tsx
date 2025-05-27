import ProjectCardProps from "./ProjectCardProps";

export default function ProjectCardRight({ title, body, image_url }: ProjectCardProps) {

  return (
    <div className="relative flex flex-col lg:flex-row-reverse border border-zinc-900 shadow-lg rounded-lg my-10 overflow-hidden transition-all hover:-skew-x-2">
      
      {/* Image Section */}
      <div className="relative w-auto lg:w-2/5 h-96 lg:h-auto">
        <img
          className="object-cover w-full h-full"
          src={image_url}
          alt="Project Image"
        />

        {/* Overlay text on small screens only */}
        <div className="absolute inset-0 bg-cyan-800/70 text-white p-6 flex flex-col justify-between lg:hidden">
          <div>
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            <p className="text-zinc-200">{body}</p>
          </div>
            <div className="flex flex-row items-center mt-4 text-xs font-bold gap-5">
                <p className="text-zinc-300 bg-zinc-200/10">Java</p>
                <p className="text-zinc-300 bg-zinc-200/10">Typescript</p>
                <p className="text-zinc-300 bg-zinc-200/10">Javascript</p>
            </div>
          </div>
      </div>

      {/* Text block for large screens only */}
      <div className="hidden lg:flex flex-col justify-between p-6 bg-cyan-800 text-white w-full lg:w-3/5">
        <div>
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          <p className="text-zinc-200">{body}</p>
        </div>
        <div className="flex flex-row items-center mt-4 text-xs font-bold gap-5">
            <p className="text-zinc-300 bg-zinc-200/15">Java</p>
            <p className="text-zinc-300 bg-zinc-200/15">Typescript</p>
            <p className="text-zinc-300 bg-zinc-200/15">Javascript</p>
        </div>
      </div>
    </div>
  );
}
