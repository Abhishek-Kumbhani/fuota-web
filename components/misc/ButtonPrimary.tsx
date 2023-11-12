import React from "react";

const ButtonPrimary = ({ children, addClass, url }: any) => {
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
