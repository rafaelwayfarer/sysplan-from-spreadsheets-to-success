import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, ShieldCheck, Workflow, Sparkles, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "80% menos tempo",
    description: "Redução do tempo gasto preenchendo e conferindo planilhas",
  },
  {
    icon: ShieldCheck,
    title: "Menos erros",
    description: "Muito menos erros humanos e retrabalho na operação",
  },
  {
    icon: Workflow,
    title: "Segurança",
    description: "Segurança e rastreabilidade das informações",
  },
  {
    icon: Sparkles,
    title: "Sob medida",
    description: "Fluxos pensados para o seu jeito de operar, não o contrário",
  },
];

export const SolutionSection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solucao" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
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
              A Solução
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Do caos da planilha ao sistema que{" "}
              <span className="gradient-text">trabalha por você.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Sysplan desenvolve sistemas sob medida para médias e grandes empresas que cresceram demais para continuar reféns de planilhas.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 mb-12"
          >
            <p className="text-lg text-center text-muted-foreground">
              Em vez de forçar um SaaS genérico na sua rotina, nós construímos o sistema{" "}
              <span className="text-foreground font-medium">a partir do seu processo real</span>, entre áreas, departamentos e terceiros.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Button variant="cta" size="lg" onClick={scrollToContact}>
              Agende uma conversa
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Veja como tirar sua operação da planilha
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
