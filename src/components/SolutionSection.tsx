import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Workflow, Rocket, Search, Palette, TrendingUp, Link, ShieldCheck, ArrowRight } from "lucide-react";

const deliverables = [
  {
    icon: Workflow,
    title: "Sistema sob medida para o seu processo",
    description: "Construído a partir das suas planilhas reais, não de um template genérico. Seus fluxos, suas regras, suas integrações.",
  },
  {
    icon: Rocket,
    title: "MVP em semanas, não em meses",
    description: "Você valida o sistema funcionando no coração da operação antes de expandir. Sem risco de pagar por algo que não serve.",
  },
  {
    icon: Search,
    title: "Diagnóstico gratuito da sua operação",
    description: "Antes de qualquer contrato, nosso time mapeia suas planilhas, rotinas e gargalos — e te mostra onde pode estar o desperdício.",
  },
  {
    icon: Palette,
    title: "UX pensado para adoção do time",
    description: "Interfaces que o time quer usar, não que o time é obrigado a usar. Reduz resistência e acelera o ROI.",
  },
  {
    icon: TrendingUp,
    title: "Evolução contínua pós-lançamento",
    description: "Seu negócio muda, seu sistema também muda. Não cobramos para \"refazer tudo\" — evoluímos o que já funciona.",
  },
  {
    icon: Link,
    title: "Integração com os sistemas que você já usa",
    description: "ERP, CRM, sistemas legados — conectamos tudo. Não precisa jogar fora o que já funciona.",
  },
];

export const SolutionSection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solucao" className="py-24 relative section-light">
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
              O que você recebe ao trabalhar com a{" "}
              <span className="gradient-text">Sysplan</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Não vendemos um software. Entregamos a operação funcionando.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gradient-border p-6 hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* SLA / Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 mb-12 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">SLA contratual, sem letra miúda</h3>
              <p className="text-muted-foreground">
                Cada entrega tem prazo e critérios de aceite definidos em contrato. Se não atender, trabalhamos até atender.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Button variant="cta" size="lg" onClick={scrollToContact}>
              Quero avaliar minha operação
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
