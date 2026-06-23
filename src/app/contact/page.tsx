import React from "react";
import ContactForm from "../components/contact-form/ContactForm";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";

export default function Page() {
  return (
    <div className="page-wrapper">
      <HeaderWrapper
        title={
          <>
            SUMMON <br /> A <span className="text-[#0cbffa]">DIALOGUE</span>
          </>
        }
        subContent={<ContactForm />}
      />
      <main>
        <h2 className="weathered-effect">{'// CONTACT INFO'}</h2>
        <div className="flex flex-col">
          <a href="https://www.linkedin.com/in/davidjamesadam/">LinkedIn</a>
          <a href="https://github.com/DavidJamesAdam">GitHub</a>
        </div>
      </main>
    </div>
  );
}
