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
          </>
        }
        subContent={<ContactForm />}
      />
      <ContentSection>
        <h2 className="weathered-effect">{"// CONTACT INFO & RESOURCES"}</h2>
        <div className="flex flex-1 flex-col min-h-0 my-5">
          <div className="mb-5">
            <h3>&gt; Email:</h3>
            <p>davidjamesadam@gmail.com</p>
          </div>
          <div>
            <h3 className="flex flex-1 flex-col min-h-0">&gt; You can find me at:</h3>
            <Socials />
          </div>
          <div>
            <h3 className="flex flex-1 flex-col min-h-0 my-5">&gt; Preview my resume:</h3>
            <div className="weathered-effect">
              <Link
                href="/David_Adam_Resume.pdf"
                target="_blank"
                className="flex w-fit items-center justify-center gap-2 rounded-md bg-black p-3 border-2 border-[#894fad] text-[#894fad] font-bold hover:border-[#bc77e7] hover:text-[#bc77e7] mx-5"
              >
                <Image
                  src="/resume.svg"
                  alt="Github icon"
                  width={40}
                  height={40}
                  className="purple m-1 w-6 h-6 md:w-10 md:h-10"
                />
                My resume
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-1"></div>
      </ContentSection>
    </>
  );
}
