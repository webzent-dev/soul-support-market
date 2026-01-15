
const BusinessCategories = () => {
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Winnipeg Healing Connection <span className="text-purple-600">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the right type of support for your healing journey in Winnipeg
          </p>
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
