import ContactForm from "../components/contact-form/ContactForm";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";
import Socials from "../components/socials/Socials";

export default function Page() {
  return (
    <div className="page-wrapper">
      <HeaderWrapper
        title={
          <>
            SUMMON <br /> A <span className="text-[#0cbffa]">DIALOGUE</span>
            <span className="blinking-text">_</span>
          </>
        }
        subContent={<ContactForm />}
      />
      <main>
        <div>
          <h2 className="weathered-effect">{"// CONTACT INFO & RESOURCES"}</h2>
          <div className="py-3">

          <h3>Email: davidjamesadam@gmail.com</h3>
          </div>
          <h3>You can find me at:</h3>
          <Socials />
        </div>
      </main>
    </div>
  );
}
