import ContactArticle from "./ContactArticle";
import ContactForm from "./ContactForm";
import HeaderLanding from "./HeaderLanding";
import LandingFooter from "./LandingFooter";

function Contact() {
  return (
    <div className="bg-landing">
      <HeaderLanding />
      <div className="min-h-screen content-center pl-4 lg:pl-32 border-b border-gray-300">
        <ContactArticle />

        <ContactForm />
      </div>
      <LandingFooter />
    </div>
  );
}

export default Contact;
