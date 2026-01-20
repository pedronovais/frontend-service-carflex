import { ArrowRight, Shield, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
      {/* Futuristic background effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-accent">Locação Corporativa</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1]">
              <span className="text-foreground">Locação de</span>
              <br />
              <span className="text-foreground">veículos</span>
              <br />
              <span className="text-accent">pensada para</span>
              <br />
              <span className="text-accent">manter</span>
              <br />
              <span className="text-foreground">operações em</span>
              <br />
              <span className="text-foreground">movimento</span>
            </h1>
            
            <p className="text-base lg:text-lg text-muted-foreground max-w-md">
              Frota corporativa com continuidade, previsibilidade e zero dor de cabeça.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-secondary font-bold px-8 rounded-full h-12">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5 text-foreground rounded-full h-12 px-8">
                Conhecer Frota
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-12 pt-6">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-foreground">100%</p>
                  <p className="text-xs text-muted-foreground">Seguro Incluso</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-foreground">24h</p>
                  <p className="text-xs text-muted-foreground">Suporte</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-foreground">500+</p>
                  <p className="text-xs text-muted-foreground">Veículos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image - Futuristic frame */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-accent/10 rounded-2xl blur-2xl scale-105" />
              
              {/* Image container with gradient border */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-transparent p-[1px]">
                <div className="relative rounded-2xl overflow-hidden bg-secondary/80 backdrop-blur-sm">
                  <img
                    src={heroCar}
                    alt="Veículo premium da frota Carflex"
                    className="w-full max-w-lg h-auto object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"
      />
    </section>
  );
};

export default HeroSection;
