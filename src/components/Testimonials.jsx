const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Amazing quality and fast shipping! Highly recommend.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Mark Smith",
      text: "The products exceeded my expectations. Love it!",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Emily Davis",
      text: "Customer service was excellent and very helpful.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              {/* <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              /> */}
              <p className="text-gray-600 mb-4">{review.text}</p>
              <h4 className="text-teal-600 font-semibold">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials;