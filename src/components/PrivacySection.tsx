import { ReactNode } from "react";

interface Props {
  header: string;
  children: ReactNode;
}

function PrivacySection({ header, children }: Props) {
  return (
    <div className="p-8 lg:p-52 mx-auto border-b border-gray-300">
      <h2 className="text-3xl mb-8">{header}</h2>
      <div>{children}</div>
    </div>
  );
}

export default PrivacySection;
