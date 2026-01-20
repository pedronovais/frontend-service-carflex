import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import fleetBackground from "@/assets/fleet-background.png";
const ContactSection = () => {
  const faqs = [{
    question: "Qual o prazo mínimo de locação?",
    answer: "Trabalhamos com contratos a partir de 12 meses para garantir as melhores condições e valores para sua empresa. Consulte-nos para casos especiais."
  }, {
    question: "Vocês oferecem veículo reserva?",
    answer: "Sim! Oferecemos veículo reserva ilimitado sem custo adicional. Nunca deixamos sua operação parar."
  }, {
    question: "Quais tipos de veículos estão disponíveis?",
    answer: "Nossa frota inclui veículos econômicos, intermediários, pick-ups, mini vans (7 lugares) e motos. Todos adaptados às necessidades corporativas."
  }, {
    question: "Vocês atendem em quais regiões?",
    answer: "Atendemos Belo Horizonte e toda a região metropolitana. Fazemos entrega e recolhimento sem custo adicional."
  }, {
    question: "O que está incluído no valor da locação?",
    answer: "Nossos pacotes incluem manutenção preventiva e corretiva, IPVA, licenciamento, seguro e assistência 24 horas. Não cobramos lavagem simples nem condutor adicional."
  }, {
    question: "Como funciona o suporte 24 horas?",
    answer: "Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para atender qualquer necessidade da sua operação, desde assistência na estrada até troca de veículos."
  }];
  return <section id="contato" className="py-24 bg-gray-100 relative overflow-hidden">
      {/* Blurred fleet background */}
      <div className="absolute inset-0">
        <img src={fleetBackground} alt="" className="w-full h-full object-cover object-center opacity-20 blur-[2px] scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/80 via-gray-100/60 to-gray-100/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* FAQ Section */}
        <div className="mb-24">
          <div className="text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm bg-accent/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Dúvidas Frequentes
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-secondary">
              Perguntas <span className="text-accent">Frequentes</span>
            </h2>
            <p className="text-secondary/60 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços de locação corporativa
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-secondary/10 rounded-2xl px-6 bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-md transition-shadow data-[state=open]:shadow-lg data-[state=open]:border-accent/30">
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:text-accent py-5 [&[data-state=open]]:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary/70 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="relative">
          <div className="bg-secondary rounded-3xl p-8 lg:p-12 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  Fale Conosco
                </span>
                <h3 className="text-3xl lg:text-4xl font-black text-white">
                  Vamos conversar sobre
                  <span className="text-accent block">sua operação</span>
                </h3>
                <p className="text-white/70">
                  Entre em contato e descubra como a Carflex pode otimizar a mobilidade 
                  da sua empresa.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-secondary font-semibold rounded-full">
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10 rounded-full">
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </Button>
                </div>
              </div>

              {/* Right - Contact Info + Map */}
              <div className="space-y-4">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Telefone</p>
                      <p className="font-semibold text-white text-sm">(31) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">E-mail</p>
                      <p className="font-semibold text-white text-sm">contato
@carflex.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="p-2 rounded-lg bg-accent/20">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Localização</p>
                      <p className="font-semibold text-white text-sm">Belo Horizonte - MG</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240218.40169814067!2d-44.10552842852876!3d-19.902430035862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1705000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Carflex" className="grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;