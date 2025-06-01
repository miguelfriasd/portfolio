import { motion } from 'framer-motion';

interface ToolIconProps{
    displayName: string;
    iconName?: string;
    imgSrc?: string
}

export default function ToolIcon({ imgSrc, iconName, displayName }: ToolIconProps) {
  const labelId = `tool-name-${displayName.replace(/\s+/g, '-').toLowerCase()}`;

  const containerVariants = {
    initial: {},
    hover: {},
  };

  const imageAndIconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15, transition: { duration: 0.2 } },
  };

  const labelVariants = {
    initial: { opacity: 0, y: 5 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="group flex flex-col rounded-lg p-3 mx-2 my-1 bg-zinc-800"
      aria-labelledby={labelId}
      aria-label={displayName}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      layout
    >
      {imgSrc && (
        <motion.img
          src={imgSrc}
          alt={displayName}
          className="w-24 h-24 mb-2"
          variants={imageAndIconVariants}
        />
      )}
      {!imgSrc && iconName && (
        <motion.i
          className={`text-8xl text-white mb-2 ${iconName}`}
          aria-hidden="true"
          variants={imageAndIconVariants}
        />
      )}
      <motion.span
        className="text-center text-zinc-300"
        id={labelId}
        variants={labelVariants}
      >
        {displayName}
      </motion.span>
    </motion.div>
  );
}
