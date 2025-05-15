
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#101010]">
      <div className="container mx-auto px-4">
        <div className="dual-neon-card backdrop-blur-md bg-[#101010]/40 border-2 border-gradient-dual transition-all duration-500 p-8 md:p-12 rounded-lg shadow-[0_15px_30px_-12px_rgba(0,213,247,0.25),0_15px_30px_-12px_rgba(149,191,71,0.25)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Pronto a trasformare il tuo business?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl">
                Contattaci oggi per una consulenza gratuita e scopri come possiamo aiutarti a crescere 
                con soluzioni costruite su misura per le tue esigenze.
              </p>
            </div>
            <Button 
              variant="outline-blue"
              className="px-6 py-8 h-auto md:text-lg whitespace-nowrap shadow-lg transition-all"
            >
              Contattaci ora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
