import { ThumbsUp, DollarSign, Shield, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutCoupleImage from "@/assets/about-couple-car.jpg";
import carflexStamp from "@/assets/carflex-stamp.png";

const AboutSection = () => {
  const features = [
    { icon: ThumbsUp, title: "Performance", description: "Frota moderna e revisada." },
    { icon: DollarSign, title: "Flexibilidade", description: "Contratos sem burocracia." },
    { icon: Shield, title: "Segurança", description: "Seguro completo incluso." },
    { icon: Clock, title: "Suporte 24h", description: "Assistência integral." },
  ];

  return (
    <section id="sobre" className="bg-white relative overflow-hidden my-0 py-12 sm:py-16 md:py-[100px]">
      {/* Background watermark */}
      <div className="absolute top-12 right-8 text-[60px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-black text-secondary/5 leading-none tracking-tighter pointer-events-none hidden sm:block">
        SOBRE NÓS
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center py-8 sm:py-12 md:py-[100px]">
          {/* Left - Image with badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutCoupleImage} alt="Profissional Carflex com veículo" className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover object-top" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
            </div>

            {/* Sticker badge with paper effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 150 }}
              className="absolute -top-8 left-2 sm:left-4 lg:left-6"
            >
              <div className="relative group">
                {/* Sticker background effect */}
                <div className="absolute inset-0 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] transform rotate-2" />
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full p-2 sm:p-3 shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)]">
                  <img 
                    src={carflexStamp} 
                    alt="Selo Carflex Locadora de Veículos" 
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain group-hover:rotate-12 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Subtle shine effect */}
                <div className="absolute top-2 left-2 w-1/3 h-1/3 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-sm pointer-events-none" />
              </div>
            </motion.div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-secondary leading-tight">
                Sua operação em{" "}
                <span className="text-accent">movimento</span>
              </h2>
              <p className="text-secondary/70 text-base sm:text-lg">
                Locação descomplicada para quem não pode parar.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-secondary">{feature.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary/60 hidden sm:block">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200/50 shadow-sm max-w-md w-full">
                <p className="text-secondary font-medium text-xs sm:text-sm text-left">Precisa de uma categoria de veículo?</p>
                <Link to="/orcamento" className="w-full sm:w-auto flex-shrink-0">
                  <Button size="sm" className="gap-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full shadow-md shadow-accent/20 w-full sm:w-auto">
                    Fale Conosco
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;