import React from "react";
import ContactForm from "../components/contact-form/ContactForm";

export default function Page() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <h1 className="weathered-effect text-8xl">Summon <br/> a Dialogue</h1>
      <ContactForm />
    </div>
  );
}
