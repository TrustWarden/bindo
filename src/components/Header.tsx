import logo from "../assets/ethereum-logo.png";

function Header() {
  return (
    <header className="border-b-2 border-gray-200">
      <nav className="mx-auto flex max-w-full justify-between items-center py-3 pr-2 lg:p-5 sm:px-1 lg:px-8">
        <div className="flex">
          <a href="/" className="flex items-center">
            <img src={logo} className="max-w-24 max-h-24" />
            <span className="text-4xl relative -left-5 hidden lg:block">
              Bindo
            </span>
          </a>
        </div>

        <div className="hidden lg:flex space-x-16">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            About
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Company
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Developers
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Learn
          </a>
        </div>
        <div>
          <button className="bg-zinc-900 py-2 px-4 lg:py-3 lg:px-6 rounded-full text-neutral-50 font-bold hover:shadow-lg hover:scale-105 hover:transition-transform">
            Stake ETH
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
