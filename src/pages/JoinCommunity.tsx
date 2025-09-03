import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Heart, Shield } from "lucide-react";
import { useState } from "react";

const JoinCommunity = () => {
  const [selectedMembership, setSelectedMembership] = useState<"yearly" | "lifetime">("yearly");

  const membershipOptions = [
    {
      id: "yearly",
      name: "Winnipeg Healing Connection Membership",
      type: "Yearly",
      price: "$97",
      period: "per year",
      description: "Full access to our healing community with annual renewal",
      features: [
        "Access to all healing events and workshops",
        "Directory of local wellness businesses",
        "Monthly community newsletter",
        "Member-only discounts and offers",
        "Priority event booking",
        "Community support forums"
      ],
      popular: false
    },
    {
      id: "lifetime",
      name: "Winnipeg Healing Connection Membership",
      type: "Lifetime",
      price: "$497",
      period: "one-time",
      description: "Lifetime access to our healing community with exclusive benefits",
      features: [
        "Everything in Yearly membership",
        "Lifetime access - never pay again",
        "Exclusive lifetime member events",
        "Free guest passes for events",
        "Direct access to wellness experts",
        "Legacy member recognition",
        "Special anniversary celebrations"
      ],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Healing Community
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with like-minded individuals on your wellness journey and access exclusive resources for healing and growth.
          </p>
        </div>

        {/* Membership Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {membershipOptions.map((option) => (
            <Card 
              key={option.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedMembership === option.id 
                  ? 'ring-2 ring-purple-600 shadow-lg transform scale-105' 
                  : 'hover:shadow-md'
              } ${option.popular ? 'border-purple-200' : ''}`}
              onClick={() => setSelectedMembership(option.id as "yearly" | "lifetime")}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">{option.name}</CardTitle>
                <CardDescription className="text-purple-600 font-semibold text-lg">
                  {option.type}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{option.price}</span>
                  <span className="text-gray-600 ml-2">{option.period}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{option.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Signup Form */}
        <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Complete Your Membership</CardTitle>
            <CardDescription>
              Selected: {membershipOptions.find(opt => opt.id === selectedMembership)?.type} Membership
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interests">Healing Interests (Optional)</Label>
                <Textarea 
                  id="interests" 
                  placeholder="Tell us about your wellness goals and healing interests..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Membership Summary</h4>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {membershipOptions.find(opt => opt.id === selectedMembership)?.type} Membership
                  </span>
                  <span className="font-bold text-lg text-purple-600">
                    {membershipOptions.find(opt => opt.id === selectedMembership)?.price}
                  </span>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="terms" className="mt-1" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg">
                Complete Membership Registration
              </Button>
            </form>
            
            <div className="text-center pt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-purple-600 hover:text-purple-700 hover:underline font-medium">
                  Sign in here
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Community Benefits */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Join Our Community?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Supportive Community</h3>
              <p className="text-gray-600">Connect with others on similar healing journeys</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Holistic Wellness</h3>
              <p className="text-gray-600">Access to diverse healing modalities and practices</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Trusted Network</h3>
              <p className="text-gray-600">Vetted practitioners and authentic healing experiences</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JoinCommunity;