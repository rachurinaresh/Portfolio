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
    <div className="w-full border p-5">
      <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
      <div className="border flex justify-center">
        <div className="border p-5 w-full max-w-md">
          <form ref={form} onSubmit={handleSendEmail}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="block w-full border rounded-md px-3 py-2 mt-1 text-gray-900 focus:outline-indigo-600"
              />
              {errors.userName && (
                <p className="text-red-500 text-sm">{errors.userName}</p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="block w-full border rounded-md px-3 py-2 mt-1 text-gray-900 focus:outline-indigo-600"
              />
              {errors.userEmail && (
                <p className="text-red-500 text-sm">{errors.userEmail}</p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="block w-full border rounded-md px-3 py-2 mt-1 text-gray-900 focus:outline-indigo-600"
              />
              {errors.userMessage && (
                <p className="text-red-500 text-sm">{errors.userMessage}</p>
              )}
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-indigo-600"
              >
                Let's Talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
