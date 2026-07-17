function Contact() {
  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
      <h1>Contact Us</h1>

      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{ padding: "12px", fontSize: "16px" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{ padding: "12px", fontSize: "16px" }}
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          style={{ padding: "12px", fontSize: "16px" }}
        ></textarea>

        <button
          type="submit"
          style={{
            background: "#ff385c",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;