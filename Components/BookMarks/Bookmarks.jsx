import Image from "next/image";
import React from "react";

function Bookmarks() {
  return (
    <div className="w-[100%] flex justify-center items-center p-1 pt-5">
      <div className="w-[100%] max-w-[1350px]">
        <p className="text-2xl font-[600]">Your Bookmarks</p>
        <div className="flex gap-4 pt-4 flex-wrap">
            {
                BookMark?.map((item,i)=>{
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
  );
}

export default Bookmarks;
const BookMark = [
  {
    imgsrc: "https://images.hipdf.com/images2022/icons/editPDF.svg",
    name: "Edit PDF",
    Desc: " Use the best online tool to edit PDFs in your browser.",
  },
  {
    imgsrc: "https://images.hipdf.com/images2022/icons/Crop-PDF.svg",
    name: "Crop PDF",
    Desc: "Crop PDF online to a selected area, adjust margin size swiftly.",
  },
  {
    imgsrc: "https://images.hipdf.com/images2022/icons/replace-text-pdf.svg",
    name: "Replace Text",
    Desc: "The easiest way to replace text online.",
  },
  {
    imgsrc: "https://images.hipdf.com/images2022/icons/Rotate-PDF.svg",
    name: "Rotate PDF",
    Desc: "Rotate and save your PDF pages online for free.",
  },
];
