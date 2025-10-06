import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Businesses from "./pages/Businesses";
import BusinessDetails from "./pages/BusinessDetails";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MemberLogin from "./pages/MemberLogin";
import JoinCommunity from "./pages/JoinCommunity";
import MemberDashboard from "./pages/MemberDashboard";
import BusinessProfile from "./pages/BusinessProfile";
import SecuritySettings from "./pages/SecuritySettings";
import SubscriptionManagement from "./pages/SubscriptionManagement";
import EventsManagement from "./pages/EventsManagement";
import CreateEvent from "./pages/CreateEvent";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/businesses/:id" element={<BusinessDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<MemberLogin />} />
          <Route path="/join" element={<JoinCommunity />} />
          <Route path="/dashboard" element={<MemberDashboard />} />
          <Route path="/dashboard/business-profile" element={<BusinessProfile />} />
          <Route path="/dashboard/security" element={<SecuritySettings />} />
          <Route path="/dashboard/subscription" element={<SubscriptionManagement />} />
          <Route path="/dashboard/events" element={<EventsManagement />} />
          <Route path="/dashboard/events/new" element={<CreateEvent />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
