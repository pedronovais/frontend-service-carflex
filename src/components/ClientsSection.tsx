import vmcLogo from "@/assets/clients/vmc-logo.png";
import tutoriLogo from "@/assets/clients/tutori-logo.png";
import nexusLogo from "@/assets/clients/nexus-logo.png";
import agileLogo from "@/assets/clients/agile-logo.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ClientsSection = () => {
  const clients = [
    { name: "VMC Tanatopraxia", logo: vmcLogo },
    { name: "Tutori Segurança Armada", logo: tutoriLogo },
    { name: "Nexus Vigilância", logo: nexusLogo },
    { name: "Agile", logo: agileLogo },
  ];

  const stats = [
    { value: "+500", label: "Empresas Atendidas" },
    { value: "98%", label: "Satisfação" },
    { value: "15+", label: "Anos de Mercado" },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-28 overflow-hidden bg-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] my-[20px] py-[20px]">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 mb-12 md:mb-20"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-1 sm:w-1.5 h-16 sm:h-24 bg-accent rounded-full mt-1 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-accent italic">Resultados que</span><br />
              <span className="text-secondary">geram confiança.</span>
            </h2>
          </div>

          <p className="max-w-sm text-secondary text-base sm:text-lg">
            Confira quem impulsiona sua operação com a eficiência da Carflex.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-accent hover:bg-accent/90 text-white px-6 sm:px-10 py-5 sm:py-7 text-sm font-semibold tracking-wide w-full sm:w-fit transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
              CONHEÇA NOSSOS CASES
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 mb-12 md:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent">{stat.value}</span>
              <p className="text-secondary mt-1 sm:mt-2 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-24 items-center justify-items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.1, transition: { duration: 0.3 } }}
                className="group cursor-pointer flex items-center justify-center w-full"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-20 sm:h-24 md:h-28 lg:h-36 w-auto max-w-[180px] sm:max-w-[220px] object-contain transition-all duration-500" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ClientsSection;