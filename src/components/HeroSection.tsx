import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-secondary pt-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/95" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-accent">Locação Corporativa</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
          Frota premium para
          <span className="block text-accent">sua operação</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
          Locação simplificada, suporte 24h e frota sempre disponível.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-secondary font-semibold px-8 rounded-full">
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary/80 rounded-full px-8">
            Ver Frota
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-accent/20 border-2 border-secondary flex items-center justify-center text-xs font-bold text-accent"
              >
                {i}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-accent border-2 border-secondary flex items-center justify-center text-xs font-bold text-secondary">
              +
            </div>
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold">500+ Clientes</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>

        {/* Hero Car Image */}
        <div className="relative max-w-4xl mx-auto">
          <img
            src={heroCar}
            alt="Veículo premium da frota Carflex"
            className="w-full h-auto drop-shadow-2xl"
          />
          {/* Subtle glow under car */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-accent/20 blur-3xl rounded-full" />
        </div>
      </div>

      {/* Bottom curve transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80H1440V40C1440 40 1140 0 720 0C300 0 0 40 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
