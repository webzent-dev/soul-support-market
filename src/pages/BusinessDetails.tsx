import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, Phone, Globe, Clock, Star, ArrowLeft, 
  Calendar, Users, Heart, Share2, MessageSquare 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, this would come from an API
  const business = {
    id: 1,
    name: "ShantiLotus Healing Services",
    category: "Energy Healing and Reiki",
    location: "Downtown Winnipeg",
    rating: 4.9,
    reviews: 42,
    phone: "(204) 555-0123",
    website: "shantilotus.ca",
    email: "info@shantilotus.ca",
    hours: "Mon-Fri 9AM-6PM",
    description: "Welcome to ShantiLotus Healing Services, your sanctuary for holistic wellness in the heart of Downtown Winnipeg. Our experienced practitioners offer a comprehensive range of healing modalities designed to restore balance, promote healing, and enhance your overall well-being.",
    fullDescription: "At ShantiLotus, we believe in the power of energy healing to transform lives. Our certified Reiki masters and crystal therapy specialists work with you to identify and release energetic blockages, allowing your natural healing abilities to flourish. Whether you're seeking relief from physical discomfort, emotional stress, or spiritual disconnection, our personalized approach ensures that each session is tailored to your unique needs.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    ],
    services: [
      { name: "Reiki Healing Session", duration: "60 mins", price: "$85" },
      { name: "Crystal Therapy", duration: "45 mins", price: "$65" },
      { name: "Chakra Balancing", duration: "75 mins", price: "$95" },
      { name: "Energy Clearing", duration: "30 mins", price: "$45" }
    ],
    practitioner: {
      name: "Sarah Johnson",
      title: "Certified Reiki Master & Crystal Healer",
      experience: "12+ years",
      bio: "Sarah has been practicing energy healing for over a decade, helping hundreds of clients find peace and healing."
    },
    address: "123 Main Street, Downtown Winnipeg, MB R3C 1A5",
    parking: "Street parking available, paid parking lot nearby",
    accessibility: "Wheelchair accessible, elevator to second floor"
  };

  const testimonials = [
    {
      name: "Emma Wilson",
      rating: 5,
      text: "Sarah's Reiki sessions have been life-changing. I feel more balanced and at peace after each visit.",
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "The crystal therapy session was amazing. I've never felt so relaxed and centered.",
      date: "1 month ago"
    },
    {
      name: "Lisa Thompson",
      rating: 4,
      text: "Great experience overall. The space is very calming and Sarah is incredibly knowledgeable.",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-6 mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Businesses
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className="mb-2 bg-primary text-primary-foreground">{business.category}</Badge>
            <h1 className="text-4xl font-bold mb-2">{business.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{business.rating}</span>
                <span className="opacity-90">({business.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{business.location}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About</h2>
                  <p className="text-muted-foreground mb-4">{business.description}</p>
                  <p className="text-muted-foreground">{business.fullDescription}</p>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Services & Pricing</h2>
                  <div className="space-y-4">
                    {business.services.map((service, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                        <div>
                          <h3 className="font-semibold">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{service.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Practitioner */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Meet Your Practitioner</h2>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{business.practitioner.name}</h3>
                      <p className="text-primary font-medium">{business.practitioner.title}</p>
                      <p className="text-sm text-muted-foreground mb-2">{business.practitioner.experience} experience</p>
                      <p className="text-muted-foreground">{business.practitioner.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {business.gallery.map((image, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Client Reviews</h2>
                  <div className="space-y-6">
                    {testimonials.map((review, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{review.name}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">{business.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-sm">{business.website}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{business.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">{business.hours}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <Button className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start">
                      <Heart className="mr-2 h-4 w-4" />
                      Save to Favorites
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Business
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Additional Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Parking:</span>
                      <p className="text-muted-foreground">{business.parking}</p>
                    </div>
                    <div>
                      <span className="font-medium">Accessibility:</span>
                      <p className="text-muted-foreground">{business.accessibility}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessDetails;