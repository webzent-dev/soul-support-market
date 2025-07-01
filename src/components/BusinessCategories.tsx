
import { Card, CardContent } from "@/components/ui/card";

const BusinessCategories = () => {
  const categories = [
    {
      name: "Therapists & Counselors",
      count: "48 businesses",
      description: "Licensed mental health professionals",
      color: "bg-emerald-100 text-emerald-700",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Wellness Centers",
      count: "32 businesses", 
      description: "Holistic healing and wellness",
      color: "bg-teal-100 text-teal-700",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Support Groups",
      count: "25 groups",
      description: "Peer support and community",
      color: "bg-cyan-100 text-cyan-700",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Alternative Healing",
      count: "36 practitioners",
      description: "Reiki, acupuncture, massage",
      color: "bg-green-100 text-green-700",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Meditation & Yoga",
      count: "28 studios",
      description: "Mindfulness and movement",
      color: "bg-blue-100 text-blue-700",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Life Coaches",
      count: "41 coaches",
      description: "Personal development guidance",
      color: "bg-purple-100 text-purple-700",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Browse by <span className="text-emerald-600">Category</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the right type of support for your healing journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                  Browse Category
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCategories;
