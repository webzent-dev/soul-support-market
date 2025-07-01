
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Calendar } from "lucide-react";

const BusinessSpotlight = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            This Month's <span className="text-emerald-600">Spotlight</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exceptional healing practitioners making a difference in our community
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-emerald-50 to-teal-50">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Featured Practitioner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">(4.9/5)</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Serenity Wellness Center
                </h3>
                
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                  Downtown Seattle, WA
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Offering holistic mental health services including therapy, meditation workshops, 
                  and healing circles. Specializing in trauma-informed care and mindfulness-based treatments.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-3 text-emerald-600" />
                    <span>Next Workshop: Mindful Healing - March 15th</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full">
                    View Profile
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-2 rounded-full">
                    Book Session
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BusinessSpotlight;
