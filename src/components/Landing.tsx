import LandingContentRight from "./LadingContentRight";
import LandingContentLeft from "./LandingContentLeft";
import certora from "../assets/certora.svg";
import ackee from "../assets/ackee.svg";
import chainsecurity from "../assets/chainsecurity.svg";
import hexens from "../assets/hexens.svg";
import oxorio from "../assets/oxorio.svg";
import sigmaprime from "../assets/sigmaprime.svg";
import statemind from "../assets/statemind.svg";
import Box from "./Box";

function Landing() {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-around lg:px-32 px-5 py-10 mx-auto mb-44 lg:mb-auto">
        <LandingContentLeft />
        <LandingContentRight />
      </div>

      <div className="flex w-3/4 justify-items-center mx-auto">
        <Box>
          <div className="flex flex-col lg:flex-row">
            <div className="justify-start space-y-3">
              <h3 className="text-3xl font-bold">Protected and Verified</h3>
              <p className="text-lg text-gray-600">
                <span className="font-semibold text-gray-800">Over $4M</span>{" "}
                invested in security, including audits, bug bounties, and expert
                reviews
              </p>
            </div>

            <div className="justify-content-end lg:absolute lg:right-56 lg:space-x-7 space-x-5 mt-10 lg:mt-0">
              <button className="border border-gray hover:border-sky-500 hover:text-sky-500 hover:transition-all rounded-full py-3 px-6">
                Audit
              </button>
              <button className="border border-gray hover:border-sky-500 hover:text-sky-500 hover:transition-all rounded-full py-3 px-6">
                Bounty
              </button>
            </div>
          </div>

          <div className="flex-col mt-10">
            <p className="text-lg text-gray-500">Auditors</p>
            <div className="grid lg:grid-cols-4 gap-5">
              <img src={certora} />
              <img src={ackee} />
              <img src={chainsecurity} />
              <img src={hexens} />
              <img src={oxorio} />
              <img src={sigmaprime} />
              <img src={statemind} />
            </div>
          </div>
        </Box>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-5 w-3/4 mx-auto">
        <Box>
          <h3 className="text-3xl font-semibold mb-4">Open sourced</h3>
          <p className="mb-8">
            Allowing continuous peer reviews and enhancements from developers
            worldwide
          </p>
          <a
            className="border border-gray rounded-full px-6 py-3 hover:border-sky-500 hover:text-sky-500 hover:transition-all"
            href="https://github.com/lidofinance"
          >
            Github
          </a>
        </Box>
        <Box>
          <h3 className="text-3xl font-semibold mb-4">Decentralized</h3>
          <p className="mb-8">
            400+ Operators across the globe using the Lido Protocol to run
            validators
          </p>

          <a
            className="border border-gray rounded-full px-6 py-3 hover:border-sky-500 hover:text-sky-500 hover:transition-all"
            href="https://operatorportal.lido.fi/existing-operator-portal"
          >
            Node Operators
          </a>
        </Box>
      </div>
    </>
  );
}

export default Landing;
