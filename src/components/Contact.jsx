import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = "Name is required";
    }

    if (!userEmail.trim()) {
      newErrors.userEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      newErrors.userEmail = "Enter a valid email address";
    }

    if (!userMessage.trim()) {
      newErrors.userMessage = "Message is required";
    } else if (userMessage.length < 10) {
      newErrors.userMessage = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const templateParams = {
      from_name: userName.trim(),
      from_mail: userEmail.trim(),
      message: userMessage.trim(),
    };

    emailjs
      .send("service_ejvuyff", "template_2jz1nnf", templateParams, {
        publicKey: "rqikwZcT0XFDUPV6r",
      })
      .then(
        (response) => {
          console.log("Email sent", response.status, response.text);
          setUserEmail("");
          setUserMessage("");
          setUserName("");
          setErrors({});
        },
        (err) => {
          console.log("Failed to send email.", err);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 px-6">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Contact Me
      </h2>

      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <form ref={form} onSubmit={handleSendEmail} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="block w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 mt-1 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="block w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 mt-1 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.userEmail && (
              <p className="text-red-500 text-sm">{errors.userEmail}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="block w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 mt-1 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.userMessage && (
              <p className="text-red-500 text-sm">{errors.userMessage}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
