import React from "react";

interface Props {
  children: React.ReactNode;
  url?: string;
  addClass?: string;
}

const ButtonPrimary = ({ children, addClass, url }: Props) => {
  return (
    <button
      onClick={() => {
        url && window.open(url);
      }}
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-[#0a56d0] hover:shadow-red-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
