import React from "react";
import cn from "classnames";

export default function ContactForm({ className }) {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className={cn(
        "max-w-lg p-8 bg-white rounded-md mx-auto mt-12 shadow",
        className
      )}
    >
      <p>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Potential client"
          required
        />
      </p>
      <p>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@yoursite.com"
          required
        />
      </p>
      <p>
        <label htmlFor="message">Message</label>
        <textarea name="message" required />
      </p>
      <p>
        <button
          className="primary-button text-xl font-bold w-full mt-2"
          type="submit"
        >
          Send
        </button>
      </p>
    </form>
  );
}
