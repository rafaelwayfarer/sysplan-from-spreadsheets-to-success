import { motion } from "framer-motion";
import { Bug, Copy, Clock, Users } from "lucide-react";

const painPoints = [
  {
    icon: Bug,
    text: "Alguém \"quebrou\" uma fórmula e levou 2 dias para descobrir. O relatório estava errado e ninguém sabia.",
  },
  {
    icon: Copy,
    text: "Você tem 3 versões da mesma planilha no e-mail e não sabe qual é a atual.",
  },
  {
    icon: Clock,
    text: "Para fechar o mês, alguém precisa ficar 2 dias consolidando dados de áreas diferentes.",
  },
  {
    icon: Users,
    text: "Seu time cresceu, mas a planilha não escala — e você contratou mais gente para cuidar dela, não do negócio.",
  },
];

export const PainSection = () => {
  return (
    <section id="dor" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              O Problema
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Você não tem um problema de tecnologia.{" "}
              <span className="text-muted-foreground">
                Você tem um problema de crescimento.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua empresa cresceu, e as planilhas que um dia salvaram sua operação agora estão te custando dinheiro todos os dias. Reconhece alguma dessas situações?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-foreground">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
