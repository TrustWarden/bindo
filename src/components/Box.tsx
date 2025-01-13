import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Box({ children }: Props) {
  return (
    <div className="w-full p-9 border border-gray rounded-xl bg-white shadow-md mb-10">
      {children}
    </div>
  );
}

export default Box;
