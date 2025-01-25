import { useState } from "react";
import { VscDebugDisconnect } from "react-icons/vsc";
import useWallet from "../hooks/useWallet";

function DisconnectDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleDisconnect, address, isConnected, shortAddress } = useWallet();

  return (
    <>
      {isConnected && address && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-sky-500 py-2 px-4 lg:py-2 lg:px-4 min-h-10 rounded-lg text-neutral-50 font-bold hover:bg-sky-600"
        >
          {shortAddress}
        </button>
      )}

      {isOpen && (
        <div className="absolute flex top-16 right-2 lg:right-24 w-48 lg:w-auto bg-gray-800 rounded-lg z-10">
          <button
            onClick={handleDisconnect}
            className="flex items-center justify-center w-full px-2 py-3 lg:py-2 space-x-1 text-gray-300 hover:bg-gray-600 hover:rounded-lg"
          >
            <div>Disconnect</div>
            <span>
              <VscDebugDisconnect />
            </span>
          </button>
        </div>
      )}
    </>
  );
}

export default DisconnectDropdown;
