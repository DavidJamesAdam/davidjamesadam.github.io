"use client";

import Form from "next/form";
import Image from "next/image";
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
          border: "solid #894fad",
          color: "#894fad",
        },
      });
    } else {
      toast.error(formState.message, {
        style: {
          background: "#000000",
          border: "solid #44494ed7",
          color: "#960000",
        },
      });
    }
  }, [formState]);

  return (
    <>
      <Form
        className="flex flex-col py-4 mt-4 gap-5 md:w-2/3"
        action={formAction}
      >
        <div className="weathered-effect w-full">
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            name="username"
            placeholder="Your name"
            required
          />
        </div>

        <div className="weathered-effect w-full">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email@example.com"
            required
          />
        </div>

        <div className="weathered-effect w-full">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            className="h-32"
            name="message"
            placeholder="Type your message here..."
            required
          />
        </div>
        <div className="flex flex-row md:justify-normal justify-center weathered-effect">
          <button
            className="w-1/2 md:m-0 inline-flex self-start m-5 items-center rounded-md bg-black p-3 border-[#894fad] border-2 text-[#894fad] font-bold hover:border-[#bc77e7] hover:text-[#bc77e7] flex-row justify-around"
            type="submit"
          >
            {isPending ? (
              "Sending..."
            ) : (
              <>
                Send
                <Image
                  src="/Banishing.svg"
                  alt="Send"
                  className="purple w-8"
                  width={10}
                  height={10}
                />
              </>
            )}
          </button>
        </div>
      </Form>
    </>
  );
}
