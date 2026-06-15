"use client";

import Form from "next/form";
import { sendDiscordMessage } from "../../actions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formState, formAction, isPending] = useActionState(
    sendDiscordMessage,
    null,
  );

  useEffect(() => {
    if (!formState) return; // wait for first result

    if (formState.success) {
      toast.success(formState.message, {
        style: {
          background: "#000000",
          border: "#44494ed7",
          color: "#894fad",
        },
      });
    } else {
      toast.error(formState.message, {
        style: {
          background: "#000000",
          border: "#44494ed7",
          color: "#960000",
        },
      });
    }
  }, [formState]);

  return (
    <>
      <Form
        className="flex flex-col items-center py-4 mt-4 gap-5 md:w-1/5"
        action={formAction}
      >
        <div className="weathered-effect w-full">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="username"
            placeholder="Your name"
            className="border-[#44494ed7] border-2 p-3"
            required
          />
        </div>

        <div className="weathered-effect w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            className="border-[#44494ed7] border-2 p-3"
            required
          />
        </div>

        <div className="weathered-effect w-full">
          <label htmlFor="message">Your Message</label>
          <textarea
            className="h-32 p-3 border-[#565d639a] border-2"
            name="message"
            placeholder="Type your message here..."
            required
          />
        </div>
        <div className="weathered-effect">
          <button
            className="bg-black p-3 border-[#3b2648] border-2 text-[#3b2648] font-bold w-auto"
            type="submit"
          >
            {isPending ? "Sending..." : "> Send"}
          </button>
        </div>
      </Form>
    </>
  );
}
