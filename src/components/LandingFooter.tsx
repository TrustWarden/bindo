import logo from "../assets/ethereum-logo.png";

function LandingFooter() {
  return (
    <div className="flex flex-row justify-between pr-2 items-center h-16 border-t border-black">
      <a href="/" className="flex items-center">
        <img src={logo} className="max-w-16 max-h-16" />
        <span className="text-xl relative -left-5 hidden lg:block">Bindo</span>
      </a>
      <div className="flex space-x-5">
        <a href="/privacy">Privacy Notice</a>
        <a href="/terms-of-use">Term of Use</a>
      </div>
    </div>
  );
}

export default LandingFooter;

// https://discord.gg/2JA7NV9F discord invite to etherstaker
