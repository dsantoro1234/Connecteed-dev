
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Mail, Calendar, Layout, CircuitBoard } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <>
      {/* Hero Section with Circuit Board Image Background */}
      <section 
        className="relative text-white py-16 bg-[#101010]"
        style={{
          backgroundImage: "url('/lovable-uploads/a090b53b-4add-43e9-a1dd-98ebcaa99303.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay to ensure text is readable against the background */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container relative z-10 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Digitalizza ed Integra i tuoi Sistemi con soluzioni online avanzate
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connecteed sviluppa soluzioni personalizzate per far crescere il tuo business digitale.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#101010]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading text-center">Le Nostre Soluzioni</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecteed Shop Card */}
            <ServiceCard 
              title="Connecteed Shop"
              description="Soluzioni complete basate su Shopify, perfette per piccole e medie imprese con budget dai 3.000€ ai 10.000€. Implementazione rapida e risultati garantiti."
              link="/connecteed-shop"
              icon={<Calendar className="h-12 w-12" />}
              tag="E-commerce"
              cardId="shop"
            />
            
            {/* Connecteed Headless Card */}
            <ServiceCard 
              title="Connecteed Headless"
              description="Unisci la potenza del backend Shopify con la flessibilità di un frontend React personalizzato. La soluzione ideale per esperienze utente uniche e performance elevate."
              link="/connecteed-headless"
              icon={<Layout className="h-12 w-12" />}
              tag="E-commerce"
              cardId="headless"
            />
            
            {/* Custom Ecosystem Card */}
            <ServiceCard 
              title="Ecosistemi Custom"
              description="Sviluppiamo ecosistemi digitali completi e personalizzati che integrano e-commerce, CRM, ERP e altri sistemi per ottimizzare l'intero flusso operativo della tua azienda."
              link="/custom-ecosystem"
              icon={<Mail className="h-12 w-12" />}
              cardId="custom"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#101010]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading text-center">Perché Scegliere Connecteed?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Siamo esperti nello sviluppo di soluzioni che non solo sembrano fantastiche, ma generano risultati concreti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Home;
