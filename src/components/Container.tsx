import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return <div className="flex flex-col">{children}</div>;
}

export default Container;
