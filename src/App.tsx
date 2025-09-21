import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/portfolio" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Portfolio - Coming Soon</h1></div>} />
            <Route path="/learn" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Learn - Coming Soon</h1></div>} />
            <Route path="/trading" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Trading Desk - Coming Soon</h1></div>} />
            <Route path="/research" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Research - Coming Soon</h1></div>} />
            <Route path="/academy" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Academy - Coming Soon</h1></div>} />
            <Route path="/profile" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Profile - Coming Soon</h1></div>} />
            <Route path="/auth/login" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Login - Coming Soon</h1></div>} />
            <Route path="/auth/register" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Register - Coming Soon</h1></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
