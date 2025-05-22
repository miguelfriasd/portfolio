import { Ref } from "react";

interface ProjectsProps{
    ref: Ref<HTMLDivElement> | undefined;
}

export default function Projects({ ref }: ProjectsProps) {
    return(
        <section className="flex flex-col items-center w-full" ref={ref}>
            <h1 className="text-zinc-300 text-5xl md:text-6xl font-sans font-extrabold leading-tight" >Projects</h1>            
            <p className="text-zinc-300 text-lg md:text-xl font-light">The latest projects i have worked on.</p>

            {/*Card*/}
            <div className="w-full flex flex-col items-center lg:flex-row lg:items-stretch my-10">
              <img
                className="max-w-md w-full lg:max-w-sm rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
                src="/computer.jpg"
                alt="Sales system"
              />
              <div className="max-w-md w-full bg-white rounded-b-lg p-4 lg:rounded-b-none lg:rounded-r-lg lg:max-w-full flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <h1 className="text-gray-900 font-bold text-xl mb-2">Sample heading</h1>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="/logo.png"
                    alt=""
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
    );
}
