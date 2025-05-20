
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import LandingLayout from "./components/LandingLayout";
import Home from "./pages/Home";
import ConnecteedShop from "./pages/ConnecteedShop";
import ConnecteedHeadless from "./pages/ConnecteedHeadless";
import CustomEcosystem from "./pages/CustomEcosystem";
import Contatti from "./pages/Contatti";
import Backoffice from "./pages/Backoffice";
import LandingShop from "./pages/LandingShop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/connecteed-shop" element={<ConnecteedShop />} />
            <Route path="/connecteed-headless" element={<ConnecteedHeadless />} />
            <Route path="/custom-ecosystem" element={<CustomEcosystem />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<LandingLayout />}>
            <Route path="/landing-shop" element={<LandingShop />} />
          </Route>
          <Route path="/backoffice" element={<Backoffice />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
