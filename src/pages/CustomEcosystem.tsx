
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Settings, Database, BarChart3, Globe, Cloud } from "lucide-react";

const CustomEcosystem = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
            Ecosistemi Digitali Custom: Integrazione completa per il tuo business
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Sviluppiamo soluzioni personalizzate che vanno oltre l'e-commerce, creando ecosistemi digitali
            completi che ottimizzano ogni aspetto del tuo business.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Un ecosistema su misura per te</h2>
              <p className="text-lg mb-6 text-gray-300">
                Il nostro approccio va oltre la creazione di un semplice e-commerce. Sviluppiamo ecosistemi 
                digitali completi che integrano tutti gli strumenti necessari per il tuo business: 
                dalla vendita online alla gestione dell'inventario, dalle analisi di marketing all'automazione dei processi.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Creiamo soluzioni personalizzate basate sulle tue specifiche esigenze, utilizzando le migliori 
                tecnologie disponibili e assicurando che ogni componente del tuo ecosistema digitale
                funzioni perfettamente con gli altri.
              </p>
              <p className="text-lg font-bold text-white">
                La soluzione ideale per aziende con processi complessi che necessitano di un sistema integrato e flessibile.
              </p>
            </div>
            <div className="dual-neon-card backdrop-blur-md bg-black/40 border-2 border-gradient-dual transition-all duration-500 p-8 rounded-lg shadow-[0_15px_30px_-12px_rgba(0,61,214,0.25)] transform hover:-translate-y-2">
              <h3 className="section-subheading">Il nostro approccio al custom:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Analisi approfondita:</span> Studio dettagliato dei tuoi processi e flussi di lavoro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Soluzione su misura:</span> Sviluppo di un ecosistema perfettamente allineato alle tue esigenze</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Integrazioni avanzate:</span> Connessione con tutti i tuoi sistemi esistenti (ERP, CRM, ecc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Automazione completa:</span> Riduzione delle attività manuali e ottimizzazione dei processi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#003DD6] font-bold mr-2">✓</span>
                  <span className="text-gray-300"><span className="font-semibold text-white">Dashboard personalizzate:</span> Monitoraggio in tempo reale di tutte le metriche chiave</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Components Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-6">Componenti del tuo ecosistema digitale</h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Ogni ecosistema è unico, ma questi sono i componenti principali che possiamo integrare
            nella tua soluzione personalizzata:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-commerce Component */}
            <div className="feature-card-custom">
              <div className="p-6">
                <div className="icon-container-custom">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <Badge variant="blue" className="mb-2">Core</Badge>
                <h3 className="section-subheading">E-commerce avanzato</h3>
                <p className="text-gray-300 mb-4">
                  Piattaforme e-commerce personalizzate con funzionalità avanzate per ogni tipo di business
                  e modello di vendita.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> B2B/B2C/D2C</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Multi-currency/Multi-language</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Cataloghi personalizzati</li>
                </ul>
              </div>
            </div>
            
            {/* ERP Integration */}
            <div className="feature-card-custom">
              <div className="p-6">
                <div className="icon-container-custom">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <Badge variant="blue" className="mb-2">Integration</Badge>
                <h3 className="section-subheading">ERP & Gestionale</h3>
                <p className="text-gray-300 mb-4">
                  Integrazione con i principali sistemi ERP e gestionali per la sincronizzazione in tempo reale
                  di ordini, stock e anagrafiche.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> SAP, Oracle, Microsoft</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Gestionali custom</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Sincronizzazione bi-direzionale</li>
                </ul>
              </div>
            </div>
            
            {/* CRM & Marketing */}
            <div className="feature-card-custom">
              <div className="p-6">
                <div className="icon-container-custom">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <Badge variant="blue" className="mb-2">Analytics</Badge>
                <h3 className="section-subheading">CRM & Marketing</h3>
                <p className="text-gray-300 mb-4">
                  Connessione con i principali CRM e strumenti di marketing automation per strategie
                  di vendita e comunicazione integrate.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Salesforce, HubSpot</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Automazione campagne</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Personalizzazione avanzata</li>
                </ul>
              </div>
            </div>
            
            {/* PIM Content */}
            <div className="feature-card-custom">
              <div className="p-6">
                <div className="icon-container-custom">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <Badge variant="blue" className="mb-2">Data</Badge>
                <h3 className="section-subheading">PIM & Content</h3>
                <p className="text-gray-300 mb-4">
                  Sistemi di gestione centralizzata dei contenuti e delle informazioni di prodotto
                  per un'esperienza omnicanale coerente.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Product Information Management</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Digital Asset Management</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Distribuzione multicanale</li>
                </ul>
              </div>
            </div>
            
            {/* BI & Analytics */}
            <div className="feature-card-custom">
              <div className="p-6">
                <div className="icon-container-custom">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <Badge variant="blue" className="mb-2">Insights</Badge>
                <h3 className="section-subheading">BI & Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Dashboard personalizzate e strumenti di business intelligence per monitorare
                  KPI, trend e performance in tempo reale.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Dashboard personalizzate</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Previsioni e trend</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Reportistica avanzata</li>
                </ul>
              </div>
            </div>
            
            {/* Custom Module */}
            <div className="feature-card-custom">
              <div className="p-6">
                <div className="icon-container-custom">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <Badge variant="blue" className="mb-2">Custom</Badge>
                <h3 className="section-subheading">Moduli Custom</h3>
                <p className="text-gray-300 mb-4">
                  Sviluppo di moduli e funzionalità su misura per le specifiche esigenze
                  del tuo business che non trovano risposta in soluzioni standard.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Configuratori di prodotto</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Sistemi di prenotazione</li>
                  <li className="flex items-center"><span className="text-[#003DD6] mr-2">•</span> Processi specifici di settore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading text-center">Tecnologie che utilizziamo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Selezioniamo le migliori tecnologie per ogni progetto, assicurandoci che siano robuste,
            scalabili e perfettamente adatte alle specifiche esigenze del tuo business.
          </p>
          
          <div className="glass-card backdrop-blur-md bg-black/40 border border-white/10 p-8 rounded-lg max-w-3xl mx-auto shadow-[0_10px_30px_-12px_rgba(0,61,214,0.3)]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-[#003DD6] font-bold mb-2">Frontend</div>
                <div className="text-sm text-gray-300">React, Vue.js, Angular</div>
              </div>
              <div className="text-center">
                <div className="text-[#003DD6] font-bold mb-2">Backend</div>
                <div className="text-sm text-gray-300">Node.js, PHP, .NET, Java</div>
              </div>
              <div className="text-center">
                <div className="text-[#003DD6] font-bold mb-2">Database</div>
                <div className="text-sm text-gray-300">SQL, NoSQL, Graph DB</div>
              </div>
              
              {/* Centered Cloud and API sections */}
              <div className="text-center md:col-span-3 md:grid md:grid-cols-2 md:gap-6 md:max-w-md md:mx-auto">
                <div className="text-center mb-6 md:mb-0">
                  <div className="text-[#003DD6] font-bold mb-2">Cloud</div>
                  <div className="text-sm text-gray-300">AWS, Azure, GCP</div>
                </div>
                <div className="text-center">
                  <div className="text-[#003DD6] font-bold mb-2">API</div>
                  <div className="text-sm text-gray-300">REST, GraphQL, SOAP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default CustomEcosystem;
