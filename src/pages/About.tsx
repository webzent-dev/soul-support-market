import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Winnipeg Healing Connection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building bridges between healing practitioners and the community, creating a supportive 
            ecosystem where wellness thrives and connections flourish.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12 border-purple-200">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Winnipeg Healing Connection serves as a vital hub for holistic health and wellness 
              practitioners in our community. We believe that healing happens through connection, 
              collaboration, and shared knowledge. Our platform brings together diverse healing 
              modalities and creates opportunities for both practitioners and community members to 
              discover, learn, and grow together.
            </p>
          </CardContent>
        </Card>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600">
              Fostering connections between practitioners and clients to build a stronger healing community.
            </p>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Holistic Wellness</h3>
            <p className="text-gray-600">
              Supporting diverse healing approaches that address mind, body, and spirit.
            </p>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
            <p className="text-gray-600">
              Providing opportunities for learning and growth through workshops and events.
            </p>
          </Card>
        </div>

        {/* What We Offer */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Practitioners</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-3">✓</Badge>
                    Business directory listing
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-3">✓</Badge>
                    Event promotion platform
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-3">✓</Badge>
                    Networking opportunities
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-3">✓</Badge>
                    Educational workshops
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Community</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-3">✓</Badge>
                    Discover local healing services
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-3">✓</Badge>
                    Access to wellness events
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-3">✓</Badge>
                    Educational resources
                  </li>
                  <li className="flex items-center">
                    <Badge variant="secondary" className="mr-3">✓</Badge>
                    Community support network
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="text-center">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Based in Winnipeg</h2>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Proudly serving the Winnipeg community and surrounding areas. We're committed to 
              supporting local healers and connecting them with those seeking wellness and healing.
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default About;