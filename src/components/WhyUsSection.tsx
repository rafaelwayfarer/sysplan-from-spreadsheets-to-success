import { motion } from "framer-motion";
import { ShieldCheck, Layers, Ban, RefreshCw, TrendingUp, Shuffle } from "lucide-react";

const riskItems = [
  {
    icon: ShieldCheck,
    text: "Se não enxergarmos ganho operacional, não seguimos o projeto",
  },
  {
    icon: Layers,
    text: "O projeto é dividido por etapas",
  },
  {
    icon: Ban,
    text: "Não existe contrato de permanência mínima",
  },
  {
    icon: RefreshCw,
    text: "Você fica enquanto fizer sentido para sua empresa",
  },
  {
    icon: TrendingUp,
    text: "O sistema evolui continuamente",
  },
  {
    icon: Shuffle,
    text: "Você não precisa trocar toda sua operação de uma vez",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 relative section-light">
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
              Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Isso é o que fazemos para reduzir seu{" "}
              <span className="gradient-text">risco a zero</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {riskItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium pt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
