
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Calendar, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToContactForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactFormSection = document.getElementById('contact-form');
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home page first
      window.location.href = '/#contact-form';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#0058dc]/10 via-black/30 to-[#00D5F7]/10 border-b border-[#0058dc] shadow-[0_4px_20px_-2px_rgba(0,88,220,0.2)]">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/bd154649-9635-4f51-9907-9b93aadfcdb2.png" 
            alt="Connecteed Logo" 
            className="h-8"
          />
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <div className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10",
                    location.pathname === "/" ? "bg-white/10 border-b-2 border-[#0058dc]" : ""
                  )}>
                    Home
                  </div>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/connecteed-shop">
                  <div className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10",
                    location.pathname === "/connecteed-shop" ? "bg-white/10 border-b-2 border-[#0058dc]" : ""
                  )}>
                    Connecteed Shop
                  </div>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/connecteed-headless">
                  <div className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10",
                    location.pathname === "/connecteed-headless" ? "bg-white/10 border-b-2 border-[#0058dc]" : ""
                  )}>
                    Connecteed Headless
                  </div>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/custom-ecosystem">
                  <div className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10",
                    location.pathname === "/custom-ecosystem" ? "bg-white/10 border-b-2 border-[#0058dc]" : ""
                  )}>
                    Ecosistemi Custom
                  </div>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contatti">
                  <div className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10",
                    location.pathname === "/contatti" ? "bg-white/10 border-b-2 border-[#0058dc]" : ""
                  )}>
                    Contatti
                  </div>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            className="text-white p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* CTA Button - only show on desktop */}
        {!isMobile && (
          <Button 
            className="relative bg-[#0058dc] text-white hover:bg-transparent hover:text-[#0058dc] hover:border border-[#0058dc] shadow-lg shadow-[#0058dc]/20 font-medium"
            size="sm"
            onClick={scrollToContactForm}
          >
            <span className="absolute inset-0 rounded-md animate-pulse bg-[#00D5F7]/20"></span>
            <Calendar className="mr-2 h-4 w-4" />
            Prenota una Call
          </Button>
        )}
      </div>

      {/* Mobile Navigation Menu - Slide down when open */}
      {isMobile && mobileMenuOpen && (
        <div className="bg-black/95 backdrop-blur-md animate-fade-in border-b border-[#0058dc]/50">
          <nav className="container mx-auto py-4 px-6">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className={cn(
                    "block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors",
                    location.pathname === "/" ? "bg-white/10 border-l-2 border-[#0058dc]" : ""
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/connecteed-shop" 
                  className={cn(
                    "block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors",
                    location.pathname === "/connecteed-shop" ? "bg-white/10 border-l-2 border-[#0058dc]" : ""
                  )}
                >
                  Connecteed Shop
                </Link>
              </li>
              <li>
                <Link 
                  to="/connecteed-headless" 
                  className={cn(
                    "block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors",
                    location.pathname === "/connecteed-headless" ? "bg-white/10 border-l-2 border-[#0058dc]" : ""
                  )}
                >
                  Connecteed Headless
                </Link>
              </li>
              <li>
                <Link 
                  to="/custom-ecosystem" 
                  className={cn(
                    "block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors",
                    location.pathname === "/custom-ecosystem" ? "bg-white/10 border-l-2 border-[#0058dc]" : ""
                  )}
                >
                  Ecosistemi Custom
                </Link>
              </li>
              <li>
                <Link 
                  to="/contatti" 
                  className={cn(
                    "block py-2 px-4 text-white hover:bg-white/10 rounded-md transition-colors",
                    location.pathname === "/contatti" ? "bg-white/10 border-l-2 border-[#0058dc]" : ""
                  )}
                >
                  Contatti
                </Link>
              </li>
              {/* Add CTA button inside the mobile menu */}
              <li className="pt-2">
                <Button 
                  className="relative w-full bg-[#0058dc] text-white hover:bg-transparent hover:text-[#0058dc] hover:border border-[#0058dc] shadow-lg shadow-[#0058dc]/20 font-medium"
                  size="sm"
                  onClick={scrollToContactForm}
                >
                  <span className="absolute inset-0 rounded-md animate-pulse bg-[#00D5F7]/20"></span>
                  <Calendar className="mr-2 h-4 w-4" />
                  Prenota una Call
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
