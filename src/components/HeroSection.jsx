function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
    >
      <h2 className="text-4xl font-bold mb-4">Welcome to My Landing Page</h2>
      <p className="max-w-xl mb-6">
        Build modern, responsive websites with ease. Fast, simple, and beautiful.
      </p>
      <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-200 transition">
        Get Started
      </button>
    </section>
  );
}

export default HeroSection;
