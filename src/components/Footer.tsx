import { Heart, Home, Users, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold">Winnipeg Healing Connection</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Building a supportive community where mental health professionals and 
              individuals connect for healing, growth, and wellness in Winnipeg.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find Practitioners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Join Support Groups</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">For Businesses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Register Your Practice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Host Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Winnipeg Healing Connection. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
