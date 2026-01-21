import { motion } from "framer-motion";
import { FileSpreadsheet, Puzzle, Layers, RefreshCw, Check } from "lucide-react";

const audiences = [
  "Têm processos críticos rodando em Excel/Google Sheets",
  "Já testaram softwares de prateleira (SaaS) que não se encaixam 100% na rotina",
  "Precisam integrar dados entre vários setores, unidades ou sistemas",
  "Estão em fase de crescimento ou transformação digital, mas não conseguem escalar na base da planilha",
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
              🎯 Para Quem É
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ideal para empresas que:
            </h2>
          </div>

          <div className="grid gap-4">
            {audiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-center gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-lg text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
