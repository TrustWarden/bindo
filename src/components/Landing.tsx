import brand from "../assets/ethereum-brand.png";
import WordSlider from "./WordsSlider";

function Landing() {
  return (
    <div className="flex lg:flex-row flex-col justify-around lg:px-32 px-5 py-10 mx-auto max-h-screen">
      <div className="justify-items-center lg:flex-1 lg:min-h-screen sm:h-10 lg:border-r-2 lg:border-gray-200">
        <img
          src={brand}
          className="max-h-screen lg:max-h-full lg:h-3/4 md:max-h-10 md:h-10"
        />
      </div>

      <div className="lg:flex-1 flex-col lg:px-9 lg:py-32 space-y-2 lg:space-y-6 mt-6 lg:mt-0">
        <p className="flex-1 text-4xl lg:text-7xl md:text-4xl sm:text-4xl mb-2 lg:mb-3">
          <WordSlider /> ETH Staking
        </p>
        <p className="text-sm md:text-lg text-gray-400">
          Empowering and securing Ethereum since 2020
        </p>

        <div className="flex flex-col lg:flex-row text-zinc-600 h-24 space-x-0 lg:space-x-4">
          <div className="lg:border-r-2 lg:border-gray-200 px-0 lg:pr-5 pt-3">
            <p className="text-4xl">4.9%</p>
            <p className="text-gray-300 text-2xl">APR </p>
          </div>

          <div className="pt-3 lg:pl-3">
            <p className="text-4xl">$58,237,273 </p>
            <p className="text-gray-300 text-2xl"> TVL</p>
          </div>

          <div className="lg:px-6 py-4 sm:py-5">
            <button className="bg-zinc-900 px-8 py-4 text-lg font-bold rounded-full text-neutral-50 hover:shadow-lg hover:scale-105 hover:transition-transform hover:bg-sky-600">
              Stake
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
