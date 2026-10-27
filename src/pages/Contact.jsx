
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-banner">
        <p>WE ARE HERE TO HELP</p>
        <h1>Contact Us</h1>
        <p>Have a question about our plumbing products? Get in touch.</p>
      </section>

      <section className="contact-content">
        <div className="contact-details">
          <p className="contact-label">GET IN TOUCH</p>
          <h2>Let's Talk About Your Plumbing Needs</h2>
          <p className="contact-intro">
            Send us your questions about products, availability,
            or plumbing supplies.
          </p>

          <div className="contact-detail-card">
            <span>📍</span>
            <div><h3>Visit Our Store</h3><p>Your shop address goes here</p></div>
          </div>

          <div className="contact-detail-card">
            <span>📞</span>
            <div><h3>Call Us</h3><p>+91 98765 43210</p></div>
          </div>

          <div className="contact-detail-card">
            <span>✉️</span>
            <div><h3>Email Us</h3><p>hello@pipepro.com</p></div>
          </div>

          <div className="contact-detail-card">
            <span>🕒</span>
            <div><h3>Working Hours</h3><p>Monday – Saturday: 9 AM – 7 PM</p></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <p>Fill out the form and let us know how we can help.</p>

          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <div className="contact-form-row">
            <div>
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="contact-phone">Phone Number</label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>
          </div>

          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Product enquiry"
            required
          />

          <label htmlFor="contact-message">Your Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows="5"
            required
          />

          <button type="submit" className="contact-submit">
            Send Message →
          </button>

          {submitted && (
            <p className="contact-success" role="status">
              Thank you, {form.name}! Your message is ready, but this demo
              does not send it to a store inbox yet.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;
