import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
function SlickRightArrow2(props) {
  return (
    <>
      <div
        // className="slick-arrow slick-next"
        onClick={props?.onClick}
        style={{
          right: "-5px",
          zIndex: 1,
          position: "absolute",
          top: "50%",
          cursor: "pointer",
    
        }}
      >
        <div className="w-[30px] h-[30px] rounded-[50%] border-[2px] border-[#4b4b4b] flex justify-center items-center">
          <FaArrowRightLong style={{ fontSize: "16px" }} />
        </div>
      </div>
    </>
  );
}

export default SlickRightArrow2;
