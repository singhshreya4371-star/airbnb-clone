function Testimonials() {
  const reviews = [
    {
      name: "Aarav",
      text: "Amazing experience! The booking process was smooth and the stay was fantastic.",
    },
    {
      name: "Priya",
      text: "Beautiful properties and excellent customer service. Highly recommended!",
    },
    {
      name: "Rohan",
      text: "The website is easy to use and I found the perfect vacation home.",
    },
  ];

  return (
    <section className="testimonials">
      <h2>💬 What Our Guests Say</h2>

      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{review.name}</h3>
            <p>"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;