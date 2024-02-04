import React from 'react'
import Image from "next/image";

function FromPdf() {
  return (
    <div className="w-[100%] flex justify-center items-center p-1 pt-5">
    <div className="w-[100%] max-w-[1350px]">
      <p className="text-2xl font-[600]">Convert From PDF</p>
      <div className="flex gap-4 pt-4 flex-wrap">
          {
              FromPDF?.map((item,i)=>{
                  return(
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
                        <p className="text-[rgba(60,60,67,0.6)] text-[14px] h-[60px] overflow-hidden">
                          {item?.Desc}
                        </p>
                      </div>
                    </div>
                  )
              })
          }
   
      </div>
    </div>
  </div>
  )
}

export default FromPdf;
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