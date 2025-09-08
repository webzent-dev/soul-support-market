import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Plus, 
  Search, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";

const EventsManagement = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Meditation Workshop",
      date: "2024-12-15",
      time: "10:00 AM",
      location: "Studio A",
      attendees: 12,
      maxAttendees: 20,
      price: "$35",
      status: "Active",
      ticketType: "Internal"
    },
    {
      id: 2,
      title: "Healing Circle",
      date: "2024-12-22",
      time: "7:00 PM",
      location: "Main Hall",
      attendees: 8,
      maxAttendees: 15,
      price: "$25",
      status: "Active",
      ticketType: "Internal"
    },
    {
      id: 3,
      title: "Reiki Level 1 Certification",
      date: "2025-01-05",
      time: "9:00 AM",
      location: "Training Room",
      attendees: 5,
      maxAttendees: 10,
      price: "$150",
      status: "Draft",
      ticketType: "External"
    },
    {
      id: 4,
      title: "Sound Bath Experience",
      date: "2024-12-10",
      time: "6:30 PM",
      location: "Studio B",
      attendees: 15,
      maxAttendees: 15,
      price: "$20",
      status: "Sold Out",
      ticketType: "Internal"
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/dashboard">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Events Management</h1>
              <p className="text-muted-foreground">Create and manage your events and workshops</p>
            </div>
            <Button asChild>
              <Link to="/dashboard/events/new">
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Total Events</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">40</p>
                  <p className="text-sm text-muted-foreground">Total Attendees</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">$1,830</p>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">Upcoming Events</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">All Status</Button>
              <Button variant="outline">All Types</Button>
            </div>
          </CardContent>
        </Card>

        {/* Events List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Events</CardTitle>
            <CardDescription>Manage all your events and workshops</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <Badge 
                          variant={
                            event.status === "Active" ? "default" :
                            event.status === "Draft" ? "secondary" :
                            event.status === "Sold Out" ? "destructive" : "outline"
                          }
                        >
                          {event.status}
                        </Badge>
                        <Badge variant="outline">
                          {event.ticketType}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date} at {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.attendees}/{event.maxAttendees} attendees
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {event.price}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/dashboard/events/${event.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/dashboard/events/${event.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsManagement;