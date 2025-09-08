import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Users, 
  Upload,
  ExternalLink,
  Ticket,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  const [ticketType, setTicketType] = useState("internal");
  const [requiresApproval, setRequiresApproval] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/dashboard/events">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
          <p className="text-muted-foreground">Set up your event or workshop with ticketing options</p>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          {/* Basic Information */}
          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
                <CardDescription>Basic information about your event</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="eventTitle">Event Title</Label>
                  <Input 
                    id="eventTitle" 
                    placeholder="e.g., Meditation Workshop, Reiki Level 1, Sound Bath"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDescription">Description</Label>
                  <Textarea 
                    id="eventDescription" 
                    rows={4}
                    placeholder="Describe your event, what participants can expect, and any prerequisites..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" placeholder="e.g., Workshop, Certification, Healing Circle" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input id="duration" placeholder="e.g., 2 hours, 1 day, 3 days" />
                  </div>
                </div>

                <Separator />

                <h3 className="text-lg font-semibold">Date & Time</h3>
                
                <div className="flex items-center gap-4 mb-4">
                  <Switch 
                    checked={isRecurring}
                    onCheckedChange={setIsRecurring}
                  />
                  <Label>Recurring Event</Label>
                </div>

                {!isRecurring ? (
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Date</Label>
                      <Input 
                        id="eventDate" 
                        type="date"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startTime">Start Time</Label>
                      <Input 
                        id="startTime" 
                        type="time"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endTime">End Time</Label>
                      <Input 
                        id="endTime" 
                        type="time"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 p-4 border rounded-lg bg-blue-50">
                    <h4 className="font-medium">Recurring Event Settings</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="frequency">Frequency</Label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Weekly</option>
                          <option>Bi-weekly</option>
                          <option>Monthly</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="occurrences">Number of Sessions</Label>
                        <Input id="occurrences" type="number" placeholder="e.g., 8" />
                      </div>
                    </div>
                  </div>
                )}

                <Separator />

                <h3 className="text-lg font-semibold">Location</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="venue">Venue/Location</Label>
                  <div className="flex">
                    <MapPin className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                    <Input 
                      id="venue" 
                      placeholder="e.g., Studio A, Main Hall, Online via Zoom"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Full Address (if physical location)</Label>
                  <Textarea 
                    id="address" 
                    rows={2}
                    placeholder="123 Wellness Street, Winnipeg, MB R3C 1A1"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ticketing */}
          <TabsContent value="tickets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ticketing Options</CardTitle>
                <CardDescription>Configure how attendees can register and pay for your event</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Ticket Sales Method</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        ticketType === "internal" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                      onClick={() => setTicketType("internal")}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Ticket className="h-5 w-5" />
                        <h4 className="font-medium">Internal Ticketing</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Sell tickets directly through our platform. We'll handle payments and registrations.
                      </p>
                    </div>
                    
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        ticketType === "external" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                      onClick={() => setTicketType("external")}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <ExternalLink className="h-5 w-5" />
                        <h4 className="font-medium">External Ticketing</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Link to external platform like Eventbrite, Facebook Events, or your own system.
                      </p>
                    </div>
                  </div>
                </div>

                {ticketType === "internal" && (
                  <div className="space-y-6 p-6 border rounded-lg bg-blue-50">
                    <h3 className="text-lg font-semibold">Internal Ticket Configuration</h3>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ticketPrice">Ticket Price</Label>
                        <div className="flex">
                          <DollarSign className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                          <Input 
                            id="ticketPrice" 
                            type="number" 
                            placeholder="0.00"
                            step="0.01"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maxAttendees">Max Attendees</Label>
                        <div className="flex">
                          <Users className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                          <Input 
                            id="maxAttendees" 
                            type="number" 
                            placeholder="20"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="earlyBirdPrice">Early Bird Price (Optional)</Label>
                        <div className="flex">
                          <DollarSign className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                          <Input 
                            id="earlyBirdPrice" 
                            type="number" 
                            placeholder="0.00"
                            step="0.01"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="saleStart">Ticket Sales Start</Label>
                        <Input 
                          id="saleStart" 
                          type="datetime-local"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="saleEnd">Ticket Sales End</Label>
                        <Input 
                          id="saleEnd" 
                          type="datetime-local"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Switch 
                        checked={requiresApproval}
                        onCheckedChange={setRequiresApproval}
                      />
                      <div>
                        <Label>Require Manual Approval</Label>
                        <p className="text-sm text-muted-foreground">
                          Review and approve each registration before confirming attendance
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {ticketType === "external" && (
                  <div className="space-y-4 p-6 border rounded-lg bg-green-50">
                    <h3 className="text-lg font-semibold">External Ticket Link</h3>
                    <div className="space-y-2">
                      <Label htmlFor="externalUrl">Ticket/Registration URL</Label>
                      <div className="flex">
                        <ExternalLink className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                        <Input 
                          id="externalUrl" 
                          type="url"
                          placeholder="https://www.eventbrite.com/e/your-event-link"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="platform">Platform Name</Label>
                      <Input 
                        id="platform" 
                        placeholder="e.g., Eventbrite, Facebook Events, Custom Website"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Settings</CardTitle>
                <CardDescription>Additional configuration and requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Requirements & Prerequisites</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="prerequisites">Prerequisites</Label>
                    <Textarea 
                      id="prerequisites" 
                      rows={3}
                      placeholder="Any experience level requirements, items to bring, or preparation needed..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatToExpect">What to Expect</Label>
                    <Textarea 
                      id="whatToExpect" 
                      rows={3}
                      placeholder="Help attendees understand what they'll experience during the event..."
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact & Support</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Contact Email</Label>
                      <Input 
                        id="contactEmail" 
                        type="email"
                        placeholder="event@yourbusiness.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Contact Phone</Label>
                      <Input 
                        id="contactPhone" 
                        type="tel"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Event Images</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload event featured image</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload additional images</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preview */}
          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Preview</CardTitle>
                <CardDescription>How your event will appear to potential attendees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-6 bg-white">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold mb-2">Meditation Workshop</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        December 15, 2024 at 10:00 AM
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        2 hours
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Studio A
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-muted-foreground">
                      Join us for a peaceful meditation workshop where you'll learn fundamental techniques 
                      for mindfulness and inner peace. Perfect for beginners and experienced practitioners alike.
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">$35</span>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                    <Button>Register Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/dashboard/events">Save as Draft</Link>
              </Button>
              <Button className="flex-1">
                Publish Event
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateEvent;