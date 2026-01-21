import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vou precisar parar a operação para trocar a planilha pelo sistema?",
    answer: "Não. O projeto é estruturado justamente para construir o sistema em paralelo, testar com uma área piloto e só depois migrar 100%. Com segurança, treinamento e acompanhamento.",
  },
  {
    question: "Meus times são muito diferentes entre si. Dá pra atender todos?",
    answer: "Sim. A vantagem de um sistema sob medida é justamente respeitar a rotina de cada área, mas mantendo um núcleo único de informações para gestão e tomada de decisão.",
  },
  {
    question: "E se eu já tiver outros sistemas rodando?",
    answer: "Integração é uma das nossas especialidades. Em vez de criar \"mais uma ilha de informação\", a Sysplan trabalha para conectar o novo sistema ao que você já utiliza (ERPs, CRMs, plataformas legado etc.).",
  },
  {
    question: "Quanto tempo leva para ter algo funcionando?",
    answer: "Depende da complexidade, mas nossa abordagem por MVP permite que você tenha uma primeira versão útil em semanas, não em anos. Depois seguimos evoluindo em ciclos ágeis.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Perguntas que podem estar passando pela sua cabeça
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="glass-card rounded-xl px-6 border-none data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
