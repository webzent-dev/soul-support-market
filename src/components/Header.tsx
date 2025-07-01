
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://www.winnipeghc.com/site-content/themes/whc/img/logo-dk.png"
              alt="Winnipeg Healing Connection"
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Events</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Businesses</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50">
              <User className="mr-2 h-4 w-4" />
              Member Login
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Join Community
            </Button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
