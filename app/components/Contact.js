"use client";
import React from "react";
import { FaEnvelope, FaPhoneAlt  } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6e309db7-f4f0-4839-a748-6dd4872849dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setTimeout(() => {
        setResult("");
      }, 1000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => {
        setResult("");
      }, 1000);
    }
  };
  
  return (
    <section id="contact" className="min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Contact <span className="text-[var(--highlight-color)]">Me</span>
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Let’s connect! Reach out via social media or drop a message using the form.
        </p>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Info & Social Links */}
          <div className="p-6 rounded-lg shadow-lg ">
            <h3 className="text-2xl font-semibold text-[var(--highlight-color)] mb-4">Link Up? Let&apos; roll!</h3>
            <p className="text-lg my-2">Have a project in mind or just want to chat? I'm all in! Whether it’s web development, design, or just a casual conversation, let’s connect and make something awesome together! </p>
            {/* Contact Info */}
            <div className="space-y-4 text-lg">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[var(--highlight-color)] text-2xl" />
                <a href="mailto:your-email@gmail.com" className="hover:text-[var(--highlight-color)] transition">
                  anik.tiwary08@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[var(--highlight-color)] text-2xl" />
                <span>+91 8618520069</span>
              </div>
            </div>

            
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[var(--background-color)] p-6 rounded-lg shadow-lg ">
            <h3 className="text-2xl font-semibold text-[var(--highlight-color)] mb-4">Got Ideas? Let&apos;s cook!</h3>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                
                placeholder="Your Name"
                name="name"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[var(--highlight-color)] focus:ring-2 focus:ring-[var(--highlight-color)] transition mb-4"
                required
              />
              <input
                type="email"
                
                placeholder="Your Email"
                name="email"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[var(--highlight-color)] focus:ring-2 focus:ring-[var(--highlight-color)] transition mb-4"
                required
              />
              {/* <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[var(--highlight-color)] focus:ring-2 focus:ring-[var(--highlight-color)] transition mb-4"
                required
              /> */}
              <textarea
                placeholder="Your Message"
                name="message"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[var(--highlight-color)] focus:ring-2 focus:ring-[var(--highlight-color)] transition mb-4"
                rows="4"
                required
              ></textarea>
              <button className="relative overflow-hidden px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 group" type="submit">
                {/* Background Layer for Animated Transition */}
                <span className="absolute inset-0 bg-[var(--background-color)] transition-all duration-500 group-hover:-translate-x-0"></span>
                <span className="absolute inset-0 bg-[var(--highlight-color)] translate-x-0 transition-all duration-500 group-hover:translate-x-full"></span>

                {/* Icon & Text */}
                <span className="relative flex items-center text-[var(--text2-color)] dark:text-[var(--text-color)]">
                  <IoIosSend className="inline-block mr-2 size-7" />
                  Send Message
                </span>
              </button>
            </form>
            <span>{result}</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
