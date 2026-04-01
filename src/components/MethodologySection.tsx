import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileSearch, Lightbulb, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Briefing & diagnóstico (gratuito)",
    description: "Mapeamos suas planilhas, rotinas e dores. Você sai com clareza sobre o que automatizar e qual seria o ganho real.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Discovery & arquitetura",
    description: "UX, sistema e integrações desenhados sob medida. Você aprova antes de uma linha de código ser escrita.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "MVP funcional",
    description: "O coração da operação rodando em sistema. Você testa, valida com o time e tem resultados reais antes de expandir.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Evolução contínua",
    description: "Novas rotinas, dashboards e integrações conforme você cresce — sem precisar recomeçar do zero.",
  },
];

export const MethodologySection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="metodologia" className="py-24 relative section-light">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Como Funciona
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Do diagnóstico ao sistema rodando
            </h2>
            <p className="text-lg text-muted-foreground">
              — sem travar sua operação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="gradient-border p-8 group"
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <span className="text-5xl font-black text-muted/30 group-hover:text-primary/30 transition-colors">
                      {step.number}
                    </span>
                    <div className="absolute -top-1 -right-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Quero avaliar minha operação
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
