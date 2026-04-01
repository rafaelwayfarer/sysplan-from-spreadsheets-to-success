import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Este tipo de serviço é pra minha empresa?",
    answer: "Esse projeto é ideal para empresas que controlam operações em planilhas, têm muitos controles manuais, precisam integrar sistemas, têm operação complexa ou querem escalar a operação.",
  },
  {
    question: "Precisarei parar a operação durante a migração?",
    answer: "Não. Construímos o sistema em paralelo com sua operação atual. A virada é planejada para ser gradual e com o menor impacto no dia a dia.",
  },
  {
    question: "Já tentei SaaS e não se encaixou na minha rotina. Por que seria diferente?",
    answer: "Porque não existe um SaaS chamado \"Sysplan\". Construímos do zero, a partir do seu processo — não o contrário.",
  },
  {
    question: "Em quanto tempo terei algo funcionando?",
    answer: "Depende da complexidade, mas o MVP costuma estar rodando entre 6 e 12 semanas. Você valida antes de expandir.",
  },
  {
    question: "Já tenho outros sistemas rodando. Dá pra integrar?",
    answer: "Sim. Integrações são parte do nosso core: ERPs, CRMs, sistemas legados. Você não precisa jogar nada fora.",
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
              Dúvidas Comuns
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              O que costuma passar pela cabeça antes de falar com a gente
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
