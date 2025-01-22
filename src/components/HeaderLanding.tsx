import logo from "../assets/ethereum-logo.png";

function HeaderLanding() {
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
          <a href="/stake" className="text-sm/6 font-semibold text-gray-900">
            Stake
          </a>
          <a href="/lend" className="text-sm/6 font-semibold text-gray-900">
            Lend
          </a>
          <a
            href="https://github.com/lidofinance"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Github
          </a>
          <a
            href="https://github.com/lidofinance/lido-ethereum-sdk"
            className="text-sm/6 font-semibold text-gray-900"
          >
            SDK
          </a>
          <a href="/privacy" className="text-sm/6 font-semibold text-gray-900">
            Privacy
          </a>
          <a
            href="/terms-of-use"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Terms of Use
          </a>
        </div>
        <div>
          <a
            href="/stake"
            className="bg-zinc-900 py-2 px-4 lg:py-3 lg:px-6 rounded-full text-neutral-50 font-bold hover:shadow-lg hover:scale-105 hover:transition-transform hover:bg-sky-500"
          >
            Stake ETH
          </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderLanding;
