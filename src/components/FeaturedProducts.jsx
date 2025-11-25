const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Red Dress",
      price: "$49.99",
      img: "https://i.ebayimg.com/images/g/eBsAAOSw03lY7ahw/s-l400.jpg",
    },
    {
      id: 2,
      name: "Blue Shirt",
      price: "$29.99",
      img: "https://i.ebayimg.com/images/g/xxxx/s-l400.jpg",
    },
    {
      id: 3,
      name: "Leather Bag",
      price: "$79.99",
      img: "https://i.ebayimg.com/images/g/yyyy/s-l400.jpg",
    },
    {
      id: 4,
      name: "Sneakers",
      price: "$59.99",
      img: "https://i.ebayimg.com/images/g/zzzz/s-l400.jpg",
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