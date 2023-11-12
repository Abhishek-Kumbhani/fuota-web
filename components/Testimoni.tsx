import React, { useState } from "react";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowBack, ArrowNext, Stars } from "../constants/Icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimoni = ({
  listTestimoni = [
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
  ],
}) => {
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

  return (
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
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
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
  );
};

export default Testimoni;
