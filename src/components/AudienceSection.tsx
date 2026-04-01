import { motion } from "framer-motion";
import { Check } from "lucide-react";

const inclusions = [
  "Diagnóstico da operação",
  "Mapeamento de processos",
  "Estruturação de dados",
  "Arquitetura do sistema",
  "Desenvolvimento do sistema",
  "Integrações com outros sistemas",
  "Dashboards e indicadores",
  "Implantação assistida",
  "Treinamento da equipe",
  "Manutenção do sistema",
  "Melhorias contínuas todos os meses",
];

export const AudienceSection = () => {
  return (
    <section className="py-24 relative">
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
              O que está incluído
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Quando você contrata a Sysplan, você também recebe:
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {inclusions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="gradient-border p-8 text-center"
          >
            <p className="text-lg text-muted-foreground mb-2">
              Seu sistema não fica parado. <span className="text-foreground font-medium">Todos os meses ele evolui.</span>
            </p>
            <p className="text-muted-foreground">
              A maioria dos softwares fica obsoleta. O seu melhora com o tempo.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
