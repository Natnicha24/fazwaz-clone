import { useEffect } from "react";
import { language_list2 } from "../data/Language_List";
import currencies_list from "../data/Currency_List";
import {
  all_project_list,
  buy_list,
  freq_question,
  rent_list,
  sell_list,
  service_list,
  work_list,
} from "../data/Nav_List";
import Slider_Menu from "../Component/Slider_Menu";
import Slider_Setting from "../Component/Slider_Setting";
import { useSetting } from "../Context/context";

interface SiderProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sider({ isOpen, onClose }: SiderProps) {
  const menu = [
    buy_list,
    rent_list,
    sell_list,
    all_project_list,
    freq_question,
    service_list,
    work_list,
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [isOpen]);

const {currentCurrency,setCurrentCurrency,currentLanguage,setCurrentLanguage}=useSetting();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-40 overflow-y-hidden"></div>
      )}
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-white z-50 transition-transform duration-300 overflow-y-auto scrollbar-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative w-full h-[110px] z-1 bg-[url(https://www.fazwaz.co.th/images/cover-menu.webp)] bg-cover bg-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://www.fazwaz.co.th/images/logo.svg"
              alt="fazwaz-logo"
              className=" filter brightness-0 invert h-[32px] ml-auto"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.9}
            stroke="white"
            className="size-9 absolute top-3 right-3 cursor-pointer"
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-row justify-between items-center text-white bg-custom_red py-4 px-4">
          <span className="text-[13px] leading-none font-bold">
            ลงประกาศฟรี
          </span>
          <span className="text-[15px] leading-none text-center font-extrabold">
            +
          </span>
        </div>
        <>
          <div className="px-4 py-2.5 border border-b-1 border-b-gray-300">
            <div className=" text-gray-600 text-[12px]">ข้อมูลผู้ใช้งาน</div>
            <button
              className="mt-2.5 h-[38px] border-2 border-custom_blue text-custom_blue px-4 rounded-md text-[13px] font-bold
        hover:bg-custom_blue hover:text-white"
            >
              สมัครสมาชิก / เข้าสู่ระบบ
            </button>
          </div>

          <div className=" py-2.5  border border-b-1 border-b-gray-300">
            <div className="px-4 text-gray-600 text-[12px]">การตั้งค่า</div>
            <div className="flex flex-col gap-0">
              <Slider_Setting Current={currentLanguage} setCurrent={setCurrentLanguage}
                data={{ title: "language", items: language_list2 }}
              />
              <Slider_Setting Current={currentCurrency} setCurrent={setCurrentCurrency}
                data={{ title: "currency", items: currencies_list }}
              />
            </div>
          </div>

          <div className="py-2.5">
            <div className="px-4 text-gray-600 text-[12px]">เมนู</div>
            <div className="mt-1 w-full flex flex-col">
              {menu.map((value, key) => (
                <Slider_Menu id={`${key}`} data={value} />
              ))}
              <div className="pt-1 pb-1 pl-4 cursor-pointer">ติดต่อเรา</div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Sider;
