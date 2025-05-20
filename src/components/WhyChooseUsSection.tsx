
import { Card } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-[#101010]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading text-center">Perché scegliere noi?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Siamo esperti nello sviluppo di soluzioni che non solo sembrano fantastiche, ma generano risultati concreti.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column with stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">I nostri risultati</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="feature-card p-6 text-center">
                <div className="text-[#0071E1] text-4xl font-bold mb-2">98%</div>
                <p className="text-gray-300">Tasso di soddisfazione dei clienti</p>
              </div>
              <div className="feature-card p-6 text-center">
                <div className="text-[#0071E1] text-4xl font-bold mb-2">200+</div>
                <p className="text-gray-300">Progetti completati con successo</p>
              </div>
              <div className="feature-card p-6 text-center">
                <div className="text-[#0071E1] text-4xl font-bold mb-2">40%</div>
                <p className="text-gray-300">Incremento medio nelle conversioni</p>
              </div>
            </div>
          </div>
          
          {/* Right column with Why Choose Us card */}
          <div className="flex justify-center items-center">
            <Card className="p-6 bg-[#101010]/60 rounded-lg border border-white/10 max-w-md w-full">
              <h3 className="text-xl font-semibold mb-4 text-white">Perché scegliere noi?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#00D5F7] mr-2">✓</span>
                  <span>Expertise pluriennale nello sviluppo e-commerce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#95BF47] mr-2">✓</span>
                  <span>Soluzioni personalizzate per ogni budget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00D5F7] mr-2">✓</span>
                  <span>Supporto continuo e manutenzione inclusi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#95BF47] mr-2">✓</span>
                  <span>Integrazione con qualsiasi sistema esistente</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
