import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Briefcase, Wrench, DollarSign, HelpCircle } from "lucide-react";

const departments = [
  {
    id: "comercial",
    label: "Comercial",
    icon: Briefcase,
    message: "Olá, gostaria de falar com o setor Comercial.",
  },
  {
    id: "operacional",
    label: "Operacional",
    icon: Wrench,
    message: "Olá, gostaria de falar com o setor Operacional.",
  },
  {
    id: "financeiro",
    label: "Financeiro",
    icon: DollarSign,
    message: "Olá, gostaria de falar com o setor Financeiro.",
  },
  {
    id: "outros",
    label: "Outros Assuntos",
    icon: HelpCircle,
    message: "Olá, vim pelo site e gostaria de mais informações.",
  },
];

const WhatsAppFloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "5531984503693";

  const handleDepartmentClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Chat Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[280px] sm:w-[320px]"
          >
            <div className="bg-background rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
              {/* Header */}
              <div className="bg-[#25D366] p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">Carflex Locadora</h3>
                  <p className="text-white/80 text-xs">Selecione um setor para atendimento</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Department Options */}
              <div className="p-3 space-y-2">
                {departments.map((dept, index) => (
                  <motion.button
                    key={dept.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleDepartmentClick(dept.message)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-accent/10 border border-transparent hover:border-accent/30 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <dept.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="font-medium text-foreground text-sm block">{dept.label}</span>
                      <span className="text-muted-foreground text-xs">Clique para iniciar conversa</span>
                    </div>
                    <svg 
                      className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 pb-3">
                <p className="text-center text-muted-foreground text-[10px]">
                  Atendimento de Seg a Sex, 8h às 18h
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Float Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 1,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative"
          aria-label="Fale conosco no WhatsApp"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            {/* Main button */}
            <div className={`relative text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-all duration-300 ${
              isOpen 
                ? "bg-secondary hover:bg-secondary/90 shadow-secondary/30" 
                : "bg-[#25D366] hover:bg-[#20BA5A] shadow-[#25D366]/50 group-hover:shadow-[#25D366]/70"
            }`}>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="whatsapp"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg 
                      className="w-6 h-6 sm:w-7 sm:h-7" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Tooltip - only show when closed */}
            {!isOpen && (
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-secondary text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                  Fale conosco
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-secondary" />
                </div>
              </div>
            )}
          </motion.div>
        </button>
      </motion.div>
    </>
  );
};

export default WhatsAppFloatButton;
