import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function BoxStakePage({ children, className }: Props) {
  return (
    <div
      className={`lg:w-3/4 mx-auto p-8 space-y-4 rounded-xl bg-gray-700 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}

export default BoxStakePage;
