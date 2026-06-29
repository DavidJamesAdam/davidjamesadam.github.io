import Link from "next/link";
import ContactForm from "../components/contact-form/ContactForm";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";
import Socials from "../components/socials/Socials";
import Image from "next/image";

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
            <div className="my-5">
              <div className="my-5">
                <h3>&gt; Email:</h3>
                <p>davidjamesadam@gmail.com</p>
              </div>
              <div className="my-5">
                <h3>&gt; You can find me at:</h3>
                <Socials />
              </div>
              <div className="my-5">
                <h3>Preview my resume:</h3>
                <div className="weathered-effect">
                  <Link
                    href="/David_Adam_Resume.pdf"
                    target="_blank"
                    className="inline-flex w-fit self-start m-5 items-center rounded-md bg-black p-3 border-[#894fad] border-2 text-[#894fad] font-bold hover:border-[#bc77e7] hover:text-[#bc77e7] flex-row justify-center"
                  >
                    <Image
                      src="/resume.svg"
                      alt="Github icon"
                      width={40}
                      height={40}
                      className="purple m-1"
                    />
                    My resume
                  </Link>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
