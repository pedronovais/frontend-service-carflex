import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroFleet from "@/assets/polotrack.png";
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden overflow-y-visible bg-secondary pt-20 pb-8">
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/95" />

    {/* Content */}
    <div className="container mx-auto px-4 relative z-10 text-center py-[40px] mb-0">
      {/* Badge */}
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-accent font-medium text-sm">Locação Corporativa</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
        Locação de veículos para
        <span className="block text-accent">você e sua empresa</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto mb-8 px-2">
        Soluções completas em locação com suporte 24h e frota sempre disponível.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 px-2">
        <Link to="/orcamento" className="w-full sm:w-auto">
          <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 sm:px-8 rounded-full w-full sm:w-auto">
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
        <Link to="/orcamento" className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary/80 rounded-full px-6 sm:px-8 w-full sm:w-auto">
            Ver Frota
          </Button>
        </Link>
      </motion.div>

      {/* Social Proof */}
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="flex items-center justify-center gap-3 sm:gap-4 mb-12">
        <div className="flex -space-x-2 sm:-space-x-3">
          {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 border-2 border-secondary flex items-center justify-center text-xs font-bold text-accent">
            {i}
          </div>)}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent border-2 border-secondary flex items-center justify-center text-xs font-bold text-secondary">
            +
          </div>
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">100+ Veículos</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
          </div>
        </div>
      </motion.div>

      {/* Hero Car Image */}
      <motion.div initial={{
        opacity: 0,
        scale: 0.9,
        y: 40
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="relative max-w-3xl mx-auto">
        <img src={heroFleet} alt="Frota diversificada Carflex - Polo, Strada e Moto" className="w-full h-auto drop-shadow-2xl" loading="eager" decoding="async" fetchPriority="high" />
        {/* Subtle glow under car */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-accent/20 blur-3xl rounded-full" />
      </motion.div>
    </div>
  </section>;
};
export default HeroSection;