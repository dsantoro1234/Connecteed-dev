import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, ShieldCheck, Rocket, Zap } from "lucide-react";

const LandingShop = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Connecteed Shop: Il punto di partenza perfetto per il tuo e-commerce
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Soluzioni e-commerce complete basate su Shopify, perfette per piccole e medie imprese.
            Implementazione rapida e risultati garantiti.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">La soluzione Connecteed Shop</h2>
              <p className="text-lg mb-6 text-gray-300">
                Connecteed Shop è la nostra soluzione entry-level che consente di avviare un e-commerce professionale 
                in tempi rapidi e con un budget contenuto, senza rinunciare alla qualità e alle funzionalità essenziali.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Utilizziamo la potente piattaforma Shopify per creare un negozio online completo, 
                personalizzato secondo l'identità visiva del tuo brand e ottimizzato per massimizzare le conversioni.
              </p>
              <p className="text-lg font-bold text-white">
                Perfetta per startup, piccole imprese e chi si avvicina per la prima volta all'e-commerce con un budget dai 3.000€ ai 10.000€.
              </p>
            </div>
            <div className="dual-neon-card backdrop-blur-md bg-black/40 border-2 border-gradient-dual transition-all duration-500 p-8 rounded-lg shadow-[0_15px_30px_-12px_rgba(149,191,71,0.25)] transform hover:-translate-y-2">
              <h3 className="section-subheading">Cosa include Connecteed Shop:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#95BF47] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Setup completo:</span> Configurazione dello store e delle funzionalità essenziali</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#95BF47] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Design personalizzato:</span> Adattamento di un tema premium alle esigenze del tuo brand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#95BF47] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">SEO base:</span> Ottimizzazione per visibilità sui motori di ricerca</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#95BF47] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Integrazione pagamenti:</span> Setup dei principali gateway di pagamento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#95BF47] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Formazione base:</span> 2 ore di formazione per utilizzare al meglio la piattaforma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Caratteristiche principali</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Speed Card */}
            <div className="feature-card-shopify">
              <div className="p-6">
                <div className="icon-container-shopify">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="section-subheading">Implementazione rapida</h3>
                <p className="text-gray-300 mb-4">
                  Lanciamo il tuo e-commerce in sole 2-4 settimane, permettendoti di iniziare a vendere rapidamente e recuperare l'investimento.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><span className="text-[#95BF47] mr-2">•</span> Setup veloce</li>
                  <li className="flex items-center"><span className="text-[#95BF47] mr-2">•</span> Temi pre-ottimizzati</li>
                  <li className="flex items-center"><span className="text-[#95BF47] mr-2">•</span> Processi standardizzati</li>
                </ul>
              </div>
            </div>
            
            {/* Reliability Card */}
            <div className="feature-card-shopify">
              <div className="p-6">
                <div className="icon-container-shopify">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="section-subheading">Affidabilità Shopify</h3>
                <p className="text-gray-300 mb-4">
                  Sfrutta tutti i vantaggi della piattaforma Shopify: hosting sicuro, uptime garantito, aggiornamenti automatici e supporto 24/7.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><span className="text-[#95BF47] mr-2">•</span> Sicurezza avanzata</li>
                  <li className="flex items-center"><span className="text-[#95BF47] mr-2">•</span> Hosting incluso</li>
                  <li className="flex items-center"><span className="text-[#95BF47] mr-2">•</span> Backup automatici</li>
                </ul>
              </div>
            </div>
            
            {/* Scalability Card */}
            <div className="feature-card-shopify">
              <div className="p-6">
                <div className="icon-container-shopify">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="section-subheading">Scalabilità</h3>
                <p className="text-gray-300 mb-4">
                  Cresci senza limiti: la soluzione Connecteed Shop può essere facilmente potenziata con funzionalità aggiuntive quando ne avrai bisogno.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><span className="text-[#95BF47] mr-2">•</span> App modulari</li>
                  <li className="flex items-center"><span className="text-[#95BF47] mr-2">•</span> Upgrade facilitati</li>
                  <li className="flex items-center"><span className="text-[#95BF47] mr-2">•</span> Percorso di crescita</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Il nostro processo</h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Implementiamo il tuo e-commerce Shopify in un processo semplice e strutturato,
            garantendo risultati eccellenti e tempistiche certe.
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Process lines with color matching their starting points */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-1/4 w-0.5 bg-[#0071E1] hidden md:block"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-1/4 h-1/4 w-0.5 bg-[#90bf4c] hidden md:block"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-2/4 h-1/4 w-0.5 bg-[#90bf4c] hidden md:block"></div>
            {/* Shorter line for step 4 (half the height) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-3/4 h-[12.5%] w-0.5 bg-gradient-to-b from-[#006ee0] to-[#90bf4c] hidden md:block"></div>
            
            {/* Step 1 - Blue */}
            <div className="flex items-start gap-8 mb-16 relative">
              <Card className="feature-card-shopify flex-1 p-6 border-2 border-[#0071E1] relative">
                {/* Centered number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0071E1] text-white flex items-center justify-center font-bold shrink-0 z-10">1</div>
                <h3 className="text-xl font-bold mb-2 text-white mt-4">Discovery e pianificazione</h3>
                <p className="text-gray-300">
                  Analizziamo le tue esigenze, definiamo gli obiettivi e creiamo un piano dettagliato per il tuo store Shopify, 
                  includendo wireframe e tempistiche.
                </p>
              </Card>
            </div>
            
            {/* Step 2 - Green */}
            <div className="flex items-start gap-8 mb-16 relative">
              <Card className="feature-card-shopify flex-1 p-6 border-2 border-[#90bf4c] relative">
                {/* Centered number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#90bf4c] text-white flex items-center justify-center font-bold shrink-0 z-10">2</div>
                <h3 className="text-xl font-bold mb-2 text-white mt-4">Design e personalizzazione</h3>
                <p className="text-gray-300">
                  Adattiamo un tema premium Shopify alla tua identità visiva, creando un design professionale 
                  che rappresenti al meglio il tuo brand.
                </p>
              </Card>
            </div>
            
            {/* Step 3 - Green */}
            <div className="flex items-start gap-8 mb-16 relative">
              <Card className="feature-card-shopify flex-1 p-6 border-2 border-[#90bf4c] relative">
                {/* Centered number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#90bf4c] text-white flex items-center justify-center font-bold shrink-0 z-10">3</div>
                <h3 className="text-xl font-bold mb-2 text-white mt-4">Sviluppo e configurazione</h3>
                <p className="text-gray-300">
                  Configuriamo tutte le funzionalità essenziali: catalogo prodotti, metodi di pagamento,
                  spedizioni, tasse e le impostazioni generali dello store.
                </p>
              </Card>
            </div>
            
            {/* Step 4 - Updated with dual-neon-card style and inverted gradient colors */}
            <div className="flex items-start gap-8 relative">
              <Card className="dual-neon-card backdrop-blur-md bg-[#101010]/40 border-2 border-gradient-dual transition-all duration-500 p-8 md:p-12 rounded-lg shadow-[0_15px_30px_-12px_rgba(0,110,224,0.25),0_15px_30px_-12px_rgba(144,191,76,0.25)] flex-1 relative">
                {/* Centered number with inverted gradient */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#006ee0] to-[#90bf4c] text-white flex items-center justify-center font-bold shrink-0 z-10">4</div>
                <h3 className="text-xl font-bold mb-2 text-white mt-4">Lancio e formazione</h3>
                <p className="text-gray-300">
                  Dopo test approfonditi, lanciamo il tuo e-commerce e ti forniamo una formazione 
                  su come gestire autonomamente la piattaforma nel quotidiano.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Fix by using the correct prop name */}
      <section id="contact-form" className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-2">Iniziamo il tuo progetto</h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Compila il form sottostante per richiedere una consulenza gratuita e scoprire come possiamo aiutarti a far crescere il tuo business.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <CTASection pageName="landing-shop" />
          </div>

          {/* Footer with Shopify Plus Logo */}
          <div className="mt-16 flex justify-end items-center">
            <img 
              src="/lovable-uploads/8d1c6430-6061-4c70-a105-8b99326ce29b.png" 
              alt="Shopify Plus Logo" 
              className="h-12 md:h-16 object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingShop;
