
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Bell } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Connected to Your Healing Journey
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get weekly updates on new events, featured businesses, and healing resources 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                <Bell className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-purple-200">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
