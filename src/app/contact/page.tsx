import Link from "next/link";
import ContactForm from "../components/contact-form/ContactForm";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";
import Socials from "../components/socials/Socials";

import { Metadata } from "next";
import ContentSection from "../components/contentSection/ContentSection";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <HeaderWrapper
        title={
          <>
            SUMMON <br /> A <span className="text-[#0cbffa]">DIALOGUE</span>
            <span className="blinking-text">_</span>
          </>
        }
        subContent={<ContactForm />}
      />
      <ContentSection
        content={
          <>
            <h2 className="weathered-effect">
              {"// CONTACT INFO & RESOURCES"}
            </h2>
            <div className="py-3">
              <h3>&gt; Email:</h3>
              <p>davidjamesadam@gmail.com</p>
            </div>
            <div>
              <h3>&gt; You can find me at:</h3>
              <Socials />
            </div>
            <div className="py-3">
              <Link href="/David_Adam_Resume.pdf" target="_blank">
                <u>My resume</u>
              </Link>
            </div>
          </>
        }
      />
    </>
  );
}
