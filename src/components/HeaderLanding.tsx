import { useState } from "react";
import logo from "../assets/ethereum-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function HeaderLanding() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDisclosure = () => {
    setIsDisclosureOpen(!isDisclosureOpen);
  };

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

        <div className="hidden md:flex space-x-16">
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
          <div className="relative" onMouseLeave={handleMouseLeave}>
            <a
              onMouseEnter={handleMouseEnter}
              href="/privacy"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Resources
            </a>
            {isDropdownOpen && (
              <div className="absolute top-6 left-0 p-4 bg-landing w-72 shadow-lg rounded-3xl">
                <ul>
                  <a href="/FAQ">
                    <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer rounded-full">
                      FAQs
                    </li>
                  </a>
                  <a href="contact">
                    <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer rounded-full">
                      Support
                    </li>
                  </a>
                  <a href="/privacy">
                    <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer rounded-full">
                      Privacy
                    </li>
                  </a>
                  <a href="/terms-of-use">
                    <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer rounded-full">
                      Terms of use
                    </li>
                  </a>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex space-x-5">
          <a
            href="/stake"
            className="bg-zinc-900 py-2 px-4 lg:py-3 lg:px-6 rounded-full text-neutral-50 font-bold hover:shadow-lg hover:scale-105 hover:transition-transform hover:bg-sky-500"
          >
            Stake ETH
          </a>

          {/* Burger Icon for Mobile */}
          <button
            className="block md:hidden focus:outline-none text-3xl"
            onClick={toggleSidebar}
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-gray-100 shadow-lg z-50">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="text-xl font-bold">Bindo</div>
              <button
                className="focus:outline-none text-black"
                onClick={toggleSidebar}
              >
                ✕
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              <a href="/stake">
                <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                  Stake
                </li>
              </a>
              <a href="/lend">
                <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                  Lend
                </li>
              </a>
              <a href="https://github.com/lidofinance">
                <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                  Github
                </li>
              </a>
              <a href="https://github.com/lidofinance/lido-ethereum-sdk">
                <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                  SDK
                </li>
              </a>
              {/* Disclosure Item */}
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-200 flex justify-between items-center"
                  onClick={toggleDisclosure}
                >
                  <span>Resources</span>
                  <span className="text-gray-600">
                    {isDisclosureOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {isDisclosureOpen && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <a href="/FAQ">
                      <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                        FAQs
                      </li>
                    </a>
                    <a href="/contact">
                      <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                        Support
                      </li>
                    </a>
                    <a href="/privacy">
                      <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                        Privacy
                      </li>
                    </a>
                    <a href="/terms-of-use">
                      <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                        Terms of use
                      </li>
                    </a>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}

        {/* Backdrop */}
        {isSidebarOpen && (
          <div
            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </nav>
    </header>
  );
}

export default HeaderLanding;
