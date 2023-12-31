import React from "react";

import {
  Facebook,
  Instagram,
  FuotaNameLogo,
  Twitter,
} from "../../constants/Icons";
function Footer() {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-4 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-2 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start pt-10 lg:pt-0 px-10 lg:px-0">
          <FuotaNameLogo />
          <p className="mb-4 ml-3 mt-5 w-full">
            <strong className="font-medium">Fuota.IO</strong> is a service that
            has unique features for users and maintain highest possible security
            for their data.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2 ml-3">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram />
            </div>
          </div>
          <p className="text-gray-400 ml-3">
            ©{new Date().getFullYear()} - Fuota.IO
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col ml-3 lg:ml-0">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-[#0a56d0] cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-[#0a56d0] cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-[#0a56d0] cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col ml-3 lg:ml-0">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-[#0a56d0] cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-[#0a56d0] cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-[#0a56d0] cursor-pointer transition-all">
              <a href="https://fuota.io/privacy-policy" target="_blank">
                Privacy Policy{" "}
              </a>
            </li>
            <li className="my-2 hover:text-[#0a56d0] cursor-pointer transition-all">
              <a href="https://fuota.io/term-condition" target="_blank">
                Terms of Service{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
