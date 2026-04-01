import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    users: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      users: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-24 relative section-light">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Próximo Passo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Descubra em 30 minutos quanto sua planilha está te custando
            </h2>
            <p className="text-lg text-muted-foreground">
              Uma conversa sem compromisso com um especialista Sysplan. Você sai com diagnóstico real, independente de fechar negócio.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail corporativo *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Empresa *</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nome da empresa"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Cargo</Label>
                <Input
                  id="role"
                  name="role"
                  placeholder="Seu cargo"
                  value={formData.role}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="users">Quantas pessoas usam hoje a(s) planilha(s) da operação?</Label>
              <Input
                id="users"
                name="users"
                placeholder="Ex: 10-20 pessoas, mais de 50, etc."
                value={formData.users}
                onChange={handleChange}
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Conte um pouco sobre seu desafio atual..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
            </div>

            <Button 
              type="submit" 
              variant="cta" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Quero minha avaliação gratuita"}
              <Send className="w-5 h-5" />
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
