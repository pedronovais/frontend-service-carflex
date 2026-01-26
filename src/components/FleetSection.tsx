import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fleetEconomico from "@/assets/fleet-economico.png";
import fleetIntermediario from "@/assets/fleet-intermediario.png";
import fleetUtilitarios from "@/assets/fleet-utilitarios.png";
import fleetHatch from "@/assets/fleet-hatch.png";
import fleetMoto from "@/assets/fleet-moto.png";

const FleetSection = () => {
  const categories = [
    { name: "Econômico", image: fleetEconomico, description: "Compacto ideal para mobilidade urbana", accentColor: "from-blue-500 to-blue-600" },
    { name: "Intermediário", image: fleetIntermediario, description: "Confortável e eficiente para deslocamentos", accentColor: "from-emerald-500 to-emerald-600" },
    { name: "Utilitários", image: fleetUtilitarios, description: "SUV robusto para cargas e diferentes terrenos", accentColor: "from-amber-500 to-amber-600" },
    { name: "Hatch", image: fleetHatch, description: "Versatilidade e praticidade para o dia a dia", accentColor: "from-violet-500 to-violet-600" },
    { name: "Motos", image: fleetMoto, description: "Agilidade para entregas e deslocamentos rápidos", accentColor: "from-rose-500 to-rose-600" },
  ];

  return (
    <section id="frota" className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Futuristic background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--secondary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--secondary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 0% 50%, hsl(var(--accent) / 0.08) 0%, transparent 50%),
                              radial-gradient(circle at 100% 50%, hsl(var(--accent) / 0.05) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 sm:space-y-4 mb-10 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-xs sm:text-sm bg-accent/10 px-3 sm:px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Categorias
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary">NOSSA FROTA</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto text-sm sm:text-base">
            Veículos selecionados para atender diferentes necessidades operacionais
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative h-full bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gray-200 group-hover:border-accent/50 transition-colors rounded-tr-lg" />
                </div>

                <div className="relative h-40 sm:h-48 md:h-52 lg:h-56 mb-1 sm:mb-2 flex items-center justify-center flex-shrink-0">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>

                <div className="text-center space-y-1 sm:space-y-2 flex-grow flex flex-col justify-center">
                  <h3 className="font-bold text-sm sm:text-lg text-secondary group-hover:text-accent transition-colors">{category.name}</h3>
                  <p className="text-[10px] sm:text-xs text-secondary/50 leading-relaxed min-h-[2rem] sm:min-h-[2.5rem] hidden sm:block">{category.description}</p>
                </div>

                <div className="mt-2 sm:mt-4 flex items-center justify-center">
                  <Link to={`/orcamento?categoria=${encodeURIComponent(category.name)}`} className="w-full">
                    <Button 
                      size="sm" 
                      className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-xs sm:text-sm gap-1 shadow-md shadow-accent/20"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-secondary/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-secondary/10">
            <p className="text-secondary/70 text-sm sm:text-base">Precisa de outra categoria de veículo?</p>
            <a href="https://wa.me/5531984503693?text=Ol%C3%A1%2C%20vim%20pelo%20site..." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="gap-2 bg-accent hover:bg-accent/90 font-semibold shadow-lg shadow-accent/25 w-full sm:w-auto">
                Fale Conosco
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetSection;
