"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-teal-500 my-12 ">

      <div className="text-center p-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to FashionStore
        </h1>
        <p className="max-w-xl mx-auto text-lg mb-8 text-gray-700">Discover the latest fashion trends and exclusive collections. Upgrade your style today!</p>

        <div className="flex justify-center gap-4 flex-wrap">
          {/* Primary CTA */}
          <Link
            href="/products"
            className="border-2 rounded-full font-semibold border-white text-white px-6 py-3 hover:bg-white teal-600 hover:text-teal-600 transition duration-300"
          >
            Shop Now
          </Link>

          {/* Secondary CTA (optional) */}
          <Link
            href="/about"
            className="text-white font-semibold hover:underline px-6 py-3"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
