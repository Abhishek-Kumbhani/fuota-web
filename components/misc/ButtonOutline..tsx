import React from "react";

interface Props {
  children: React.ReactNode;
  url?: string;
}

const ButtonOutline = ({ children, url }: Props) => {
  return (
    <button
      onClick={() => {
        url && window.open(url, "_blank");
      }}
      className="font-medium tracking-wide py-1.5 px-3 sm:px-5 border border-[#0a56d0] text-white bg-white-500 outline-none rounded-l-full rounded-r-full capitalize bg-[#0a56d0] hover:text-white-500 transition-all"
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
