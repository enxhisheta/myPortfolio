import { useState } from "react";
import "./Contact.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!subject) newErrors.subject = "Subject is required";
    if (!message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length === 0) {
      console.log({ name, email, subject, message });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact me</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label>Subject</label>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {errors.subject && (
          <span className="error-message">{errors.subject}</span>
        )}

        <label>Message</label>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
        ></textarea>
        {errors.message && (
          <span className="error-message">{errors.message}</span>
        )}

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
