import React from "react";
import ContactForm from "../components/contact-form/ContactForm";

export default function Page() {
  return (
    <div className="flex flex-col my-5 md:flex-row">
      <div className="md:w-1/2">
        <h1 className="weathered-effect text-6xl md:text-8xl">
          SUMMON <br /> A <span className="text-[#0cbffa]">DIALOGUE</span>
        </h1>
        <ContactForm />
      </div>
      <div className="w-1/2 flex flex-col">
        <h1 className="weathered-effect text-6xl md:text-8xl">CONTACT INFO</h1>
        <div className="flex flex-col">
          <a href="https://www.linkedin.com/in/davidjamesadam/">LinkedIn</a>
          <a href="https://github.com/DavidJamesAdam">GitHub</a>
        </div>
      </div>
    </div>
  );
}
