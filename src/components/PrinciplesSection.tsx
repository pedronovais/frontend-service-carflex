import { ThumbsUp, DollarSign, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import principlesImage from "@/assets/principles-handshake.png";

const PrinciplesSection = () => {
  const benefits = [
    { icon: ThumbsUp, title: "Performance", items: ["Frota moderna", "Veículos revisados", "Manutenção preventiva"] },
    { icon: DollarSign, title: "Flexibilidade", items: ["Contratos flexíveis", "Sem burocracia", "Planos personalizados"] },
    { icon: Shield, title: "Segurança", items: ["Seguro completo", "Proteção total", "Cobertura nacional"] },
    { icon: Clock, title: "Suporte 24h", items: ["Assistência integral", "Atendimento rápido", "Veículo reserva"] },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary px-4 py-2 rounded-full mb-4 bg-primary-foreground">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold uppercase tracking-wide">CONHEÇA A CARFLEX</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            <span className="text-white">NOSSOS </span>
            <span className="text-primary">PRINCÍPIOS</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left side - Image with overlay content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px]"
          >
            <img src={principlesImage} alt="Atendimento Carflex" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
                  Atendimento que
                  <br />
                  <span className="text-primary-foreground">gera confiança</span>
                </h2>
                <p className="text-white/80 text-sm md:text-base mb-4 max-w-sm">
                  Do primeiro contato à entrega do veículo, acompanhamos cada etapa.
                </p>
                <Button className="gap-2 bg-white hover:bg-white/90 text-secondary font-semibold rounded-full">
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Benefits cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-2xl p-5 md:p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow bg-secondary"
              >
                <div className="flex items-center gap-3 mb-4 text-primary-foreground">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary-foreground">
                    <benefit.icon className="w-5 h-5 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3 text-primary-foreground">{benefit.title}</h3>
                <ul className="space-y-1.5">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="text-sm flex items-start gap-2 text-primary-foreground">
                      <span className="mt-1 text-primary-foreground">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;