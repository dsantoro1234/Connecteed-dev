import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Plus, Equal } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ConnecteedHeadless = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // On mobile, we'll keep animation step on 3 (solution slide)
    if (isMobile) {
      setAnimationStep(3);
      return;
    }
    
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev < 3 ? prev + 1 : 0));
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      {/* Subtitle moved above hero section with black text */}
      <div className="container mx-auto px-4 text-center py-8">
        <h1 className="text-3xl font-bold text-white max-w-3xl mx-auto">
          Unisci la potenza del backend Shopify con l'agilità di un frontend React personalizzato
        </h1>
      </div>
      
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden h-[550px] flex">
        <div className="w-full h-full relative overflow-hidden">
          {/* Base Layer - Dark background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#101010] via-[#101010] to-[#101010]"></div>
          
          {/* Interactive Cards Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-row items-center gap-6">
              {/* React Card - Only show on desktop */}
              {!isMobile && (
                <div className={`transition-all duration-1000 ease-in-out ${
                  animationStep === 0 ? "scale-110 opacity-100" : "scale-100 opacity-90"
                }`}>
                  <div className="w-64 h-64 rounded-lg react-glass bg-[#00D5F7]/10 flex flex-col items-center justify-center p-6 text-center">
                    <div className="absolute -top-3 -right-3 bg-[#00D5F7] text-black text-xs font-bold px-2 py-1 rounded">FRONTEND</div>
                    {/* React Logo */}
                    <img 
                      src="/lovable-uploads/04dff893-303f-4300-b2ec-0f6bacf177e9.png" 
                      alt="React Logo" 
                      className="w-16 h-16 mb-4" 
                    />
                    <h3 className="text-xl font-bold mb-2 text-white">React</h3>
                    <p className="text-sm text-white/70">Interfacce utente reattive, performanti e completamente personalizzabili</p>
                  </div>
                </div>
              )}
              
              {/* Plus Icon - Only show on desktop */}
              {!isMobile && (
                <div className="flex items-center justify-center">
                  <Plus className="w-10 h-10 text-white/80" />
                </div>
              )}
              
              {/* Shopify Card - Only show on desktop */}
              {!isMobile && (
                <div className={`transition-all duration-1000 ease-in-out ${
                  animationStep === 1 ? "scale-110 opacity-100" : "scale-100 opacity-90"
                }`}>
                  <div className="w-64 h-64 rounded-lg shopify-glass bg-[#95BF47]/10 flex flex-col items-center justify-center p-6 text-center">
                    <div className="absolute -top-3 -right-3 bg-[#95BF47] text-black text-xs font-bold px-2 py-1 rounded">BACKEND</div>
                    {/* Shopify Logo */}
                    <img 
                      src="/lovable-uploads/f4daf321-037a-4bd2-a6c9-ac64ee050923.png" 
                      alt="Shopify Logo" 
                      className="w-16 h-16 mb-4" 
                    />
                    <h3 className="text-xl font-bold mb-2 text-white">Shopify</h3>
                    <p className="text-sm text-white/70">Potente backend per e-commerce, gestione prodotti, ordini e pagamenti</p>
                  </div>
                </div>
              )}
              
              {/* Equals Icon - Only show on desktop */}
              {!isMobile && (
                <div className="flex items-center justify-center">
                  <Equal className="w-10 h-10 text-white/80" />
                </div>
              )}
              
              {/* Combined Solution Card - Always show but centered on mobile */}
              <div className={`transition-all duration-1000 ease-in-out ${
                (animationStep === 2 || animationStep === 3) ? "scale-110 opacity-100 z-10" : "scale-100 opacity-90"
              } ${isMobile ? "mx-auto" : ""}`}>
                <div className="w-72 h-72 rounded-lg combined-glass flex flex-col items-center justify-center p-6 text-center transition-shadow duration-500">
                  <div className="absolute -top-3 -right-3 bg-white text-black text-xs font-bold px-2 py-1 rounded">SOLUZIONE COMPLETA</div>
                  <div className="flex justify-center mb-4">
                    {/* Combined Logos */}
                    <img 
                      src="/lovable-uploads/04dff893-303f-4300-b2ec-0f6bacf177e9.png" 
                      alt="React Logo" 
                      className="w-10 h-10 mr-2" 
                    />
                    <span className="text-2xl text-white">+</span>
                    <img 
                      src="/lovable-uploads/f4daf321-037a-4bd2-a6c9-ac64ee050923.png" 
                      alt="Shopify Logo" 
                      className="w-10 h-10 ml-2" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Connecteed Headless</h3>
                  <p className="text-sm text-white/80">Il meglio di entrambi i mondi: la potenza di Shopify con la flessibilità di React</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Title overlay */}
          <div className="absolute inset-x-0 top-8 text-center z-20">
            <div className="flex justify-center mt-4"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Il futuro dell'e-commerce è headless</h2>
              <p className="text-lg mb-6 text-gray-300">
                Con la nostra soluzione Connecteed Headless, separiamo il frontend dal backend, 
                permettendoti di creare un'esperienza utente completamente personalizzata 
                mantenendo tutti i vantaggi della piattaforma Shopify.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Utilizziamo React per costruire interfacce utente reattive e coinvolgenti che 
                si caricano istantaneamente, migliorano la user experience e aumentano le conversioni.
              </p>
              <p className="text-lg font-bold text-white">
                Siamo partner ufficiali Shopify Plus, garantendo la massima competenza nella 
                creazione di soluzioni e-commerce headless all'avanguardia.
              </p>
            </div>
            <div className="dual-neon-card backdrop-blur-md bg-[#101010]/40 border-2 border-gradient-dual transition-all duration-500 p-8 rounded-lg shadow-[0_15px_30px_-12px_rgba(0,213,247,0.25),0_15px_30px_-12px_rgba(149,191,71,0.25)] transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-6 text-white">Vantaggi della soluzione headless:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Velocità superiore:</span> Tempi di caricamento più rapidi grazie all'architettura frontend ottimizzata</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Flessibilità completa:</span> Design e funzionalità completamente personalizzabili</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">SEO avanzato:</span> Struttura ottimizzata per i motori di ricerca</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Integrazione omnicanale:</span> Facilità di connessione con altri canali e touchpoint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Sicurezza del backend Shopify:</span> Mantenimento di tutti i vantaggi della piattaforma</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Il Nostro Stack Tecnologico</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Card */}
            <div 
              className="glass-card backdrop-blur-md bg-[#101010]/40 border border-[#00D5F7]/40 transition-all duration-500 transform hover:-translate-y-[-5px] rounded-lg h-full shadow-[0_8px_20px_-6px_rgba(0,213,247,0.5)]"
            >
              <div className="p-6">
                <div className="mx-auto mb-4 p-3 rounded-full bg-[#00D5F7]/10 text-[#00D5F7] w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Frontend React</h3>
                <p className="text-gray-300 mb-4">
                  Utilizziamo React, Next.js e altre tecnologie moderne per creare frontend veloci, 
                  reattivi e ottimizzati per qualsiasi dispositivo.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><Badge variant="blue" className="mr-2">React / Next.js</Badge></li>
                  <li className="flex items-center"><Badge variant="blue" className="mr-2">GraphQL</Badge></li>
                  <li className="flex items-center"><Badge variant="blue" className="mr-2">Tailwind CSS</Badge></li>
                  <li className="flex items-center"><Badge variant="blue" className="mr-2">Progressive Web App (PWA)</Badge></li>
                </ul>
              </div>
            </div>
            
            {/* Backend Card */}
            <div 
              className="glass-card backdrop-blur-md bg-[#101010]/40 border border-[#95BF47]/40 transition-all duration-500 transform hover:-translate-y-[-5px] rounded-lg h-full shadow-[0_8px_20px_-6px_rgba(149,191,71,0.5)]"
            >
              <div className="p-6">
                <div className="mx-auto mb-4 p-3 rounded-full bg-[#95BF47]/10 text-[#95BF47] w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6" y1="6" y2="6"/><line x1="6" x2="6" y1="18" y2="18"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Backend Shopify</h3>
                <p className="text-gray-300 mb-4">
                  Sfruttiamo la potenza di Shopify come backend sicuro e affidabile per 
                  gestire pagamenti, inventario, ordini e dati clienti.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><Badge variant="blue" className="mr-2 bg-[#95BF47] hover:bg-[#95BF47]/80">Shopify Plus</Badge></li>
                  <li className="flex items-center"><Badge variant="blue" className="mr-2 bg-[#95BF47] hover:bg-[#95BF47]/80">Shopify Admin API</Badge></li>
                  <li className="flex items-center"><Badge variant="blue" className="mr-2 bg-[#95BF47] hover:bg-[#95BF47]/80">Shopify Storefront API</Badge></li>
                  <li className="flex items-center"><Badge variant="blue" className="mr-2 bg-[#95BF47] hover:bg-[#95BF47]/80">Shopify Payments</Badge></li>
                </ul>
              </div>
            </div>
            
            {/* Integrations Card */}
            <div 
              className="glass-card backdrop-blur-md bg-[#101010]/40 border border-[#0058dc]/40 transition-all duration-500 transform hover:-translate-y-[-5px] rounded-lg h-full shadow-[0_8px_20px_-6px_rgba(0,88,220,0.5)]"
            >
              <div className="p-6">
                <div className="mx-auto mb-4 p-3 rounded-full bg-[#0058dc]/10 text-[#0058dc] w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-component"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Integrazioni</h3>
                <p className="text-gray-300 mb-4">
                  Integriamo il tuo e-commerce con tutti i servizi necessari per creare 
                  un ecosistema digitale completo e performante.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><Badge variant="blue" className="mr-2">CRM (Salesforce, HubSpot)</Badge></li>
                  <li className="flex items-center"><Badge variant="blue" className="mr-2">Marketing automation</Badge></li>
                  <li className="flex items-center"><Badge variant="blue" className="mr-2">Analytics e performance</Badge></li>
                  <li className="flex items-center"><Badge variant="blue" className="mr-2">ERP e sistemi gestionali</Badge></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white inline-block">
            Partner Shopify Plus
          </h3>
          <h2 className="text-3xl font-bold mb-6 text-white">
            <div className="flex items-center justify-center gap-4">
              <img 
                src="/lovable-uploads/bd154649-9635-4f51-9907-9b93aadfcdb2.png" 
                alt="Connecteed Logo" 
                className="h-10"
              />
              <span>×</span>
              <img 
                src="/lovable-uploads/f4daf321-037a-4bd2-a6c9-ac64ee050923.png" 
                alt="Shopify Logo" 
                className="h-10"
              />
            </div>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            In qualità di partner ufficiale Shopify Plus, abbiamo accesso a risorse esclusive, 
            supporto dedicato e formazione avanzata per garantire il massimo livello di 
            competenza nelle nostre implementazioni headless.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default ConnecteedHeadless;
