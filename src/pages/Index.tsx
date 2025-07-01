
import Hero from "@/components/Hero";
import BusinessSpotlight from "@/components/BusinessSpotlight";
import EventsPreview from "@/components/EventsPreview";
import BusinessCategories from "@/components/BusinessCategories";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessSpotlight />
      <EventsPreview />
      <BusinessCategories />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
