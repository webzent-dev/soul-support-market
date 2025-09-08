import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Shield, 
  CreditCard, 
  Calendar, 
  Star, 
  Plus,
  Edit,
  Eye,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const MemberDashboard = () => {
  const [user] = useState({
    name: "Sarah Johnson",
    email: "sarah@healingcenter.com",
    memberSince: "March 2024",
    membershipType: "Lifetime Member",
    businessName: "Healing Center Wellness",
    businessStatus: "Active"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user.name}</h1>
              <p className="text-muted-foreground">Member since {user.memberSince}</p>
              <Badge variant="secondary" className="mt-1">{user.membershipType}</Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-sm text-muted-foreground">Profile Views</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">23</p>
                  <p className="text-sm text-muted-foreground">Appointments</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Active Events</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Days Left Spotlight</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Business Profile Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Business Profile
              </CardTitle>
              <CardDescription>
                Manage your business information and services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{user.businessName}</h3>
                  <p className="text-sm text-muted-foreground">Wellness & Healing</p>
                  <Badge variant="outline" className="mt-1">Active</Badge>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/dashboard/business-profile">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/dashboard/business-profile">View Profile</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/dashboard/business-profile">Add Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Events Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Events Management
              </CardTitle>
              <CardDescription>
                Create and manage your events and workshops
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Meditation Workshop</h4>
                    <p className="text-sm text-muted-foreground">Dec 15, 2024</p>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Healing Circle</h4>
                    <p className="text-sm text-muted-foreground">Dec 22, 2024</p>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button size="sm" asChild>
                  <Link to="/dashboard/events/new">
                    <Plus className="h-4 w-4 mr-2" />
                    New Event
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/dashboard/events">Manage All</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Membership & Payments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Membership & Payments
              </CardTitle>
              <CardDescription>
                Manage your subscription and payment methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-green-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-green-800">Lifetime Membership</h3>
                    <p className="text-sm text-green-600">Active since March 2024</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Payment Method</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  **** **** **** 4242
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/dashboard/subscription">Manage Subscription</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security & Settings
              </CardTitle>
              <CardDescription>
                Password, privacy, and account settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Password</span>
                  <span className="text-sm text-muted-foreground">Updated 30 days ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Two-factor authentication</span>
                  <Badge variant="outline">Enabled</Badge>
                </div>
              </div>
              
              <Separator />
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/dashboard/security">Security Settings</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Spotlight Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Spotlight Your Business
            </CardTitle>
            <CardDescription>
              Get featured on the homepage and increase your visibility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg bg-yellow-50">
              <div>
                <h3 className="font-medium">Current Spotlight</h3>
                <p className="text-sm text-muted-foreground">Expires in 12 days</p>
                <Badge variant="secondary" className="mt-1">Active</Badge>
              </div>
              <Button variant="outline" asChild>
                <Link to="/dashboard/spotlight">
                  Extend Spotlight
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default MemberDashboard;