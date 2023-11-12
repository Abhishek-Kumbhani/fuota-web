import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Multiple LNS Support",
  "Manage all previous firmware on the portal",
  "Manage gateways",
  "Bulk device registration on the portal as well as on selected LNS",
  "Continue where you left off while creating the fuota session.",
  "Manage your team on fuota.io",
  "Get the report of each session's details and logs. ",
  "Email & In Portal notification for every fuota-session's status",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/extra_features.svg"
              alt="extra_features"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center ml-auto w-full lg:w-11/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black">
              What FUOTA.IO brings to you
            </h3>
            <p className="my-2 text-black self-start font-normal">
              Other than the highlighted features, FUOTA.IO also brings
            </p>
            <ul className="text-black-500 self-start list-inside pt-1">
              {features.map((feature, index) => (
                <motion.li
                  className="hover:font-medium pt-2"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
