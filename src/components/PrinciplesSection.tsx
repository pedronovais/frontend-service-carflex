import { ThumbsUp, DollarSign, Shield, Clock } from "lucide-react";

const PrinciplesSection = () => {
  const benefits = [
    {
      icon: ThumbsUp,
      title: "Performance",
      description: "Frota moderna e revisada."
    },
    {
      icon: DollarSign,
      title: "Flexibilidade",
      description: "Contratos sem burocracia."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Seguro completo incluso."
    },
    {
      icon: Clock,
      title: "Suporte 24h",
      description: "Assistência integral."
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Background text */}
      <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none select-none">
        <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-muted/30 tracking-tight whitespace-nowrap">
          SOBRE NÓS
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image with badge */}
          <div className="relative">
            {/* Image placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted/50 to-muted aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-sm">Imagem do profissional</p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 -right-4 md:top-8 md:-right-8 lg:right-0 lg:top-12 bg-accent text-accent-foreground rounded-2xl p-4 md:p-6 shadow-xl">
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-black block">10+</span>
                <span className="text-xs md:text-sm font-medium">Anos de<br />Experiência</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-8">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary leading-tight mb-4">
              Sua operação em
              <br />
              <span className="text-accent">movimento</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-10">
              Locação descomplicada para quem não pode parar.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <span className="font-bold text-secondary">{benefit.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-[52px] md:pl-[60px]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
