import Link from "next/link";
import ContactForm from "../components/contact-form/ContactForm";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";
import Socials from "../components/socials/Socials";

import { Metadata } from "next";

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
      <section>
        <h2 className="weathered-effect">{"// CONTACT INFO & RESOURCES"}</h2>
        <div className="py-3">
          <h3>Email: davidjamesadam@gmail.com</h3>
        </div>
        <div>
          <h3>You can find me at:</h3>
          <Socials />
        </div>
        <div className="py-3">
          <Link href="/David_Adam_resume.pdf" target="_blank">
            My resume
          </Link>
        </div>
      </section>
    </>
  );
}
