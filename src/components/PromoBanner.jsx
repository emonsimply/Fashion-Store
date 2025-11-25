const PromoBanner = () => {
  return (
    <section className="py-20 bg-[#73AF6F] text-white text-center rounded-2xl mx-4 md:mx-16 my-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Spring Sale is Here!</h2>
      <p className="text-lg md:text-xl mb-6">Get up to 50% off on selected items. Limited time only!</p>
      <a
        href="/products"
        className="border-2 rounded-full font-semibold border-white text-white px-6 py-3 hover:bg-white hover:text-teal-600 transition duration-300"
      >
        Shop Now
      </a>
    </section>
  );
};

export default PromoBanner;
