import { ReactNode, Children} from "react";
import { motion} from "framer-motion";

interface ToolGridProps{
    title: string,
    children?: ReactNode,
    rowSize: number;
}

export default function ToolGrid({ title, children, rowSize }: ToolGridProps) {

  const childArray = Children.toArray(children);
  const rows: ReactNode[][] = [];

  for (let i = 0; i < childArray.length; i += rowSize) {
    rows.push(childArray.slice(i, i + rowSize));
  }

  return (
    <motion.div
      className="flex xl:w-1/3 lg:w-1/2 flex-col items-center"
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      initial={{ opacity: 0 }}
      viewport={{once: true}}
      aria-labelledby="tool-grid-heading"
    >
      <h2 id="tool-grid-heading" className= "xl:text-4xl lg:text-3xl text-4xl font-thin leading-tight font-bold text-zinc-300 mb-10">
        {title}
      </h2>

      {rows.map((row, i) => (
        <motion.div
          key={i}
          className="flex w-full flex-wrap justify-around"
          initial={{opacity: 0}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {row}
        </motion.div>
      ))}
    </motion.div>
  );
}
