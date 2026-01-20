import { Car, RefreshCw, Droplets, Headphones, Wifi, MapPin } from "lucide-react";
const DifferentialsSection = () => {
  const differentials = [{
    icon: Car,
    title: "Veículos adaptados",
    description: "Frota personalizada para sua operação"
  }, {
    icon: RefreshCw,
    title: "Veículo reserva ilimitado",
    description: "Nunca fique sem mobilidade"
  }, {
    icon: Droplets,
    title: "Não cobramos lavagem simples",
    description: "Economia nos detalhes"
  }, {
    icon: Headphones,
    title: "Atendimento personalizado",
    description: "Suporte dedicado à sua empresa"
  }, {
    icon: Wifi,
    title: "Não cobramos condutor adicional",
    description: "Flexibilidade para sua equipe"
  }, {
    icon: MapPin,
    title: "Entregamos e recolhemos",
    description: "Sem nenhum custo na região"
  }];
  return <section id="diferenciais" className="py-24 relative overflow-hidden bg-secondary">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Por que escolher a Carflex
          </span>
          <h2 className="text-4xl lg:text-5xl font-black">DIFERENCIAIS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => <div key={index} className="group p-6 rounded-2xl carflex-card hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>)}
        </div>

        {/* How it works - Clean Circle Design */}
        <div className="mt-24 space-y-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Para quem <span className="text-accent">faz sentido?</span>
            </h3>
          </div>

          {/* Steps with circles */}
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[{
            number: "01",
            title: "Empresas",
            desc: "Com equipe externa ou logística que precisam de mobilidade"
          }, {
            number: "02",
            title: "Negócios",
            desc: "Que não podem ficar sem veículo em nenhum momento"
          }, {
            number: "03",
            title: "Operações",
            desc: "Que buscam previsibilidade e controle de custos"
          }, {
            number: "04",
            title: "Gestores",
            desc: "Que querem reduzir a carga administrativa da frota"
          }].map((item, index) => <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-300 hover:scale-105 border-primary-foreground bg-secondary">
                  <span className="text-xl lg:text-2xl font-bold text-primary-foreground">{item.number}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>)}
          </div>

          {/* Bottom tagline */}
          <div className="flex justify-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-background/50">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Sem burocracia.</span>{" "}
                <span className="text-muted-foreground">Sem soluções improvisadas.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DifferentialsSection;