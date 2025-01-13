import { ReactNode, useState } from "react";
import BoxStake from "./BoxStakePage";
import { FaAngleDown } from "react-icons/fa6";

interface Props {
  children: ReactNode;
  title: string;
}

function DisclosureBox({ children, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BoxStake className="-space-y-1">
      {/* Disclosure header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center focus:outline-none"
      >
        <span className="text-sm font-semibold">{title}</span>
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
        <p className="mt-6 text-xs font-light">{children}</p>
      </div>
    </BoxStake>
  );
}

export default DisclosureBox;
