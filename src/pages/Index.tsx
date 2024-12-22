import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const liveProjects = [
  {
    name: "Solana",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6PYmAiDpUliZWnmCHKPc3VI7QESDKhLndQ&s",
    link: "https://solana.chatwidget.in/",
  },
  {
    name: "Jupiter",
    image: "https://play-lh.googleusercontent.com/MoPWVqqZQg5-s1nDNSw6_8y3fV0kM_T2mt17yQZL5TD0_Gkhcidi6vS5zZQafa97_A5D=w240-h480-rw",
    link: "https://jupiter.chatwidget.in/",
  },
  {
    name: "Helius",
    image: "https://pbs.twimg.com/profile_images/1676292138617675784/BNf4F9-d_400x400.jpg",
    link: "https://helius.chatwidget.in/",
  },
];

const comingSoonProjects = [
  {
    name: "Phantom",
    image: "https://nftnow.com/wp-content/uploads/2024/01/phantom.jpeg",
  },
  {
    name: "Tensor",
    image: "https://avatars.githubusercontent.com/u/97589441?s=200&v=4",
  },
  {
    name: "Meteora",
    image: "https://miro.medium.com/v2/resize:fit:400/1*OjlxEfh77RFxF4Jh-ZutSw.jpeg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen p-4 space-y-12">
      <Header />
      
      <main className="container mx-auto space-y-16">
        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Live Integrations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {liveProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>

        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Coming Soon
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comingSoonProjects.map((project) => (
              <ProjectCard key={project.name} {...project} comingSoon />
            ))}
          </div>
        </section>

        <footer className="text-center py-8">
          <Link 
            to="/features" 
            className="inline-block glass-panel px-6 py-3 hover-glow"
          >
            View Features
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default Index;