import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Star, Phone, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Businesses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const businesses = [
    {
      id: 1,
      name: "ShantiLotus Healing Services",
      category: "Energy Healing and Reiki",
      location: "Downtown Winnipeg",
      rating: 4.9,
      reviews: 42,
      phone: "(204) 555-0123",
      website: "shantilotus.ca",
      hours: "Mon-Fri 9AM-6PM",
      description: "Holistic healing center offering Reiki, crystal therapy, and meditation sessions.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      featured: true
    },
    {
      id: 2,
      name: "Harmony Acupuncture Clinic",
      category: "Acupuncture",
      location: "River Heights",
      rating: 4.8,
      reviews: 38,
      phone: "(204) 555-0124",
      website: "harmonyacupuncture.ca",
      hours: "Tue-Sat 8AM-5PM",
      description: "Traditional Chinese medicine and acupuncture treatments for wellness and pain relief.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Mindful Massage Therapy",
      category: "Massage Therapy",
      location: "St. Boniface",
      rating: 4.7,
      reviews: 56,
      phone: "(204) 555-0125",
      website: "mindfulmt.ca",
      hours: "Mon-Sun 7AM-8PM",
      description: "Therapeutic massage services including deep tissue, Swedish, and hot stone massage.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Crystal Haven Wellness",
      category: "Crystal Therapy",
      location: "Osborne Village",
      rating: 4.6,
      reviews: 29,
      phone: "(204) 555-0126",
      website: "crystalhaven.ca",
      hours: "Wed-Sun 10AM-6PM",
      description: "Crystal healing sessions, chakra balancing, and spiritual guidance.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Peaceful Mind Counselling",
      category: "Counselling / Coaching",
      location: "Transcona",
      rating: 4.9,
      reviews: 73,
      phone: "(204) 555-0127",
      website: "peacefulmind.ca",
      hours: "Mon-Fri 8AM-7PM",
      description: "Professional counselling services for individuals, couples, and families.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Nature's Path Naturopathy",
      category: "Naturopathic Medicine",
      location: "Charleswood",
      rating: 4.8,
      reviews: 45,
      phone: "(204) 555-0128",
      website: "naturespath.ca",
      hours: "Tue-Sat 9AM-5PM",
      description: "Natural health solutions including herbal medicine, nutrition, and lifestyle counseling.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const categories = [
    "Access Consciousness", "Acupuncture", "Akashic Soul Readings", "Alternative Therapy Practitioners",
    "Animal Health", "Aromatherapy", "Author & Reset Coach", "Body Talk", "Business Coach", "Channeller",
    "Chiropractic Health", "Counselling / Coaching", "Crystal Therapy", "Crystals", "Doula - End of Life",
    "Drumming Experiences", "EFT Tapping", "Energy Healing and Reiki", "Fitness and Exercise", "Forest Bathing",
    "Gluten Free Living", "Gong Bath Meditations", "Grief Counseling", "Happiness", "Healing Touch",
    "Health Coach", "Herbalists - Botanicals", "Holistic Nurses", "Hypnotherapy", "Integrated Energy Therapy",
    "Life Coach", "Local Shopping", "Massage Therapy", "Meditation Facilitator", "Medium & Portrait Art",
    "Mediums", "Mindfulness", "Mindset Coach", "Music and Sound Healing", "Natural Cleaning Products",
    "Natural Products", "Naturopathic Medicine", "NLP Neuro-Linguistic Programming", "Nutritional Support",
    "Organic and Healthy Snacks", "Organic Skin Care", "Past Life Regression", "Peacefulness", "Pets",
    "Physio Therapy", "Pranic Healing", "Psychic Guidance", "Qigong", "Reflexology", "Reiki", "Retreats",
    "Shaman", "Sound Healing Therapy", "Spiritual Art", "Super Patch", "Tantra", "Tantra / Sexologist",
    "Theta Healing", "Trauma Resolution", "Voxx Life", "Weight Loss", "Wellness Travel", "Women Empowerment",
    "Women's Health"
  ];

  const locations = [
    "Downtown Winnipeg", "River Heights", "St. Boniface", "Osborne Village", "Transcona", 
    "Charleswood", "East Kildonan", "West End", "Fort Garry", "North End"
  ];

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || business.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || business.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Your Healing Professional
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Connect with trusted wellness practitioners in Winnipeg
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search businesses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {filteredBusinesses.length} Businesses Found
            </h2>
            <Select defaultValue="rating">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="location">Location</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBusinesses.map((business) => (
              <Link key={business.id} to={`/businesses/${business.id}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {business.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-background/90 rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{business.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground mb-1">{business.name}</h3>
                    <Badge variant="secondary" className="text-xs">{business.category}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {business.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{business.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{business.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>{business.website}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{business.hours}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{business.rating} ({business.reviews} reviews)</span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredBusinesses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No businesses found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedLocation("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Businesses;