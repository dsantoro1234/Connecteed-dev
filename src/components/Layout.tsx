
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Consistent #101010 background for the entire site */}
      <div className="fixed inset-0 bg-[#101010] -z-10"></div>
      <Header />
      <main className={`flex-grow text-white ${isMobile ? 'pt-12' : 'pt-16'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
