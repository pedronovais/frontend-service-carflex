import { ThumbsUp, DollarSign, Shield, Clock } from "lucide-react";
import aboutCoupleImage from "@/assets/about-couple-car.jpg";
const AboutSection = () => {
  const features = [{
    icon: ThumbsUp,
    title: "Conforto & Performance",
    description: "Veículos modernos e bem mantidos para garantir sua operação sem interrupções."
  }, {
    icon: DollarSign,
    title: "Planos Flexíveis",
    description: "Contratos adaptados à sua realidade, sem surpresas ou taxas escondidas."
  }, {
    icon: Shield,
    title: "Segurança Total",
    description: "Seguro incluso em todos os veículos para sua tranquilidade."
  }, {
    icon: Clock,
    title: "Suporte 24h",
    description: "Assistência disponível a qualquer momento que você precisar."
  }];
  return <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-12 right-8 text-[120px] lg:text-[180px] font-black text-secondary/5 leading-none tracking-tighter pointer-events-none">
        SOBRE NÓS
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image with badge */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutCoupleImage} alt="Casal satisfeito dentro de veículo Carflex" className="w-full h-[400px] lg:h-[500px] object-cover" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
            </div>

            {/* Experience badge */}
            <div className="absolute -top-4 right-8 lg:right-12 bg-accent text-secondary px-6 py-4 rounded-lg shadow-xl">
              <div className="text-center">
                <span className="text-4xl lg:text-5xl font-black block">10+</span>
                <span className="text-sm font-semibold">Anos de<br />Experiência</span>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-secondary leading-tight">
                Mantendo você em movimento com{" "}
                <span className="text-accent">locação confiável</span>
              </h2>
              <p className="text-secondary/70 text-lg">
                A Carflex é uma locadora de veículos criada com foco em operação. 
                Nascemos para atender empresas que dependem de frota no dia a dia 
                e não podem lidar com imprevistos, veículos parados ou contratos engessados.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-secondary">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-secondary/60 pl-15">
                    {feature.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee section */}
      
    </section>;
};
export default AboutSection;