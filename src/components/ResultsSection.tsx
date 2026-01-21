import { motion } from "framer-motion";

// Import client logos
import cory from "@/assets/clients/cory.png";
import drogacenter from "@/assets/clients/drogacenter.png";
import feelFilmes from "@/assets/clients/feel-filmes.png";
import abbot from "@/assets/clients/abbot.png";
import zombie from "@/assets/clients/zombie.png";

const stats = [
  { number: "40+", label: "Anos desenvolvendo sistemas sob medida" },
  { number: "500+", label: "Clientes atendidos ao longo da história" },
  { number: "80%", label: "Redução de tempo em operações manuais" },
];

const clientLogos = [cory, drogacenter, feelFilmes, abbot, zombie];

export const ResultsSection = () => {
  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              40 anos, mais de 500 clientes e até{" "}
              <span className="gradient-text">80% de ganho operacional.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Sysplan é uma das pioneiras entre as software houses no Brasil. Desde 1983, já atendemos mais de 500 empresas em diferentes setores, sempre com foco em resolver problemas reais de operação.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 mb-12"
          >
            <p className="text-center text-muted-foreground">
              Somos os criadores do <span className="text-foreground font-semibold">LaborLIS</span>, um dos sistemas mais utilizados por laboratórios de análises clínicas no país{" "}
              <span className="text-muted-foreground/70">(solução posteriormente adquirida pela healthtech Proradis)</span>.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border p-8 text-center"
              >
                <div className="text-5xl md:text-6xl font-black stat-number mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Client logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-center text-sm text-muted-foreground mb-8">
              Empresas que confiam na Sysplan
            </p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-center p-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
                >
                  <img 
                    src={logo} 
                    alt={`Cliente ${index + 1}`} 
                    className="max-h-12 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
