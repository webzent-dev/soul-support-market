
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Ticket } from "lucide-react";

const EventsPreview = () => {
  const events = [
    {
      id: 1,
      title: "Healing Circle Workshop",
      date: "March 20, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Community Center, Winnipeg",
      attendees: 25,
      price: "$35",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Mindfulness Meditation",
      date: "March 22, 2024",
      time: "7:00 AM - 8:00 AM",
      location: "Zen Garden Studio, Winnipeg",
      attendees: 15,
      price: "$20",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Crystal Therapy Session",
      date: "March 25, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "ShantiLotus Healing, Winnipeg",
      attendees: 12,
      price: "$45",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Upcoming <span className="text-purple-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join our Winnipeg community events designed to support your healing journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
              <div className="relative h-48">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-purple-600 font-semibold">{event.price}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-purple-600" />
                    <span className="text-sm">{event.attendees} attending</span>
                  </div>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  <Ticket className="mr-2 h-4 w-4" />
                  Get Tickets
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-full text-lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
