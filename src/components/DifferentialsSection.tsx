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
  return <><section id="diferenciais" className="py-24 relative overflow-hidden bg-secondary">
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

      </div>
    </section>

    {/* Para quem faz sentido - Dark Section */}
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[{
            icon: Car,
            title: "Veículos adequados à operação",
            desc: "Frota personalizada conforme sua necessidade."
          }, {
            icon: RefreshCw,
            title: "Manutenção inclusa",
            desc: "Preventiva e corretiva, sem preocupações."
          }, {
            icon: Droplets,
            title: "Seguro completo",
            desc: "Proteção total para sua operação."
          }, {
            icon: Headphones,
            title: "Contratos flexíveis",
            desc: "Adaptamos à realidade da sua empresa."
          }].map((item, index) => (
            <div key={index} className="group p-6 rounded-xl border border-accent/20 bg-gradient-to-b from-accent/5 to-transparent hover:border-accent/40 transition-all duration-300 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Como funciona na prática */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
            Como funciona <span className="text-accent">na prática</span>
          </h3>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {[{
            num: "01",
            title: "Entendemos a operação",
            desc: "Analisamos sua necessidade e identificamos os modelos ideais."
          }, {
            num: "02",
            title: "Indicamos as condições",
            desc: "Apresentamos veículos e condições para sua operação."
          }, {
            num: "03",
            title: "Iniciamos a operação",
            desc: "Estruturamos a frota e iniciamos o suporte contínuo."
          }].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full border-2 border-accent/50 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-accent">{step.num}</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 bg-card/30">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <p className="text-foreground">
              <span className="font-bold">Sem burocracia.</span> Sem soluções improvisadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>;
};
export default DifferentialsSection;