import { useState } from "react";
import { FaBitcoin, FaChevronDown, FaEthereum } from "react-icons/fa";
import useWalletStore from "../data/walletStore";

interface Option {
  title: string;
  icon: JSX.Element;
}

function Dropdown() {
  const { setSelectedCoin } = useWalletStore();

  const options: Option[] = [
    { title: "ETH", icon: <FaEthereum /> },
    { title: "WBTC", icon: <FaBitcoin /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setSelectedCoin(option.title);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute inset-y-0 left-0 pl-2 text-2xl text-gray-400 items-center content-center"
      >
        {selectedOption ? (
          <div className="flex items-center">
            {selectedOption.icon}
            <FaChevronDown className="text-xs ml-1" />
          </div>
        ) : (
          ""
        )}
      </button>

      {isOpen ? (
        <div className="absolute mt-2 w-48 lg:w-auto bg-gray-800 rounded-lg z-10">
          {options.map((option) => (
            <button
              key={option.title}
              onClick={() => handleSelect(option)}
              className={`flex items-center w-full px-2 py-3 lg:py-2 space-x-1 text-gray-300 hover:bg-gray-600 hover:rounded-lg ${
                option.title === selectedOption?.title
                  ? "bg-gray-600 rounded-lg"
                  : ""
              }`}
            >
              <div>{option.icon}</div>
              <span>{option.title}</span>
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Dropdown;
