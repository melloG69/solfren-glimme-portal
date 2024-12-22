import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { FeatureCard } from "@/components/FeatureCard";
import { Zap, Globe, Coins, Twitter, ShoppingCart, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const currentFeatures = [
  {
    title: "Real-Time Data Fetch",
    description: "Get instant access to live Solana ecosystem data",
    icon: Zap,
  },
  {
    title: "Multiple Languages",
    description: "Communicate in your preferred language",
    icon: Globe,
  },
  {
    title: "Free to Use",
    description: "No cost to access basic features",
    icon: Coins,
  },
];

const upcomingFeatures = [
  {
    title: "Twitter Agents",
    description: "AI agents that post and scrape real-time data of Solana projects",
    icon: Twitter,
  },
  {
    title: "Create & Trade Tokens",
    description: "Create and trade tokens by chatting with the bot",
    icon: ShoppingCart,
  },
  {
    title: "BirdEye API Integration",
    description: "Enhanced data analytics for Solana projects",
    icon: BarChart3,
  },
];

const Features = () => {
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
            Current Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Upcoming Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <footer className="text-center py-8 space-y-6">
          <Link 
            to="/" 
            className="inline-block glass-panel px-6 py-3 hover-glow"
          >
            Back to Home
          </Link>
          <div className="glass-panel p-6 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground">
              More exciting features are coming soon to Sol Fren AI!
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Features;