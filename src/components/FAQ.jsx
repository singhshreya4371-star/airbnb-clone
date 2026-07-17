function FAQ() {
  const faqs = [
    {
      question: "How do I book a property?",
      answer: "Browse properties, choose your favorite, and contact the host to complete the booking.",
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, cancellation depends on the host's cancellation policy.",
    },
    {
      question: "Are pets allowed?",
      answer: "Some properties allow pets. Please check the property details before booking.",
    },
  ];

  return (
    <section className="faq">
      <h2>❓ Frequently Asked Questions</h2>

      {faqs.map((item, index) => (
        <div className="faq-item" key={index}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  );
}

export default FAQ;