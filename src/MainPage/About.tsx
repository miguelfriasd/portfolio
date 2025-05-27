import { Ref } from "react";

interface AboutProps{
    ref: Ref<HTMLDivElement> | undefined;
}

export default function About({ref}: AboutProps) {

  return (
      <section ref={ref} className="flex flex-col items-center gap-12 max-w-5xl w-full pt-25">
        <h1 className="text-zinc-200 text-5xl lg:text-6xl font-sans font-extrabold leading-ticenterght">
           About me
        </h1>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div>
              <p className="text-zinc-300 text-md lg:text-lg font-light mb-5">
                I am a 23 year old Ciudad Obregón, Sonora, México based developer. Recently i graduated from Instituto Tecnológico de Sonora with a degree on Software engineering, where for the last four years i worked on several projects, mainly as a backend developer. I am trying to get better at frontend development with projects like this portfolio.
              </p>
              <p className="text-zinc-300 text-md lg:text-lg font-light">
                I am a 23 year old Ciudad Obregón, Sonora, México based developer. Recently i graduated from Instituto Tecnológico de Sonora with a degree on Software engineering, where for the last four years i worked on several projects, mainly as a backend developer. I am trying to get better at frontend development with projects like this portfolio.
              </p>
          </div>
          <img
            className="border-3 border-solid bg-gradient-to-r bg-teal-300 to-blue-600 border-transparent max-w-xs rounded-lg object-cover"
            src="me.jpg"
            alt="Picture of me."
          />
        </div>

      </section>
  );
}
