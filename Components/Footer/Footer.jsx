import Image from "next/image";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";

function Footer() {
  return (
    <div className="flex justify-center w-[100%] bg-[#f1f3f4]">
      <div className="w-[100%] max-w-[1470px] p-1 py-7">
        <div className="flex gap-6 items-center">
          <p className="font-[700]">Follow us</p>
          <FaYoutube
            size={28}
            className="text-[#616161] hover:text-[#000000] cursor-pointer"
          />
          <FaTwitter
            size={28}
            className="text-[#616161] hover:text-[#000000] cursor-pointer"
          />
          <FaFacebookF
            size={28}
            className="text-[#616161] hover:text-[#000000] cursor-pointer"
          />
        </div>
        <hr class="border-t border-[#e6e6e6] mt-6 w-[100%] "></hr>
        <div className="pt-7 flex gap-2 flex-wrap justify-between">
          {LinksData?.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-3 w-[100%] max-w-[220px]"
              >
                <p className="font-[700] text-[1rem] pb-3">{item?.name}</p>
                {item?.links?.map((item2, ind) => {
                  return (
                    <p
                      key={ind}
                      className="text-[#4b4b4b] text-[15px] hover:text-[#000000] cursor-pointer"
                    >
                      {item2}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        <hr class="border-t border-[#e6e6e6] my-6 w-[100%] "></hr>
        <div className="flex gap-3 justify-between items-center p-2 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <div className='flex items-center gap-1'>
              <div className='w-[30px] h-[30px] bg-slate-500 flex justify-center items-center rounded-[6px] cursor-pointer'>
                <IoMdSettings size={22} className='text-[#fff]' />
              </div>
              <p className='font-bold'>ZinTools</p>
            </div>

            <div className="flex gap-5 items-center flex-wrap">
              <p className="text-[#4b4b4b] text-[15px] hover:text-[#000000] hover:underline cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-[#4b4b4b] text-[15px] hover:text-[#000000] hover:underline cursor-pointer">
                Terms and conditions
              </p>
              <p className="text-[#4b4b4b] text-[15px] hover:text-[#000000] hover:underline cursor-pointer">
                Cookies Policy
              </p>
              <p className="text-[#4b4b4b] text-[15px] hover:text-[#000000] hover:underline cursor-pointer">
                About us
              </p>
              <p className="text-[#4b4b4b] text-[15px] hover:text-[#000000] hover:underline cursor-pointer">
                EULA
              </p>
              <p className="text-[#4b4b4b] text-[15px] hover:text-[#000000] hover:underline cursor-pointer">
                Contact
              </p>
            </div>
          </div>

          <div className="w-[50px] h-[50px] bg-[#dedede] flex justify-center items-center rounded-[50%] cursor-pointer">
            <FiMoon size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
const LinksData = [
  {
    name: "Internal Links",
    links: ["Documentaries", "Themes", "Chrome casts"],
  },
  {
    name: "Enterprise",
    links: [
      "Download Chrome Browser",
      "Chrome Browser for Enterprise",
      "Chrome Browser Devices",
      "ChromeOS",
      "Google Cloud",
      "Google Workspace",
    ],
  },
  {
    name: "Internal Links",
    links: ["Documentaries", "Themes", "Chrome casts"],
  },
  {
    name: "Enterprise",
    links: [
      "Download Chrome Browser",
      "Chrome Browser for Enterprise",
      "Chrome Browser Devices",
      "ChromeOS",
      "Google Cloud",
      "Google Workspace",
    ],
  },
  {
    name: "Internal Links",
    links: ["Documentaries", "Themes", "Chrome casts"],
  },
];
