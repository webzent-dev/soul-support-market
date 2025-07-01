
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Ticket, Star } from "lucide-react";

const SpotlightedEvent = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-purple-600">Event</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss this month's highlighted healing experience
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-purple-50 to-indigo-50">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Spotlighted Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Spotlight Event
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-purple-600 font-semibold">$45</span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Crystal Healing & Meditation Workshop
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-purple-600" />
                    <span>Saturday, March 23rd, 2024 • 2:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-purple-600" />
                    <span>ShantiLotus Healing Center, Winnipeg</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Join us for a transformative evening of crystal healing and guided meditation. 
                  Learn about the healing properties of crystals and experience deep relaxation 
                  through sound healing and energy work.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
                    <Ticket className="mr-2 h-4 w-4" />
                    Get Tickets Now
                  </Button>
                  <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-full">
                    Learn More
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

export default SpotlightedEvent;
