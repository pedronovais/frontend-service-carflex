import { Instagram } from "lucide-react";
import carflexLogoWhite from "@/assets/carflex-logo-white.png";
const Footer = () => {
  return <footer className="bg-background border-t border-border/50 py-8 sm:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and description */}
          <div className="col-span-2 space-y-4">
            <img src={carflexLogoWhite} alt="Carflex - Locadora de Veículos" className="h-6 sm:h-8 w-auto" loading="lazy" decoding="async" />
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
              Locação de veículos pensada para manter operações em movimento. 
              Soluções em frota corporativa com foco em continuidade e previsibilidade.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://www.instagram.com/carflexlocadora/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-secondary hover:bg-accent/20 transition-colors"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-accent" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-bold text-sm sm:text-base text-foreground">Links Rápidos</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Início", "Sobre", "Modelo", "Frota", "Diferenciais", "Contato"].map(link => <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-bold text-sm sm:text-base text-foreground">Contato</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>(31) 98450-3693</li>
              <li className="break-all">administrativo@carflexlocadora.com.br</li>
              <li>Belo Horizonte - MG</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © 2026 Carflex Locadora de Veículos. Todos os direitos reservados. | Feito por{" "}
            <a 
              href="http://innoapp.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              @innoapp
            </a>
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;