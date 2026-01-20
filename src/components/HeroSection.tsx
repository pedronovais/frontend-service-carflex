import { ArrowRight, Shield, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background dark */}
      <div className="absolute inset-0 bg-secondary" />
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-accent/15 rounded-full blur-3xl" />
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 100px,
              hsl(var(--accent) / 0.05) 100px,
              hsl(var(--accent) / 0.05) 101px
            )`
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Locação Corporativa</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Locação de veículos
                <span className="block text-accent mt-2">pensada para manter</span>
                operações em movimento
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Soluções em frota corporativa com foco em continuidade, previsibilidade e redução de risco para sua empresa.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-foreground font-semibold px-8">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                Conhecer Frota
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs text-muted-foreground">Seguro Incluso</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24h</p>
                  <p className="text-xs text-muted-foreground">Suporte</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Truck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-xs text-muted-foreground">Veículos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 lg:w-32" />
              <img
                src={heroCar}
                alt="Veículo premium da frota Carflex"
                className="w-full h-auto rounded-2xl shadow-2xl carflex-glow"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
};

export default HeroSection;
