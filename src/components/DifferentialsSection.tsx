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

        {/* Process Timeline - Zigzag Style */}
        <div className="mt-24 space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Para quem <span className="text-accent">faz sentido?</span>
            </h3>
          </div>

          {/* Timeline Zigzag */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-accent/30 -translate-y-1/2" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {[{
              icon: "🏢",
              title: "Empresas",
              desc: "Com equipe externa ou logística"
            }, {
              icon: "🚗",
              title: "Negócios",
              desc: "Que não podem ficar sem veículo"
            }, {
              icon: "📊",
              title: "Operações",
              desc: "Que buscam previsibilidade de custo"
            }, {
              icon: "📋",
              title: "Gestores",
              desc: "Que querem reduzir carga administrativa"
            }].map((item, index) => <div key={index} className={`flex flex-col items-center ${index % 2 === 1 ? 'lg:mt-16' : 'lg:-mt-4'}`}>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl border-2 border-accent/50 shadow-lg shadow-accent/20">
                      {item.icon}
                    </div>
                    <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-accent text-background text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="carflex-card p-8 text-center relative overflow-hidden">
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-accent" />
              <span className="text-4xl lg:text-5xl font-black text-accent">500+</span>
              <p className="text-muted-foreground mt-2">Clientes atendidos em BH e região</p>
            </div>
            
            <div className="carflex-card p-8 text-center relative overflow-hidden">
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-accent" />
              <span className="text-4xl lg:text-5xl font-black text-accent">24h</span>
              <p className="text-muted-foreground mt-2">Suporte dedicado à sua operação</p>
            </div>
            
            <div className="carflex-card p-8 text-center relative overflow-hidden">
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-accent" />
              <span className="text-4xl lg:text-5xl font-black text-accent">100%</span>
              <p className="text-muted-foreground mt-2">Veículo reserva garantido</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg">
              Se o veículo é parte da operação,{" "}
              <span className="font-bold text-accent">a Carflex faz sentido.</span>
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default DifferentialsSection;