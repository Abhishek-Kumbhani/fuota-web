import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowBack, ArrowNext, Stars } from "../constants/Icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const listTestimoni = [
  {
    name: "Emily Johnson",
    image: "/assets/people-2.png",
    city: "Toronto",
    country: "Canada",
    rating: "5",
    testimoni:
      "Wow... I am very happy to share this about fuota.io, it turned out to be more than my expectations and so far there have been no problems. fuota.io always the best",
  },
  {
    name: "Aarav Patel",
    image: "/assets/people-1.png",
    city: "Mumbai",
    country: "India",
    rating: "4.5",
    testimoni:
      "Fuota.io has really great feature and is really easy to use. I am very happy to share this about fuota.io, it turned out to be more than my expectations. fuota.io always the best",
  },
  {
    name: "Sofia Rodriguez",
    image: "/assets/people-3.png",
    city: "Buenos Aires",
    country: "Argentina",
    rating: "4",
    testimoni:
      "fuota.io had made my life easier. I can do update firmware of my devices with just a click without worrying about security concerns.",
  },
  {
    name: "Carlos Garcia",
    image: "/assets/people-1.png",
    city: "Madrid",
    country: "Spain",
    rating: "3.5",
    testimoni:
      "fuota.io's bpt tool is incredibly easy to use. It generates the secured binary files in a few clicks, still UI/UX have much room for improvement.",
  },
];
const Testimoni = () => {
  const settings = {
    dots: true,
    customPaging: function (i: any) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState<any>(null);

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full " id="testimoni">
          <div className="h-28" />
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <div>
                <Slider
                  {...settings}
                  arrows={false}
                  ref={setSliderRef}
                  className="flex items-stretch justify-items-stretch"
                >
                  {listTestimoni.map((listTestimonis, index) => (
                    <div className="px-3 flex items-stretch" key={index}>
                      <div className="border-2 border-gray-500 hover:border-[#0a56d0] transition-all rounded-lg p-8 flex flex-col h-[250px]">
                        <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                          <div className="flex order-2 xl:order-1">
                            <Image
                              src={listTestimonis.image}
                              height={50}
                              width={50}
                              alt="Icon People"
                            />
                            <div className="flex flex-col ml-5 text-left">
                              <p className="text-lg text-black-600 capitalize">
                                {listTestimonis.name}
                              </p>
                              <p className="text-sm text-black-500 capitalize">
                                {listTestimonis.city},{listTestimonis.country}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                            <p className="text-sm">{listTestimonis.rating}</p>
                            <span className="flex ml-4">
                              <Stars />
                            </span>
                          </div>
                        </div>
                        <p className="mt-5 text-left">
                          “{listTestimonis.testimoni}”.
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="flex w-full items-center justify-end">
                  <div className="flex flex-none justify-between w-auto mt-14">
                    <div
                      className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-[#0a56d0] border hover:bg-blue-100 hover:text-white-500 transition-all text-[#0a56d0] cursor-pointer"
                      onClick={sliderRef?.slickPrev}
                    >
                      <ArrowBack />
                    </div>
                    <div
                      className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-[#0a56d0] border hover:bg-blue-100 hover:text-white-500 transition-all text-[#0a56d0] cursor-pointer"
                      onClick={sliderRef?.slickNext}
                    >
                      <ArrowNext />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 px-6  w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
