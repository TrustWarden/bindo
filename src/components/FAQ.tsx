import DisclosuresLanding from "./DisclosuresLanding";
import HeaderLanding from "./HeaderLanding";
import LandingFooter from "./LandingFooter";

function FAQ() {
  return (
    <div className="bg-landing">
      <HeaderLanding />
      <div className="min-h-screen content-center pl-4 lg:pl-32 border-b border-gray-300">
        <DisclosuresLanding />
      </div>
      <LandingFooter />
    </div>
  );
}

export default FAQ;
