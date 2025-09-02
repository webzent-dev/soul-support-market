import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, MapPin, Clock, Users, Ticket, ArrowLeft, 
  Share2, Heart, User, Star, DollarSign
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, this would come from an API
  const event = {
    id: 1,
    title: "Healing Circle Workshop",
    date: "March 20, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center, Winnipeg",
    address: "456 Community St, Winnipeg, MB R3B 2N2",
    attendees: 25,
    maxAttendees: 30,
    price: "$35",
    category: "Workshop",
    description: "Join us for a transformative healing circle experience that will guide you through powerful group energy work and personal healing.",
    fullDescription: "This healing circle workshop is designed to create a safe, sacred space where participants can experience the profound benefits of group healing energy. Led by experienced facilitators, you'll learn ancient techniques for energy clearing, chakra balancing, and collective healing. The evening will include guided meditation, energy exchange exercises, and time for personal reflection. Whether you're new to energy work or have experience, this circle welcomes all levels of practitioners.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    facilitator: {
      name: "Dr. Maria Santos",
      title: "Energy Healing Practitioner & Spiritual Guide",
      experience: "15+ years",
      bio: "Dr. Santos is a renowned energy healer who has facilitated healing circles around the world.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b412?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    agenda: [
      { time: "6:00 PM", activity: "Welcome & Opening Circle" },
      { time: "6:15 PM", activity: "Grounding Meditation" },
      { time: "6:45 PM", activity: "Energy Clearing Techniques" },
      { time: "7:15 PM", activity: "Group Healing Circle" },
      { time: "7:45 PM", activity: "Integration & Closing" }
    ],
    whatToExpect: [
      "Guided meditation and breathwork",
      "Energy healing techniques",
      "Group sharing and support",
      "Take-home practices",
      "Light refreshments"
    ],
    whatToBring: [
      "Comfortable clothing",
      "Yoga mat or cushion",
      "Water bottle",
      "Open mind and heart"
    ],
    organizer: {
      name: "Winnipeg Healing Center",
      phone: "(204) 555-0199",
      email: "events@winnipeghealingcenter.ca"
    }
  };

  const relatedEvents = [
    {
      id: 2,
      title: "Mindfulness Meditation",
      date: "March 22, 2024",
      price: "$20",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Crystal Therapy Session",
      date: "March 25, 2024",
      price: "$45",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
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
            Back to Events
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className="mb-2 bg-primary text-primary-foreground">{event.category}</Badge>
            <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
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
                  <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <p className="text-muted-foreground">{event.fullDescription}</p>
                </CardContent>
              </Card>

              {/* Facilitator */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Meet Your Facilitator</h2>
                  <div className="flex items-start gap-4">
                    <img
                      src={event.facilitator.image}
                      alt={event.facilitator.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{event.facilitator.name}</h3>
                      <p className="text-primary font-medium">{event.facilitator.title}</p>
                      <p className="text-sm text-muted-foreground mb-2">{event.facilitator.experience} experience</p>
                      <p className="text-muted-foreground">{event.facilitator.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Agenda */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Event Agenda</h2>
                  <div className="space-y-4">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className="flex-shrink-0 w-20 text-primary font-semibold">
                          {item.time}
                        </div>
                        <div className="font-medium">{item.activity}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                    <ul className="space-y-2">
                      {event.whatToExpect.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">What to Bring</h3>
                    <ul className="space-y-2">
                      {event.whatToBring.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Related Events */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Related Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedEvents.map((relatedEvent) => (
                      <div key={relatedEvent.id} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer">
                        <img
                          src={relatedEvent.image}
                          alt={relatedEvent.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{relatedEvent.title}</h4>
                          <p className="text-sm text-muted-foreground">{relatedEvent.date}</p>
                          <p className="text-primary font-medium">{relatedEvent.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary">{event.price}</div>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Available Spots</span>
                      <span className="font-medium">{event.maxAttendees - event.attendees} of {event.maxAttendees}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full mb-3">
                    <Ticket className="mr-2 h-4 w-4" />
                    Register Now
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Event Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Event Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <p className="font-medium">{event.date}</p>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <p className="font-medium">{event.location}</p>
                        <p className="text-sm text-muted-foreground">{event.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">{event.attendees} people attending</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="text-sm">Price: {event.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Organizer */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Event Organizer</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      <span className="font-medium">{event.organizer.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Phone: {event.organizer.phone}</p>
                      <p>Email: {event.organizer.email}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Contact Organizer
                    </Button>
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

export default EventDetails;