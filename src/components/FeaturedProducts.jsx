const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Red Dress",
      price: "$49.99",
      img: "https://www.foxbabyandco.com.au/cdn/shop/files/BA52855D-5C3D-454F-86CA-490A6715C508-301867.jpg?v=1727720383",
    },
    {
      id: 2,
      name: "Blue Shirt",
      price: "$29.99",
      img: "https://twelvebd.com/cdn/shop/files/JS-SF-TM24-11WN-64676_S_5.jpg?v=1756707300&width=1946",
    },
    {
      id: 3,
      name: "Leather Bag",
      price: "$79.99",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaL3usjspn9T02E87ZhiI4ma0u7GRv_I54g&s",
    },
    {
      id: 4,
      name: "Sneakers",
      price: "$59.99",
      img: "https://www.vibrantbd.com/cdn/shop/files/88000101.jpg?v=1730351022",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">Featured Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-2xl p-4 hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-teal-600 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <button className="border-2 rounded-full font-semibold border-teal-600 text-teal-600 px-4 py-1.5 hover:bg-teal-600 hover:text-white transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturedProducts;