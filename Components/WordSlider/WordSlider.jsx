"use client";

import React from "react";
// import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickLeftArrow2 from "../Arrows/SlickLeftArrow2";
import SlickRightArrow2 from "../Arrows/SlickRightArrow2";
import Image from "next/image";

function WordSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SlickLeftArrow2 />,
    nextArrow: <SlickRightArrow2 />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

    
  };
  return (
    <>
      <div className="flex justify-center w-[100%] ">
        <div className="w-[100%] max-w-[1350px] p-1 py-7">
          <div className="flex justify-between">
            <p className="text-2xl font-[600]">Convert From PDF</p>
            <div className="w-[66px] h-[30px] bg-[#dedede] flex justify-center items-center rounded-[50px] cursor-pointer">
              <p className="flex items-center gap-1 text-[12px] font-[600]">ALL <FaAngleRight /> </p>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Slider style={{ padding: "30px 10px 10px 10px" }} {...settings}>
              {
                FromPDF?.map((item, i) => {
                  return (
                    <div key={i} className="border w-[100%] max-w-[255px] border-[#EBEBEB] p-2 py-3 rounded-[12px] hover:shadow-custom cursor-pointer">
                      <div className="w-[65px]">
                        <Image
                          alt="Image"
                          src={item?.imgsrc}
                          width={1000}
                          height={1000}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="p-1 px-3">
                        <p className="text-xl font-bold">{item?.name}</p>
                        <p className="text-[rgba(60,60,67,0.6)] text-[14px] h-[60px] overflow-hidden ">
                          {item?.Desc}
                        </p>
                      </div>
                    </div>
                  )
                })
              }

            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default WordSlider;
const FromPDF = [
  {
    imgsrc: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
    name: "PDF to Word",
    Desc: "Easily convert PDF to Word document.",
  },
  {
    imgsrc: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
    name: "PDF to PPT",
    Desc: "Convert PDF to Powerpoint online.",
  },
  {
    imgsrc: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
    name: "PDF to Excel",
    Desc: "Convert PDF to xls for free.",
  },
  {
    imgsrc: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
    name: "PDF to JPG",
    Desc: "Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF images.",
  },
  {
    imgsrc: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
    name: "PDF to TXT",
    Desc: "Convert your PDF to TXT, and extract text from your PDF.",
  },
];
