import { Star, Quote, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import reviewsBackground from "@/assets/reviews-background.png";
import clientPhoto from "@/assets/reviews/client-photo.png";
import vmcLogo from "@/assets/clients/vmc-logo.png";
import tutoriLogo from "@/assets/clients/tutori-logo.png";
import nexusLogo from "@/assets/clients/nexus-logo.png";
import agileLogo from "@/assets/clients/agile-logo.png";

const ReviewsSection = () => {
  const companyLogos: { [key: string]: string } = {
    "VMC Tanatopraxia": vmcLogo,
    "Tutori Segurança": tutoriLogo,
    "Nexus Vigilância": nexusLogo,
    "Agile Serviços": agileLogo,
  };

  const reviews = [
    {
      name: "Carlos Eduardo",
      company: "VMC Tanatopraxia",
      role: "Gerente de Operações",
      rating: 5,
      text: "A Carflex transformou nossa operação. O suporte 24h e a qualidade dos veículos são incomparáveis. Nunca mais ficamos sem veículo reserva.",
    },
    {
      name: "Ana Paula Ribeiro",
      company: "Tutori Segurança",
      role: "Diretora Administrativa",
      rating: 5,
      text: "Profissionalismo e agilidade definem a Carflex. Recomendo fortemente!",
    },
    {
      name: "Roberto Santos",
      company: "Nexus Vigilância",
      role: "CEO",
      rating: 5,
      text: "A melhor decisão que tomamos foi terceirizar nossa frota com a Carflex. Reduzimos custos e ganhamos em eficiência operacional.",
    },
    {
      name: "Fernanda Lima",
      company: "Agile Serviços",
      role: "Coordenadora de Logística",
      rating: 5,
      text: "Atendimento excepcional! A equipe da Carflex está sempre disponível e resolve qualquer problema rapidamente. Parceria de sucesso.",
    },
  ];

  return (
    <>
      {/* Main Reviews Section - White background with blurred image */}
      <section className="py-12 md:py-20 lg:py-28 bg-gray-100 relative overflow-hidden">
        {/* Blurred background image */}
        <div className="absolute inset-0">
          <img 
            src={reviewsBackground} 
            alt="" 
            className="w-full h-full object-cover object-center opacity-15 blur-[3px] scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/80 via-gray-100/70 to-gray-100/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Avaliações
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary">
              O que nossos <span className="text-accent">clientes dizem</span>
            </h2>
            <p className="text-secondary/60 max-w-2xl mx-auto">
              A satisfação dos nossos parceiros é o nosso maior orgulho
            </p>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-sm border border-secondary/10 rounded-2xl p-6 sm:p-8 relative group hover:border-accent/30 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="w-10 h-10 text-accent" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-secondary/80 text-base sm:text-lg leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30 bg-white p-1 flex items-center justify-center">
                    <img 
                      src={companyLogos[review.company] || clientPhoto} 
                      alt={review.company}
                      className="w-[800%] h-[800%] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">{review.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 sm:mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-secondary/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-secondary/10">
              <p className="text-secondary/70 text-sm sm:text-base">Precisa de uma categoria de veículo?</p>
              <Link to="/orcamento" className="w-full sm:w-auto">
                <Button className="gap-2 bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/25 w-full sm:w-auto">
                  Fale Conosco
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Modern Blue background with grid */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        {/* Grid background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Decorative plus signs */}
        <div className="absolute top-8 left-[10%] text-accent/30 text-2xl font-light">+</div>
        <div className="absolute top-12 right-[15%] text-accent/20 text-xl font-light">+</div>
        <div className="absolute bottom-10 left-[20%] text-accent/25 text-lg font-light">+</div>
        <div className="absolute bottom-8 right-[10%] text-accent/30 text-2xl font-light">+</div>
        <div className="absolute top-1/2 left-[5%] text-accent/15 text-xl font-light">+</div>
        <div className="absolute top-1/3 right-[5%] text-accent/20 text-lg font-light">+</div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] relative z-10">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Dados que <span className="text-accent">garantem</span> nossa capacidade de
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>prover soluções de alta confiabilidade
            </h3>
          </motion.div>

          {/* Stats with dividers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0"
          >
            {/* Stat 1 */}
            <div className="text-center px-8 md:px-12 lg:px-16">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                +100
              </span>
              <p className="text-white/60 text-sm md:text-base mt-2">
                Veículos na<br />Frota
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
            <div className="md:hidden w-32 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            {/* Stat 2 */}
            <div className="text-center px-8 md:px-12 lg:px-16">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                +50
              </span>
              <p className="text-white/60 text-sm md:text-base mt-2">
                Empresas<br />Atendidas
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
            <div className="md:hidden w-32 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            {/* Stat 3 */}
            <div className="text-center px-8 md:px-12 lg:px-16">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                100%
              </span>
              <p className="text-white/60 text-sm md:text-base mt-2">
                Satisfação<br />Garantida
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
