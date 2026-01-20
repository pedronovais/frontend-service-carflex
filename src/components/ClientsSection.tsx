import vmcLogo from "@/assets/clients/vmc-logo.png";
import tutoriLogo from "@/assets/clients/tutori-logo.png";
import nexusLogo from "@/assets/clients/nexus-logo.png";
import agileLogo from "@/assets/clients/agile-logo.png";
import clientsBackground from "@/assets/clients-background.png";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
const ClientsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const clients = [{
    name: "VMC Tanatopraxia",
    logo: vmcLogo
  }, {
    name: "Tutori Segurança Armada",
    logo: tutoriLogo
  }, {
    name: "Nexus Vigilância",
    logo: nexusLogo
  }, {
    name: "Agile",
    logo: agileLogo
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="py-20 md:py-28 overflow-hidden relative">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${clientsBackground})` }}
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-primary-foreground/85" />
      
      <div className="container mx-auto px-6 md:px-[100px] my-[20px] py-[20px] relative z-10">
        {/* Header Row */}
        <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Title with accent bar */}
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-24 bg-accent rounded-full mt-1 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-accent italic">Resultados que</span><br />
              <span className="text-secondary">geram confiança.</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="max-w-sm lg:text-center text-secondary text-lg">
            Confira quem impulsiona sua operação com a eficiência da Carflex.
          </p>

          {/* CTA Button */}
          <Button className="bg-accent hover:bg-accent/90 text-white px-10 py-7 text-sm font-semibold tracking-wide w-fit transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
            CONHEÇA NOSSOS CASES
          </Button>
        </div>

        {/* Stats Counter */}
        <div className={`flex justify-center gap-16 mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center">
            <span className="text-5xl md:text-6xl font-bold text-accent">+500</span>
            <p className="text-secondary mt-2">Empresas Atendidas</p>
          </div>
          <div className="text-center">
            <span className="text-5xl md:text-6xl font-bold text-accent">98%</span>
            <p className="text-secondary mt-2">Satisfação</p>
          </div>
          <div className="text-center">
            <span className="text-5xl md:text-6xl font-bold text-accent">15+</span>
            <p className="text-secondary mt-2">Anos de Mercado</p>
          </div>
        </div>

        {/* Logos Grid - Fixed */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 md:gap-px">
            {clients.map((client, index) => <div key={index} className="group cursor-pointer p-4 md:p-6 transition-all duration-500 hover:-translate-y-2" style={{
            animationDelay: `${index * 100}ms`
          }}>
                  <img src={client.logo} alt={client.name} className="h-16 md:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110" />
              </div>)}
          </div>
        </div>

        {/* Tech Decorations */}
        <div className={`flex justify-center items-center gap-4 mt-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="w-3 h-3 bg-accent/40 rotate-45 animate-pulse" />
          <div className="w-32 h-px bg-gradient-to-r from-accent/40 via-accent to-accent/40" />
          <div className="w-3 h-3 bg-accent/40 rotate-45 animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </div>
      </div>
    </section>;
};
export default ClientsSection;