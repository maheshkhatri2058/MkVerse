"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Nvbar from "../uI/Navbar";
import Footer from "../uI/Footer";

export default function page() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
       .sendForm(
        "service_lbxez8e",     // EmailJS service ID
        "template_hg8j6dt",    // EmailJS template ID
        form.current,
        "7ww5t99wFT1cKe6dW"      // EmailJS public key (user ID)
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
    <Nvbar/>
    <section className="bg-slate-100 p-15">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-10">
  {/* Left Column - Text Info */}
  <div className="flex flex-col justify-center space-y-5">
    <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
    <p className="text-gray-600">
      Have a project in mind? Need a stunning website or app? We're just a message away.
      Reach out to discuss your ideas or queries — we're happy to help!
    </p>
    <div className="text-sm text-gray-700 space-y-2">
      <p>📩 <strong>Email:</strong> <a href="mailto:info@mkverse.in" className="text-blue-600 underline">info@mkverse.in</a></p>
      <p>📞 <strong>Phone:</strong> +91 12345 67890</p>
      <p>🌐 <strong>Website:</strong> <a href="https://mkverse.in" className="text-blue-600 underline">www.mkverse.in</a></p>
    </div>
  </div>

  {/* Right Column - Form */}
  <form ref={form} onSubmit={sendEmail} className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <textarea
      name="message"
      placeholder="Your Message"
      rows="5"
      required
      className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    />
    <div className="text-center">
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
      >
        Send Message
      </button>
    </div>
    {status && (
      <p className="text-center text-green-600 text-sm mt-2 animate-pulse">{status}</p>
    )}
  </form>
</div>

    </section>
    <Footer/>
    
    </>
  );
}
