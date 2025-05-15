
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
          <div>
            <h4 className="font-bold mb-4 text-white">Soluzioni</h4>
            <ul className="space-y-2">
              <li><Link to="/connecteed-shop" className="text-gray-400 hover:text-[#0065df] transition-colors">Connecteed Shop</Link></li>
              <li><Link to="/connecteed-headless" className="text-gray-400 hover:text-[#0065df] transition-colors">Connecteed Headless</Link></li>
              <li><Link to="/custom-ecosystem" className="text-gray-400 hover:text-[#0065df] transition-colors">Ecosistemi Custom</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Risorse</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#0065df] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0065df] transition-colors">Case Study</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#0065df] transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Contatti</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">info@connecteed.com</li>
              <li className="text-gray-400">+39 123 456 7890</li>
              <li><Link to="/contatti" className="text-gray-400 hover:text-[#0065df] transition-colors">Contattaci</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-8 text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Connecteed. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
