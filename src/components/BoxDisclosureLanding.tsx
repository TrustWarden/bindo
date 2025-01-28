import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function BoxStakePageLanding({ children, className }: Props) {
  return (
    <div
      className={`w-full lg:w-3/4 mx-auto p-16 rounded-3xl bg-white ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}

export default BoxStakePageLanding;
