import { ReactNode } from "react";

interface Props {
  title: string;
  side: "left" | "right";
  children: string | ReactNode;
}

function ContactContent({ title, side, children }: Props) {
  const position = side === "left" ? "lg:justify-start" : "lg:justify-end";

  return (
    <div className={`lg:flex ${position} justify-center w-full space-y-8 p-10`}>
      <div className="bg-landing p-8 lg:w-2/5 border rounded-3xl shadow">
        <h3 className="text-lg lg:text-4xl mb-5">{title}</h3>
        <p className="text-gray-600 font-light lg:p-3">{children}</p>
      </div>
    </div>
  );
}

export default ContactContent;
