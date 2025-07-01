
import { Button } from "@/components/ui/button";
import { Users, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your <span className="text-emerald-100">Healing Journey?</span>
        </h2>
        
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of individuals and practitioners creating a supportive community 
          focused on mental health and healing
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
            <Users className="h-8 w-8 mx-auto mb-4 text-emerald-200" />
            <h3 className="text-xl font-bold mb-2">For Individuals</h3>
            <p className="text-emerald-100 mb-4">
              Find support, connect with professionals, and join healing events
            </p>
            <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full">
              Get Started Free
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
            <Calendar className="h-8 w-8 mx-auto mb-4 text-emerald-200" />
            <h3 className="text-xl font-bold mb-2">For Practitioners</h3>
            <p className="text-emerald-100 mb-4">
              Grow your practice, host events, and connect with your community
            </p>
            <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full">
              Register Business
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full text-lg">
            <Users className="mr-2 h-5 w-5" />
            Join Community
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg">
            <Calendar className="mr-2 h-5 w-5" />
            Browse Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
