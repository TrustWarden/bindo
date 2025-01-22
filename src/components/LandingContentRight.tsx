import WordSlider from "./WordsSlider";

function LandingContentRight() {
  return (
    <div className="lg:flex-1 flex-col lg:px-9 lg:py-32 space-y-2 lg:space-y-6 mt-6 lg:mt-0">
      <p className="flex-1 text-4xl lg:text-6xl font-light md:text-4xl sm:text-4xl mb-2 lg:mb-3">
        Enterprise solution of <br /> <WordSlider /> ETH Staking & <br />
        WBTC Lending
      </p>
      <p className="text-sm md:text-lg text-gray-400">
        Empowering and securing Ethereum since 2020
      </p>

      <div className="flex flex-col lg:flex-row text-zinc-600 h-24 space-x-0 lg:space-x-4">
        <div className="lg:border-r-2 lg:border-gray-200 px-0 lg:pr-5 pt-3">
          <p className="text-4xl">2.9%</p>
          <p className="text-gray-300 text-2xl">APR </p>
        </div>

        <div className="pt-3 lg:pl-3">
          <p className="text-4xl">$2,405,228,045</p>
          <p className="text-gray-300 text-2xl"> TVL</p>
        </div>

        <div className="lg:px-6 py-4 sm:py-5">
          <a
            href="/stake"
            className="bg-zinc-900 px-8 py-4 text-lg font-bold rounded-full text-neutral-50 hover:shadow-lg hover:scale-105 hover:transition-transform hover:bg-sky-500 hover:cursor-pointer"
          >
            Stake
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingContentRight;
