import { Calendar, MapPin, Clock, Gift, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FestivalPromo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <Badge className="bg-purple-600 text-white mb-4 text-sm px-4 py-1">
            Celebrating Our 10th Festival
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Healing Connections <span className="text-purple-600">Festival</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet Winnipeg's holistic wellness professionals face-to-face and try something new!
          </p>
        </div>

        <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Image */}
            <div className="relative h-64 md:h-auto min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healing Connections Festival"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-5xl font-bold">10th</div>
                <div className="text-xl">Annual Festival</div>
              </div>
            </div>

            {/* Right side - Content */}
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">February 1, 2026</div>
                    <div className="text-sm text-gray-500">Save the date!</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">10:00 AM - 4:00 PM</div>
                    <div className="text-sm text-gray-500">6 hours of wellness experiences</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Viscount Gort Conference Centre</div>
                    <div className="text-sm text-gray-500">1670 Portage Ave, Winnipeg, MB</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium">50+ Exhibitors</div>
                  </div>
                  <div className="text-center">
                    <Sparkles className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium">Free Workshops</div>
                  </div>
                  <div className="text-center">
                    <Gift className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium">Welcome Bags</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-purple-700">First 50 Guests</span> receive a Welcome Bag filled with samples and gifts! 
                    Pre-register online to be entered into exclusive draws at 2pm.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Pre-Register Now — $5
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FestivalPromo;
