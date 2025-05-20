
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, PhoneCall, Clock, Sun, Sunset, Building } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData, submitFormData, getCurrentPageName, PageName } from "@/utils/formSubmission";

interface CTASectionProps {
  pageName?: PageName;
}

const CTASection = ({ pageName }: CTASectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefono: "",
    azienda: "",
    messaggio: "",
    timeSlots: {
      morning: false,
      afternoon: false
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTimeSlotChange = (timeSlot: 'morning' | 'afternoon', checked: boolean) => {
    setFormData({
      ...formData,
      timeSlots: {
        ...formData.timeSlots,
        [timeSlot]: checked
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Use provided pageName or get it from the current page
    const pageNameToUse = pageName || getCurrentPageName();
    
    // Submit the form data
    const success = await submitFormData(formData, pageNameToUse, toast);
    
    // Reset form if submission was successful
    if (success) {
      setFormData({
        nome: "",
        email: "",
        telefono: "",
        azienda: "",
        messaggio: "",
        timeSlots: {
          morning: false,
          afternoon: false
        }
      });
    }
  };

  return (
    <section className="py-16 bg-[#101010]" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="dual-neon-card backdrop-blur-md bg-[#101010]/40 border-2 border-gradient-dual transition-all duration-500 p-8 md:p-12 rounded-lg shadow-[0_15px_30px_-12px_rgba(0,213,247,0.25),0_15px_30px_-12px_rgba(149,191,71,0.25)]">
          <div className="flex flex-col items-center justify-between">
            <div className="w-full max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">
                Pronto a trasformare il tuo business?
              </h2>
              <p className="text-lg text-gray-300 mb-6 text-center">
                Contattaci oggi per una consulenza gratuita e scopri come possiamo aiutarti a crescere 
                con soluzioni costruite su misura per le tue esigenze.
              </p>
              
              {/* Contact form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nome-cta" className="text-white">Nome e cognome</Label>
                  <Input
                    id="nome-cta"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    className="bg-black/40 border-white/10 mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="azienda-cta" className="flex items-center text-white">
                    <Building className="mr-2 h-4 w-4" />
                    Nome azienda
                  </Label>
                  <Input
                    id="azienda-cta"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    placeholder="Nome della tua azienda"
                    className="bg-black/40 border-white/10 mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email-cta" className="text-white">Email</Label>
                  <Input
                    id="email-cta"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="La tua email"
                    className="bg-black/40 border-white/10 mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="telefono-cta" className="flex items-center text-white">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Telefono
                  </Label>
                  <Input
                    id="telefono-cta"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Il tuo numero di telefono"
                    className="bg-black/40 border-white/10 mt-2"
                    required
                  />
                </div>

                {/* Time slot selector with checkboxes in a row */}
                <div className="bg-black/30 p-4 rounded-lg border border-white/10 mt-4">
                  <div className="flex items-center justify-center mb-3">
                    <Clock className="h-5 w-5 text-white" />
                    <Label className="text-white text-base font-medium ml-2">
                      Fasce orarie preferite
                    </Label>
                  </div>
                  <div className="flex justify-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="morning"
                        checked={formData.timeSlots.morning}
                        onCheckedChange={(checked) => handleTimeSlotChange('morning', checked === true)}
                        className="data-[state=checked]:bg-[#95BF47] data-[state=checked]:border-[#95BF47]"
                      />
                      <Label 
                        htmlFor="morning" 
                        className="flex items-center text-white font-bold cursor-pointer"
                      >
                        <Sun className="mr-1 h-4 w-4 text-white" />
                        10:00 - 13:00
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="afternoon"
                        checked={formData.timeSlots.afternoon}
                        onCheckedChange={(checked) => handleTimeSlotChange('afternoon', checked === true)} 
                        className="data-[state=checked]:bg-[#95BF47] data-[state=checked]:border-[#95BF47]"
                      />
                      <Label 
                        htmlFor="afternoon" 
                        className="flex items-center text-white font-bold cursor-pointer"
                      >
                        <Sunset className="mr-1 h-4 w-4 text-white" />
                        14:00 - 17:00
                      </Label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="messaggio-cta" className="text-white">Messaggio</Label>
                  <Textarea
                    id="messaggio-cta"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Come possiamo aiutarti?"
                    className="w-full h-24 px-3 py-2 text-base bg-black/40 border border-white/10 rounded-md mt-2"
                    required
                  />
                </div>
                
                <div className="flex justify-center w-full">
                  <Button 
                    type="submit" 
                    className="px-6 py-6 h-auto md:text-base whitespace-nowrap shadow-lg transition-all bg-[#0058dc] text-white hover:bg-transparent hover:text-[#0058dc] hover:border-2 hover:border-[#0058dc]"
                  >
                    Invia la richiesta di una call
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
