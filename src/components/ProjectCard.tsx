import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  image: string;
  link?: string;
  comingSoon?: boolean;
  name: string;
  children?: React.ReactNode;
}

export const ProjectCard = ({ image, link, comingSoon, name, children }: ProjectCardProps) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-panel p-4 relative group"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
        {comingSoon && (
          <span className="coming-soon-badge">
            Coming Soon
          </span>
        )}
        {link && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
            <ExternalLink className="w-8 h-8 text-white" />
          </div>
        )}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-center">{name}</h3>
      {children}
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};