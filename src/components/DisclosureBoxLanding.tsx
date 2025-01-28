import { ReactNode, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import BoxDisclosureLanding from "./BoxDisclosureLanding";

interface Props {
  children: ReactNode;
  title: string;
}

function DisclosureBoxLanding({ children, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BoxDisclosureLanding className="mb-10 border border-gray-200">
      {/* Disclosure header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center focus:outline-none"
      >
        <span className="text-lg font-semibold">{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <FaAngleDown />
        </span>
      </button>

      {/* Disclosure content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="mt-6 text-md font-light">{children}</p>
      </div>
    </BoxDisclosureLanding>
  );
}

export default DisclosureBoxLanding;
