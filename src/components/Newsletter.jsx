function Newsletter() {
  return (
    <section className="newsletter">
      <h2>📧 Stay Updated</h2>

      <p>
        Subscribe to receive exclusive offers, travel tips, and new property
        updates.
      </p>

      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;