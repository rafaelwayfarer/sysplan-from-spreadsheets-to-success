import { motion } from "framer-motion";
import logo from "@/assets/logo-dark-bg.png";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <img src={logo} alt="Sysplan" className="h-10 mb-6" />
          
          <p className="text-2xl md:text-3xl font-black text-white mb-4">
            Get it Done. Get it Fun.
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            Desenvolvendo sistemas sob medida desde 1983.
          </p>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a 
              href="https://www.linkedin.com/company/sysplan-hub-criativo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:contato@sysplan.com.br"
              className="hover:text-primary transition-colors"
            >
              contato@sysplan.com.br
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-border/30 w-full">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Sysplan. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
