import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Ticket, Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const events = [
    {
      id: 1,
      title: "Healing Circle Workshop",
      date: "March 20, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Community Center, Winnipeg",
      attendees: 25,
      price: "$35",
      category: "Workshop",
      description: "Join us for a transformative healing circle experience.",
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
      category: "Meditation",
      description: "Start your day with peaceful mindfulness practice.",
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
      category: "Therapy",
      description: "Experience the healing power of crystals in this guided session.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      title: "Reiki Level 1 Training",
      date: "March 28, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Healing Arts Center, Winnipeg",
      attendees: 8,
      price: "$150",
      category: "Training",
      description: "Learn the fundamentals of Reiki healing in this comprehensive workshop.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      title: "Sound Bath Meditation",
      date: "March 30, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Sacred Sound Studio, Winnipeg",
      attendees: 20,
      price: "$30",
      category: "Meditation",
      description: "Immerse yourself in healing vibrations and sacred sounds.",
      image: "https://images.unsplash.com/photo-1607827448387-a67db1383b59?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      title: "Yoga & Wellness Retreat",
      date: "April 5-7, 2024",
      time: "All Day",
      location: "Whiteshell Provincial Park",
      attendees: 30,
      price: "$285",
      category: "Retreat",
      description: "A weekend retreat focusing on yoga, meditation, and holistic wellness.",
      image: "https://images.unsplash.com/photo-1506629905607-b5f3e36b5167?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const categories = ["all", "Workshop", "Meditation", "Therapy", "Training", "Retreat"];
  const locations = ["all", "Winnipeg", "Whiteshell Provincial Park"];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || event.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Healing <span className="text-primary">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover transformative workshops, meditation sessions, and healing experiences in Winnipeg
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-background border-b">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-4 items-center">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location === "all" ? "All Locations" : location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
                  <div className="relative h-48">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-primary font-semibold">{event.price}</span>
                    </div>
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-primary-foreground text-xs font-medium">{event.category}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">{event.attendees} attending</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                      <Ticket className="mr-2 h-4 w-4" />
                      Get Tickets
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;