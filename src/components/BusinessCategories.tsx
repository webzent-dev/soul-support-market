
import { Card, CardContent } from "@/components/ui/card";

const BusinessCategories = () => {
  const categories = [
    {
      name: "Access Consciousness",
      count: "12 practitioners",
      description: "Consciousness expansion techniques",
      color: "bg-purple-100 text-purple-700",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Acupuncture",
      count: "18 practitioners", 
      description: "Traditional Chinese medicine",
      color: "bg-indigo-100 text-indigo-700",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Energy Healing and Reiki",
      count: "35 practitioners",
      description: "Universal life force energy",
      color: "bg-purple-100 text-purple-700",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Massage Therapy",
      count: "28 therapists",
      description: "Therapeutic bodywork",
      color: "bg-blue-100 text-blue-700",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Counselling / Coaching",
      count: "42 professionals",
      description: "Mental health support",
      color: "bg-green-100 text-green-700",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Crystal Therapy",
      count: "24 practitioners",
      description: "Healing with crystal energy",
      color: "bg-pink-100 text-pink-700",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Meditation Facilitator",
      count: "31 facilitators",
      description: "Mindfulness and meditation",
      color: "bg-teal-100 text-teal-700",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Naturopathic Medicine",
      count: "16 doctors",
      description: "Natural healing medicine",
      color: "bg-emerald-100 text-emerald-700",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sound Healing Therapy",
      count: "19 practitioners",
      description: "Healing through sound vibrations",
      color: "bg-orange-100 text-orange-700",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const allCategories = [
    "Access Consciousness", "Acupuncture", "Akashic Soul Readings", "Alternative Therapy Practitioners",
    "Animal Health", "Aromatherapy", "Author & Reset Coach", "Body Talk", "Business Coach", "Channeller",
    "Chiropractic Health", "Counselling / Coaching", "Crystal Therapy", "Crystals", "Doula - End of Life",
    "Drumming Experiences", "EFT Tapping", "Energy Healing and Reiki", "Fitness and Exercise", "Forest Bathing",
    "Gluten Free Living", "Gong Bath Meditations", "Grief Counseling", "Happiness", "Healing Touch",
    "Health Coach", "Herbalists - Botanicals", "Holistic Nurses", "Hypnotherapy", "Integrated Energy Therapy",
    "Life Coach", "Local Shopping", "Massage Therapy", "Meditation Facilitator", "Medium & Portrait Art",
    "Mediums", "Mindfulness", "Mindset Coach", "Music and Sound Healing", "Natural Cleaning Products",
    "Natural Products", "Naturopathic Medicine", "NLP Neuro-Linguistic Programming", "Nutritional Support",
    "Organic and Healthy Snacks", "Organic Skin Care", "Past Life Regression", "Peacefulness", "Pets",
    "Physio Therapy", "Pranic Healing", "Psychic Guidance", "Qigong", "Reflexology", "Reiki", "Retreats",
    "Shaman", "Sound Healing Therapy", "Spiritual Art", "Super Patch", "Tantra", "Tantra / Sexologist",
    "Theta Healing", "Trauma Resolution", "Voxx Life", "Weight Loss", "Wellness Travel", "Women Empowerment",
    "Women's Health"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Winnipeg Healing Connection <span className="text-purple-600">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the right type of support for your healing journey in Winnipeg
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Available Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-pointer shadow-sm"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCategories;
