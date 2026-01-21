import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroCar from "@/assets/hero-car.png";
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden overflow-y-visible bg-secondary pt-20 pb-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/95" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center py-[40px] my-[20px]">
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
          Frota premium para
          <span className="block text-accent">sua operação</span>
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
          Locação simplificada, suporte 24h e frota sempre disponível.
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
          <a href="https://wa.me/5531984503693?text=Ol%C3%A1%2C%20vim%20pelo%20site..." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-secondary font-semibold px-6 sm:px-8 rounded-full w-full sm:w-auto">
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://wa.me/5531984503693?text=Ol%C3%A1%2C%20vim%20pelo%20site..." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary/80 rounded-full px-6 sm:px-8 w-full sm:w-auto">
              Ver Frota
            </Button>
          </a>
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
      }} className="relative max-w-4xl mx-auto">
          <img src={heroCar} alt="Veículo premium da frota Carflex" className="w-full h-auto drop-shadow-2xl" />
          {/* Subtle glow under car */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-accent/20 blur-3xl rounded-full" />
        </motion.div>
      </div>

      {/* Bottom curve transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none w-full">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[80px] block" preserveAspectRatio="none">
          <path d="M0 80V70C0 70 360 50 720 50C1080 50 1440 70 1440 70V80H0Z" fill="white" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;