import vmcLogo from "@/assets/clients/vmc-logo.png";
import tutoriLogo from "@/assets/clients/tutori-logo.png";
import nexusLogo from "@/assets/clients/nexus-logo.png";
import agileLogo from "@/assets/clients/agile-logo.png";

const ClientsSection = () => {
  const clients = [
    { name: "VMC Tanatopraxia", logo: vmcLogo },
    { name: "Tutori Segurança Armada", logo: tutoriLogo },
    { name: "Nexus Vigilância", logo: nexusLogo },
    { name: "Agile", logo: agileLogo },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Tech grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,100,200,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,100,200,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Subtle diagonal lines */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(0,100,200,0.3) 100px,
            rgba(0,100,200,0.3) 101px
          )`
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-accent text-sm font-medium tracking-wider uppercase">Parceiros</span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Confiado por <span className="text-accent">+500 empresas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas de diversos segmentos confiam na Carflex para manter suas operações rodando com eficiência e tranquilidade.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center h-24 md:h-32 px-6 py-4 rounded-xl border border-transparent hover:border-accent/20 hover:bg-accent/5 transition-all duration-300"
            >
              {/* Subtle tech corner */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <img
                src={client.logo}
                alt={client.name}
                className="h-full w-auto object-contain max-w-[180px] md:max-w-[220px] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Tech divider */}
        <div className="mt-16 flex justify-center items-center gap-3">
          <div className="w-2 h-2 bg-accent/40 rotate-45" />
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="w-2 h-2 bg-accent/40 rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
