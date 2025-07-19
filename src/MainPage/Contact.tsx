import { forwardRef, useState } from "react"
import { motion } from "framer-motion";

const Contact = forwardRef<HTMLElement>((_props, ref) => {
  const [formState, setFormState] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xanjwbgj", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <motion.section
      ref={ref}
      className="w-full mb-20 flex flex-col items-center justify-center sm:space-y-12 space-y-9 pt-24 lg:pt-45"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      aria-labelledby="contact-heading"
    >
      <motion.h1
        id="contact-heading"
        className="text-zinc-200 text-4xl lg:text-6xl sm:text-5xl font-sans font-extrabold leading-tight"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="text-lg lg:text-2xl sm:text-xl text-zinc-300 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Have a project in mind? Let’s build something great together.
      </motion.p>

      <motion.form
        className="flex flex-col space-y-4 w-full max-w-xl"
        onSubmit={handleSubmit}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="px-4 py-3 rounded bg-zinc-800 text-zinc-200 placeholder-zinc-500 border border-zinc-500"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={5}
          className="px-4 py-3 rounded bg-zinc-800 text-zinc-200 placeholder-zinc-500 border border-zinc-500"
        />
        <button
          type="submit"
          className="cursor-pointer px-6 py-4 text-lg font-bold text-zinc-800 bg-cyan-600 rounded-lg transition-all hover:text-zinc-200 hover:bg-cyan-700"
        >
          Send Message
        </button>
        {formState === "success" && (
          <p className="text-green-500 text-sm">Message sent! I’ll be in touch soon.</p>
        )}
        {formState === "error" && (
          <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
        )}
      </motion.form>

      <div className="flex space-x-6 text-5xl">
        <a
          href="https://www.linkedin.com/in/miguel-frias-34b933329/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
            <i className="devicon-linkedin-plain colored"></i>
        </a>
        <a
          href="https://github.com/miguelfriasd"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
            <i className="text-white devicon-github-original"></i>
        </a>
      </div>

      <p className="text-sm text-zinc-400 text-center">
        Based in Sonora, México, UTC-7 — I typically respond within 24 hours.
        Or email me directly at <span className="underline">miguelangelfriasduran@gmail.com</span>
      </p>
    </motion.section>
  );
})

export default Contact;
