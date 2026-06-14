"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
};

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 flex flex-col gap-5"
      >
        <div className="weathered-text">
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
            className="border-[#44494ed7] border-2 p-3"
          />
        </div>

        <div className="weathered-text">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
            className="border-[#44494ed7] border-2 p-3"
          />
        </div>

        <div className="weathered-text">
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32 p-3 border-[#565d639a] border-2"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div className="weathered-text">

          <button
            className="bg-black p-3 border-[#3b2648] border-2 text-[#3b2648] font-bold"
            type="submit"
          >
            &gt; Send
          </button>
        </div>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error && (
          <div
            className={`${
              success ? "text-green-800" : "text-red-600"
            } px-5 py-2`}
          >
            {error}
          </div>
        )}
      </div>
    </>
  );
}
