import { Ref } from "react"

interface ContactProps{
    ref: Ref<HTMLElement> | undefined;
}
export default function Contact({ ref }: ContactProps) {
    return (
        <section
            ref={ref}
            className="w-full mb-20 flex flex-col items-center justify-center space-y-10"
        >
            <h1 className="text-zinc-300 text-5xl md:text-6xl font-sans font-extrabold leading-tight">
                Get in Touch
            </h1>

            <p className="text-2xl text-zinc-300 text-center">
                Have a project in mind? Send me an email and let’s build something great together.
            </p>

            <a
                className="px-6 py-4 text-3xl font-bold text-zinc-300 bg-cyan-700 rounded-lg transition hover:bg-cyan-600"
                href="mailto:miguelangelfriasduran@gmail.com"
            >
                Start a Conversation
            </a>

            <p className="text-2xl text-zinc-300">Or reach out to me here</p>

            <a
                href="https://www.linkedin.com/in/miguel-frias-919998222/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-5xl"
            >
                <i className="devicon-linkedin-plain colored" />
            </a>
        </section>
    );
}
