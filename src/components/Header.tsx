import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-dark-bg.png";

export const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Sysplan" className="h-8 md:h-10" />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#dor" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              O Problema
            </a>
            <a href="#solucao" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Solução
            </a>
            <a href="#metodologia" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Como Funciona
            </a>
            <a href="#resultados" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Resultados
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              FAQ
            </a>
          </nav>

          <Button variant="hero" size="sm" onClick={scrollToContact}>
            Fale Conosco
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
