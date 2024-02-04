import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
function SlickLeftArrow2(props) {
  return (
    <>
      <div
        // className="slick-arrow slick-prev"
        onClick={props?.onClick}
        style={{
          left: "-10px",
          top: "50%",
          zIndex: 1,
          position: "absolute",
          cursor: "pointer",
        }}
      >
        <div className="w-[30px] h-[30px] rounded-[50%] border-[2px] border-[#4b4b4b] flex justify-center items-center">
          <FaArrowLeftLong style={{ fontSize: "16px" }} />
        </div>
      </div>
    </>
  );
}

export default SlickLeftArrow2;
