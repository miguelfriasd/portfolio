import ProjectCardContentProps from "./ProjectCardContentProps";

export default function ProjectCardContent({
  title,
  body,
  tags,
  repository_url,
}: ProjectCardContentProps) {
  return (
    <>
      <div>
        <h1 className="font-bold lg:text-2xl text-xl mb-4">{title}</h1>
        <p className="text-zinc-200 font-sans lg:text-xl text-lg">{body}</p>
      </div>
      <div className="flex flex-row items-center mt-4 text-xs font-bold justify-between flex-wrap gap-2">
        <div className="flex flex-row flex-wrap gap-3">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-zinc-300 bg-zinc-200/15 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        {repository_url && (
          <a
            href={repository_url}
            className="p-2 rounded-lg bg-white text-zinc-800 hover:bg-zinc-100 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source code on GitHub"
          >
            <div className="flex items-center gap-1">
              <span>Source Code</span>
              <img
                className="w-5 h-auto"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
              />
            </div>
          </a>
        )}
      </div>
    </>
  );
}
