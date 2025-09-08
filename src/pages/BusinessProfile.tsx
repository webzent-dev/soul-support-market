import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  Upload,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const BusinessProfile = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Reiki Healing", duration: "60 min", price: "$80" },
    { id: 2, name: "Meditation Session", duration: "45 min", price: "$60" },
    { id: 3, name: "Energy Clearing", duration: "90 min", price: "$120" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/dashboard">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Business Profile</h1>
          <p className="text-muted-foreground">Manage your business information and services</p>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="hours">Hours</TabsTrigger>
          </TabsList>

          {/* Basic Information */}
          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Update your business details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" defaultValue="Healing Center Wellness" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" defaultValue="Wellness & Healing" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    rows={4}
                    defaultValue="A holistic wellness center offering various healing modalities including Reiki, meditation, and energy work. Our experienced practitioners are dedicated to helping you achieve balance and well-being."
                  />
                </div>

                <Separator />

                <h3 className="text-lg font-semibold">Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex">
                      <Phone className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                      <Input id="phone" defaultValue="(555) 123-4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="flex">
                      <Mail className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                      <Input id="email" defaultValue="info@healingcenter.com" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <div className="flex">
                    <Globe className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                    <Input id="website" defaultValue="www.healingcenter.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="flex">
                    <MapPin className="h-4 w-4 mr-2 mt-3 text-muted-foreground" />
                    <Textarea 
                      id="address" 
                      rows={2}
                      defaultValue="123 Wellness Street, Winnipeg, MB R3C 1A1"
                    />
                  </div>
                </div>

                <Button className="w-full">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Services & Pricing</CardTitle>
                    <CardDescription>Manage your service offerings and pricing</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Service
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{service.name}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {service.duration}
                          </span>
                          <Badge variant="secondary">{service.price}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery */}
          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Gallery</CardTitle>
                <CardDescription>Upload photos of your business, services, and workspace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {/* Existing Images */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Upload photos</p>
                  </div>
                  
                  <div className="aspect-square bg-gray-100 rounded-lg"></div>
                  <div className="aspect-square bg-gray-100 rounded-lg"></div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload More Photos
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Business Hours */}
          <TabsContent value="hours" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>Set your operating hours for each day of the week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ].map((day) => (
                    <div key={day} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="w-24">
                        <Label>{day}</Label>
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <Input type="time" defaultValue="09:00" className="w-32" />
                        <span className="text-muted-foreground">to</span>
                        <Input type="time" defaultValue="17:00" className="w-32" />
                      </div>
                      <Button variant="ghost" size="sm">
                        Closed
                      </Button>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6">Save Hours</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessProfile;
