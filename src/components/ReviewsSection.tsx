import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import reviewsBackground from "@/assets/reviews-background.png";

const ReviewsSection = () => {
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
      text: "Profissionalismo e agilidade definem a Carflex. Em mais de 2 anos de parceria, sempre fomos muito bem atendidos. Recomendo fortemente!",
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
      company: "Agile Soluções",
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
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">{review.name}</p>
                    <p className="text-sm text-secondary/50">
                      {review.role} • {review.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Blue background */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-white/60 text-sm">Nota média 5.0</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-accent">100%</span>
              <p className="text-white/60 text-sm">Clientes satisfeitos</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-accent">+50</span>
              <p className="text-white/60 text-sm">Avaliações positivas</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
