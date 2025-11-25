const Features = () => {
  const featureList = [
    { title: "Free Shipping", desc: "On all orders over $50", icon: "🚚" },
    { title: "Secure Payments", desc: "100% secure payment", icon: "💳" },
    { title: "24/7 Support", desc: "We’re here to help anytime", icon: "📞" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Features;