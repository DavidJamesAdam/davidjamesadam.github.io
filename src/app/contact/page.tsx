import React from "react";
import ContactForm from "../components/contact-form/ContactForm";

export default function Page() {
  return (
    <div className="flex flex-col h-screen overflow-hidden my-5">
      <h1 className="weathered-effect text-8xl">
        SUMMON <br /> A <span className="text-[#0cbffa]">DIALOGUE</span>
      </h1>
      <ContactForm />
    </div>
  );
}
