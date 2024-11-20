"use client";

import React, { useState } from "react";

export default function Component() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, subject, message };
    // You would replace this section with your email handling logic
    console.log("Form Data Submitted: ", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
    setIsModalOpen(false);
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-black flex flex-col items-center justify-start relative p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage:
          "url('/background-buildings.jpg?height=1080&width=1920')",
      }}
    >
      <header className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8">
        <img
          src="/inovee-logo.png?height=150&width=150"
          alt="Inovee AI"
          className="w-16 sm:w-20 md:w-24 lg:w-32"
        />
      </header>

      <main className="mt-2 sm:mt-28 md:mt-32 lg:mt-40 text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-sans mb-4">
          INOVEE <span className="text-green-600">AI</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-sans mt-4 sm:mt-6 whitespace-normal sm:whitespace-nowrap">
          Innovating Energy Efficiency:{" "}
          <span className="text-green-600">AI</span>-Powered Solutions for Smart
          Buildings
        </p>
      </main>

      <div className="text-xl sm:text-2xl md:text-3xl font-sans text-gray-600 italic mt-12 sm:mt-16 md:mt-20 lg:mt-24 whitespace-normal sm:whitespace-nowrap text-center px-4">
        Launching Soon...
      </div>

      <footer className="absolute bottom-2 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs font-sans text-gray-400 mb-4 sm:mb-0 text-center sm:text-left">
          INOVEE AI 2024, All rights reserved
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-transparent text-black border bg-white border-black rounded hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
        >
          Get in Touch
        </button>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded h-32"
              />
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
