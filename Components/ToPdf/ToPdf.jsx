import React from 'react'
import Image from "next/image";

function ToPdf() {
  return (
    <div className="w-[100%] flex justify-center items-center p-1 pt-5">
    <div className="w-[100%] max-w-[1350px]">
      <p className="text-2xl font-[600]">Convert to PDF</p>
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
                        <p className="text-[rgba(60,60,67,0.6)] text-[14px]">
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

export default ToPdf;
const FromPDF = [
    {
      imgsrc: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
      name: "Word to PDF",
      Desc: "The best Word to PDF converter online.",
    },
    {
      imgsrc: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
      name: "PPT to PDF",
      Desc: "Convert Powerpoint to PDF online.",
    },
    {
      imgsrc: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
      name: "Excel to PDF",
      Desc: "Easily Convert Excel spreadsheet to PDF.",
    },
    {
      imgsrc: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
      name: "JPG to PDF",
      Desc: "Convert JPG, PNG, BMP, GIF and TIFF images to PDF.",
    },
    {
        imgsrc: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
        name: "TXT to PDF",
        Desc: "Convert TXT to PDF online for free.",
      },
  ];