import ProjectCardContentProps from "./ProjectCardContentProps";

export default interface ProjectCardProps extends ProjectCardContentProps{
    type: 'left' | 'right';
    image_url: string;
}
