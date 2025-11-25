"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gray-50">
      {/* Optional Background Image */}

      <div className="relative z-10 container mx-auto px-4 py-32 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
          Welcome to FashionStore
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
          Discover the latest fashion trends and exclusive collections. Upgrade your style today!
        </p>

        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          {/* Primary CTA */}
          <Link
            href="/products"
            className="border-2 rounded-full font-semibold border-teal-600 text-teal-600 px-6 py-3 hover:bg-teal-600 hover:text-white transition duration-300"
          >
            Shop Now
          </Link>

          {/* Secondary CTA (optional) */}
          <Link
            href="/about"
            className="text-teal-600 font-semibold hover:underline px-6 py-3"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
