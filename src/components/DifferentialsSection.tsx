import { 
  Car, 
  RefreshCw, 
  Droplets, 
  Headphones, 
  Wifi, 
  MapPin 
} from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Car,
      title: "Veículos adaptados",
      description: "Frota personalizada para sua operação",
    },
    {
      icon: RefreshCw,
      title: "Veículo reserva ilimitado",
      description: "Nunca fique sem mobilidade",
    },
    {
      icon: Droplets,
      title: "Não cobramos lavagem simples",
      description: "Economia nos detalhes",
    },
    {
      icon: Headphones,
      title: "Atendimento personalizado",
      description: "Suporte dedicado à sua empresa",
    },
    {
      icon: Wifi,
      title: "Não cobramos condutor adicional",
      description: "Flexibilidade para sua equipe",
    },
    {
      icon: MapPin,
      title: "Entregamos e recolhemos",
      description: "Sem nenhum custo na região",
    },
  ];

  return (
    <section id="diferenciais" className="py-24 pb-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      {/* Bottom curve transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80H1440V40C1440 40 1140 0 720 0C300 0 0 40 0 40V80Z" fill="hsl(var(--secondary))" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Por que escolher a Carflex
          </span>
          <h2 className="text-4xl lg:text-5xl font-black">DIFERENCIAIS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl carflex-card hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Target audience */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Para quem <span className="text-accent">faz sentido?</span>
            </h3>
            
            <ul className="space-y-4">
              {[
                "Empresas com equipe externa ou logística",
                "Negócios que não podem ficar com veículo parado",
                "Operações que buscam previsibilidade de custo",
                "Gestores que querem reduzir carga administrativa",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg">
              Se o veículo é parte da operação,{" "}
              <span className="font-bold text-accent">a Carflex faz sentido.</span>
            </p>
          </div>

          <div className="relative">
            <div className="carflex-card p-8 lg:p-10 space-y-6">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              
              <div className="relative space-y-4">
                <h4 className="text-2xl font-bold">Pronto para começar?</h4>
                <p className="text-muted-foreground">
                  Entre em contato e descubra como a Carflex pode transformar 
                  a mobilidade da sua empresa.
                </p>
                
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>Belo Horizonte e região metropolitana</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Headphones className="w-5 h-5 text-accent" />
                    <span>Suporte 24 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
