import { motion } from "framer-motion";
import { Clock, AlertTriangle, Eye, Shield } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    text: "Horas perdidas atualizando e conferindo informações",
  },
  {
    icon: AlertTriangle,
    text: "Erros humanos que viram retrabalho, atraso e desconfiança nos dados",
  },
  {
    icon: Eye,
    text: "Dificuldade de ter uma visão consolidada entre áreas, unidades ou filiais",
  },
  {
    icon: Shield,
    text: "Medo de \"quebrar\" a planilha ou perder histórico quando alguém mexe onde não devia",
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
              Planilha não é sistema.{" "}
              <span className="text-muted-foreground">
                E você está pagando essa conta todos os dias.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Se a operação da sua empresa ainda roda em planilhas gigantes, provavelmente você vive isso na rotina:
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="gradient-border p-8 text-center"
          >
            <p className="text-lg text-muted-foreground">
              Nós sabemos: <span className="text-foreground font-medium">a planilha já salvou muita operação.</span>
              <br />
               Mas sua empresa <span className="text-foreground font-medium">não precisa virar refém</span> dela.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
