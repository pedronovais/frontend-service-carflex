import vmcLogo from "@/assets/clients/vmc-logo.png";
import tutoriLogo from "@/assets/clients/tutori-logo.png";
import nexusLogo from "@/assets/clients/nexus-logo.png";
import agileLogo from "@/assets/clients/agile-logo.png";
import { Button } from "@/components/ui/button";

const ClientsSection = () => {
  const clients = [
    { name: "VMC Tanatopraxia", logo: vmcLogo },
    { name: "Tutori Segurança Armada", logo: tutoriLogo },
    { name: "Nexus Vigilância", logo: nexusLogo },
    { name: "Agile", logo: agileLogo },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8f6f3]">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          {/* Title with accent bar */}
          <div className="flex items-start gap-4">
            <div className="w-1 h-16 bg-accent rounded-full mt-1" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Resultados que<br />
              <span className="text-muted-foreground">geram confiança.</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-muted-foreground max-w-sm lg:text-center">
            Confira quem impulsiona sua operação com a eficiência da Carflex.
          </p>

          {/* CTA Button */}
          <Button 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-sm font-semibold tracking-wide w-fit"
          >
            CONHEÇA NOSSOS CASES
          </Button>
        </div>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 md:h-20 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-full w-auto object-contain max-w-[140px] md:max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
