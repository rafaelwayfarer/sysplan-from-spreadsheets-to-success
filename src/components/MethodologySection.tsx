import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileSearch, Lightbulb, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Briefing & Diagnóstico",
    description: "Entendemos suas planilhas, rotinas, dores e objetivos. Mapeamos os fluxos entre áreas e o que realmente precisa ser automatizado.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Discovery & Arquitetura",
    description: "Nosso time de UX, sistema e integrações desenha a solução ideal: telas, fluxos, integrações, regras de negócio e relatórios.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "MVP sob medida",
    description: "Construímos um MVP funcional, já focado no coração da operação, para você testar e validar com o time.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Evolução contínua",
    description: "A partir do MVP, seguimos com melhorias, novas rotinas, dashboards e integrações — sem reinventar o que já funciona.",
  },
];

export const MethodologySection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="metodologia" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
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
              ⚙️ Metodologia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Como transformamos sua planilha em sistema
            </h2>
            <p className="text-lg text-muted-foreground">
              (sem travar sua operação)
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
              Quero avaliar minha operação com a Sysplan
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
