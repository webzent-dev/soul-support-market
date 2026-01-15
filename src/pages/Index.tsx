
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FestivalPromo from "@/components/FestivalPromo";
import BusinessSpotlight from "@/components/BusinessSpotlight";
import SpotlightedEvent from "@/components/SpotlightedEvent";
import EventsPreview from "@/components/EventsPreview";
import BusinessCategories from "@/components/BusinessCategories";
import Newsletter from "@/components/Newsletter";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FestivalPromo />
      <BusinessSpotlight />
      <SpotlightedEvent />
      <EventsPreview />
      <BusinessCategories />
      <Newsletter />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
