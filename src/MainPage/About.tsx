
export default function About() {

  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
        
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            About me
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl font-light">
            I am a 23 year old Ciudad Obregón, Sonora, México based developer. Recently i graduated from Instituto Tecnológico de Sonora with a degree on Software engineering, where for the last four years i worked on several projects, mainly as a backend developer. I am trying to get better at frontend development with projects like this portfolio.
          </p>
          <p className="text-zinc-300 text-lg md:text-xl font-light">
            I am a 23 year old Ciudad Obregón, Sonora, México based developer. Recently i graduated from Instituto Tecnológico de Sonora with a degree on Software engineering, where for the last four years i worked on several projects, mainly as a backend developer. I am trying to get better at frontend with projects like this portfolio.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="border-3 border-solid bg-gradient-to-r bg-teal-300 to-blue-600 border-transparent max-w-md w-full h-auto rounded-lg object-cover"
            src="me.jpg"
            alt="Gallery preview of a marketing UI component"
          />
        </div>

      </div>
    </section>
  );
}
