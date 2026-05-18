"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailto = `mailto:popoolafarouk@gmail.com?subject=${encodeURIComponent(
      subject + " — from " + name
    )}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">")}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <RevealOnScroll className="section-header">
          <span className="section-tag">05 — Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project that needs a sharp eye for quality? I'd love to hear from you.
          </p>
        </RevealOnScroll>

        <div className="contact-grid">
          <RevealOnScroll
            as="a"
            href="mailto:popoolafarouk@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">📧</div>
            <h4>Email</h4>
            <p>popoolafarouk@gmail.com</p>
          </RevealOnScroll>

          <RevealOnScroll
            as="a"
            href="https://linkedin.com/in/popoola-farouk-9914a3187"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">💼</div>
            <h4>LinkedIn</h4>
            <p>linkedin.com/in/popoola-farouk-9914a3187</p>
          </RevealOnScroll>

          <RevealOnScroll
            as="a"
            href="https://github.com/Farouk-p"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">🐙</div>
            <h4>GitHub</h4>
            <p>github.com/Farouk-p</p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll as="form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            id="message"
            placeholder="Your message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
