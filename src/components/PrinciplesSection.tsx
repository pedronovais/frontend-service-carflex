import { ThumbsUp, DollarSign, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import principlesImage from "@/assets/principles-handshake.png";
const PrinciplesSection = () => {
  const benefits = [{
    icon: ThumbsUp,
    title: "Performance",
    items: ["Frota moderna", "Veículos revisados", "Manutenção preventiva"]
  }, {
    icon: DollarSign,
    title: "Flexibilidade",
    items: ["Contratos flexíveis", "Sem burocracia", "Planos personalizados"]
  }, {
    icon: Shield,
    title: "Segurança",
    items: ["Seguro completo", "Proteção total", "Cobertura nacional"]
  }, {
    icon: Clock,
    title: "Suporte 24h",
    items: ["Assistência integral", "Atendimento rápido", "Veículo reserva"]
  }];
  return <section className="relative py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold uppercase tracking-wide">CONHEÇA A CARFLEX</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            NOSSOS PRINCÍPIOS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left side - Image with overlay content */}
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px]">
            <img src={principlesImage} alt="Atendimento Carflex" className="absolute inset-0 w-full h-full object-cover" />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
            
            {/* Content on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
                Atendimento que
                <br />
                <span className="text-primary-foreground">gera confiança</span>
              </h2>
              <p className="text-white/80 text-sm md:text-base mb-4 max-w-sm">
                Do primeiro contato à entrega do veículo, acompanhamos cada etapa.
              </p>
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-secondary font-semibold rounded-full">
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Benefits cards grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => <div key={index} className="bg-background rounded-2xl p-5 md:p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-secondary text-lg mb-3">{benefit.title}</h3>
                <ul className="space-y-1.5">
                  {benefit.items.map((item, i) => <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {item}
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default PrinciplesSection;