import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Clock, Sun, Sunset } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData, submitFormData, getCurrentPageName } from "@/utils/formSubmission";

const Contatti = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
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
    
    // Get the current page name
    const pageName = getCurrentPageName();
    
    // Submit the form data
    const success = await submitFormData(formData, pageName, toast);
    
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
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Parliamo del tuo progetto
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Siamo qui per rispondere a tutte le tue domande e aiutarti a trovare la soluzione ideale per il tuo business.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="section-heading">Contattaci</h2>
              <p className="text-gray-300 mb-8">
                Compila il form sottostante e ti risponderemo entro 24 ore lavorative. Puoi anche contattarci direttamente tramite email o telefono.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome" className="text-white">Nome e cognome</Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    className="bg-black/40 border-white/10 mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
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
                  <Label htmlFor="telefono" className="text-white">Numero di telefono</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Il tuo numero di telefono"
                    className="bg-black/40 border-white/10 mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="azienda" className="text-white">Azienda</Label>
                  <Input
                    id="azienda"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    placeholder="Nome dell'azienda"
                    className="bg-black/40 border-white/10 mt-2"
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
                        id="contact-morning"
                        checked={formData.timeSlots.morning}
                        onCheckedChange={(checked) => handleTimeSlotChange('morning', checked === true)}
                        className="data-[state=checked]:bg-[#95BF47] data-[state=checked]:border-[#95BF47]"
                      />
                      <Label 
                        htmlFor="contact-morning" 
                        className="flex items-center text-white font-bold cursor-pointer"
                      >
                        <Sun className="mr-1 h-4 w-4 text-white" />
                        10:00 - 13:00
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="contact-afternoon"
                        checked={formData.timeSlots.afternoon}
                        onCheckedChange={(checked) => handleTimeSlotChange('afternoon', checked === true)} 
                        className="data-[state=checked]:bg-[#95BF47] data-[state=checked]:border-[#95BF47]"
                      />
                      <Label 
                        htmlFor="contact-afternoon" 
                        className="flex items-center text-white font-bold cursor-pointer"
                      >
                        <Sunset className="mr-1 h-4 w-4 text-white" />
                        14:00 - 17:00
                      </Label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="messaggio" className="text-white">Messaggio</Label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Come possiamo aiutarti?"
                    className="w-full h-32 px-3 py-2 text-base bg-black/40 border border-white/10 rounded-md mt-2"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="outline-blue"
                  className="w-full px-6 py-6 h-auto text-lg transition-all shadow-lg hover:shadow-[#0058dc]/20"
                >
                  Invia messaggio
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="dual-neon-card backdrop-blur-md bg-black/40 border-2 border-gradient-dual transition-all duration-500 p-8 rounded-lg shadow-lg">
                <h3 className="section-subheading">Informazioni di contatto</h3>
                
                <div className="space-y-6 mt-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-[#00D5F7] h-6 w-6 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <a href="mailto:contact@connecteed.com" className="text-gray-300 hover:text-white transition-colors">
                        contact@connecteed.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#0058dc] h-6 w-6 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Sede</div>
                      <address className="text-gray-300 not-italic">
                        Via della Conciliazione 44<br />
                        00193 Roma, Italia
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section - Mobile adjustments */}
              {isMobile ? (
                <div className="feature-card p-4 mb-8 h-[65%]">
                  <h3 className="section-subheading mb-3">Domande frequenti</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Quanto tempo ci vuole per sviluppare un e-commerce?</h4>
                      <p className="text-gray-300 text-sm">
                        I tempi variano in base alla complessità del progetto: da 2-4 settimane per soluzioni Shopify Base fino a 2-3 mesi per ecosistemi personalizzati complessi.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-1">Offrite servizi di manutenzione post-lancio?</h4>
                      <p className="text-gray-300 text-sm">
                        Sì, offriamo diversi pacchetti di manutenzione e supporto continuo per garantire che il tuo e-commerce rimanga sempre aggiornato e performante.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-1">Posso migrare il mio negozio esistente?</h4>
                      <p className="text-gray-300 text-sm">
                        Certamente. Abbiamo esperienza nella migrazione di negozi da diverse piattaforme verso Shopify o soluzioni personalizzate, preservando dati, SEO e funzionalità.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-1">Altre domande?</h4>
                      <p className="text-gray-300 text-sm">
                        Scrivici e risolveremo ogni tuo dubbio riguardo ai nostri servizi e soluzioni. Siamo qui per aiutarti a trovare la risposta più adatta alle tue esigenze.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="feature-card p-4 h-[50%] overflow-auto">
                  <h3 className="section-subheading mb-3">Domande frequenti</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Quanto tempo ci vuole per sviluppare un e-commerce?</h4>
                      <p className="text-gray-300 text-sm">
                        I tempi variano in base alla complessità del progetto: da 2-4 settimane per soluzioni Shopify Base fino a 2-3 mesi per ecosistemi personalizzati complessi.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-1">Offrite servizi di manutenzione post-lancio?</h4>
                      <p className="text-gray-300 text-sm">
                        Sì, offriamo diversi pacchetti di manutenzione e supporto continuo per garantire che il tuo e-commerce rimanga sempre aggiornato e performante.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-1">Posso migrare il mio negozio esistente?</h4>
                      <p className="text-gray-300 text-sm">
                        Certamente. Abbiamo esperienza nella migrazione di negozi da diverse piattaforme verso Shopify o soluzioni personalizzate, preservando dati, SEO e funzionalità.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-1">Altre domande?</h4>
                      <p className="text-gray-300 text-sm">
                        Scrivici e risolveremo ogni tuo dubbio riguardo ai nostri servizi e soluzioni. Siamo qui per aiutarti a trovare la risposta più adatta alle tue esigenze.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contatti;
