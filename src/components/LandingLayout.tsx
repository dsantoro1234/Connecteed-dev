
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const LandingLayout = () => {
  const isMobile = useIsMobile();
  
  // Function to scroll to contact form section
  const scrollToContactForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactFormSection = document.getElementById('contact-form');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Consistent #101010 background for the entire site */}
      <div className="fixed inset-0 bg-[#101010] -z-10"></div>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#0058dc]/10 via-black/30 to-[#00D5F7]/10 border-b border-[#0058dc] shadow-[0_4px_20px_-2px_rgba(0,88,220,0.2)]">
        <div className="container mx-auto flex justify-between items-center h-16 px-4">
          <div>
            <img 
              src="/lovable-uploads/bd154649-9635-4f51-9907-9b93aadfcdb2.png" 
              alt="Connecteed Logo" 
              className="h-8"
            />
          </div>
          
          {/* CTA Button in the header */}
          <Button 
            className="relative bg-[#0058dc] text-white hover:bg-transparent hover:text-[#0058dc] hover:border border-[#0058dc] shadow-lg shadow-[#0058dc]/20 font-medium"
            size="sm"
            onClick={scrollToContactForm}
          >
            <span className="absolute inset-0 rounded-md animate-pulse bg-[#00D5F7]/20"></span>
            <Calendar className="mr-2 h-4 w-4" />
            Prenota una Call
          </Button>
        </div>
      </header>
      <main className={`flex-grow text-white ${isMobile ? 'pt-12' : 'pt-16'}`}>
        <Outlet />
      </main>
      <footer className="bg-black text-white pt-12 pb-6 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/bd154649-9635-4f51-9907-9b93aadfcdb2.png" 
                  alt="Connecteed Logo" 
                  className="h-8"
                />
              </div>
              <p className="text-gray-400">
                Soluzioni avanzate per lo sviluppo di e-commerce e sistemi web completi che fanno crescere il tuo business.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 mt-8 text-sm text-gray-500 text-center">
            <p>© {new Date().getFullYear()} Connecteed. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingLayout;
