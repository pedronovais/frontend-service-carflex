import { Car, RefreshCw, Droplets, Headphones, Wifi, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const DifferentialsSection = () => {
  const differentials = [
    { icon: Car, title: "Veículos adaptados", description: "Frota personalizada para sua operação" },
    { icon: RefreshCw, title: "Veículo reserva ilimitado", description: "Nunca fique sem mobilidade" },
    { icon: Droplets, title: "Não cobramos lavagem simples", description: "Economia nos detalhes" },
    { icon: Headphones, title: "Atendimento personalizado", description: "Suporte dedicado à sua empresa" },
    { icon: Wifi, title: "Não cobramos condutor adicional", description: "Flexibilidade para sua equipe" },
    { icon: MapPin, title: "Entregamos e recolhemos", description: "Sem nenhum custo na região" },
  ];

  const steps = [
    { number: "01", title: "Empresas", desc: "Com equipe externa ou logística que precisam de mobilidade" },
    { number: "02", title: "Negócios", desc: "Que não podem ficar sem veículo em nenhum momento" },
    { number: "03", title: "Operações", desc: "Que buscam previsibilidade e controle de custos" },
    { number: "04", title: "Gestores", desc: "Que querem reduzir a carga administrativa da frota" },
  ];

  return (
    <section id="diferenciais" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-secondary">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 sm:space-y-4 mb-10 md:mb-16"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Por que escolher a Carflex
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">DIFERENCIAIS</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-4 sm:p-6 rounded-2xl carflex-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base sm:text-lg">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works - Clean Circle Design */}
        <div className="mt-12 sm:mt-16 md:mt-24 space-y-8 sm:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Para quem <span className="text-accent">faz sentido?</span>
            </h3>
          </motion.div>

          {/* Steps with circles - Mobile timeline */}
          <div className="relative">
            {/* Vertical timeline line - mobile only */}
            <div className="md:hidden absolute left-[27px] sm:left-[31px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent" />
            
            <div className="flex flex-col md:grid md:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-12 max-w-5xl mx-auto">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex md:flex-col items-center md:items-center text-left md:text-center gap-4 md:gap-0 relative"
                >
                  {/* Animated pulse on timeline - mobile only */}
                  <div className="md:hidden absolute left-[23px] sm:left-[27px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent animate-pulse z-10" />
                  
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    className="relative z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 flex items-center justify-center md:mb-6 transition-all duration-300 border-primary-foreground bg-secondary flex-shrink-0"
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary-foreground">{item.number}</span>
                  </motion.div>
                  <div className="flex-1 md:flex-none">
                    <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8 sm:mt-12"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border/50 bg-background/50">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <p className="text-xs sm:text-sm lg:text-base">
                <span className="font-semibold">Sem burocracia.</span>{" "}
                <span className="text-muted-foreground">Sem soluções improvisadas.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;