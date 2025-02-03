import ContactArticle from "./ContactArticle";
import ContactForm from "./ContactForm";
import HeaderLanding from "./HeaderLanding";
import LandingFooter from "./LandingFooter";
import useAnimateImage from "./ImageAnimation";

function Contact() {
  const animateRef = useAnimateImage();

  return (
    <div className="bg-landing">
      <HeaderLanding />
      <div className="min-h-screen content-center border-b border-gray-300">
        <div className="relative w-full lg:h-screen min-h-96 bg-gray-100 mb-16 pt-16 lg:pt-32">
          <h1 className="lg:text-6xl text-4xl font-light text-center">
            Need help?
          </h1>
          <div
            ref={animateRef}
            className="header-contact absolute top-5 h-full w-full"
          ></div>
        </div>

        <ContactArticle />

        <div className="p-7">
          <ContactForm />
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}

export default Contact;
