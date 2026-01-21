import { motion } from "framer-motion";
import { Code, Palette, Link, Cloud } from "lucide-react";

const differentiators = [
  {
    icon: Code,
    title: "Sistemas sob medida",
    description: "Desenvolvemos do zero, exatamente para sua necessidade",
  },
  {
    icon: Palette,
    title: "UX e gamificação",
    description: "Interfaces que engajam o usuário e facilitam a adoção",
  },
  {
    icon: Link,
    title: "Integrações e automações",
    description: "Conectamos com ERPs, CRMs e sistemas que você já usa",
  },
  {
    icon: Cloud,
    title: "Cloud e microsserviços",
    description: "Arquitetura escalável para acompanhar seu crescimento",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 relative">
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
              🧠 Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Conte com a Sysplan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada projeto nasce de uma dor específica, mas nosso stack permite construir soluções completas:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="gradient-border p-8 text-center"
          >
            <p className="text-lg text-muted-foreground mb-2">
              Nosso foco é simples:
            </p>
            <p className="text-xl font-semibold text-foreground mb-4">
              Entregar o que precisa ser feito, de um jeito leve, intuitivo e gostoso de usar.
            </p>
            <p className="text-2xl md:text-3xl font-black gradient-text">
              Get it done. Get it fun.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
