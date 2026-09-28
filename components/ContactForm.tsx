"use client";

import { useState } from "react";

import "@/app/globals.css";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! I'll reach out in some time.");
        form.reset();
      } else {
        setResult(data.message || "Error sending message. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please check your connection.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="send-message-form" onSubmit={onSubmit}>
      <div className="name-email">
        <div className="name-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            autoComplete="name"
          />
        </div>
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="message-input">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={6}
          placeholder="Your message"
          required
        ></textarea>
      </div>

      <button type="submit" className="send-btn" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {result && (
        <p
          className={`${isSubmitting ? "text-text-color-secondary!" : "text-primary-color!"} font-primary! font-semibold text-lg!`}
        >
          {result}
        </p>
      )}
    </form>
  );
}
