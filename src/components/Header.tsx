import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full py-6 px-4 glass-panel mb-8"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green bg-clip-text text-transparent animate-glow">
        Sol Fren AI
      </h1>
    </motion.header>
  );
};