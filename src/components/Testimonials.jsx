function Testimonials() {
  const reviews = [
    { name: "John Doe", text: "Amazing service! I love it ❤️" },
    { name: "Sarah Smith", text: "This saved me so much time. Highly recommend!" },
    { name: "Michael Brown", text: "Clean design and easy to use." },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="mb-4 italic">"{review.text}"</p>
            <h3 className="font-semibold text-blue-600">- {review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
