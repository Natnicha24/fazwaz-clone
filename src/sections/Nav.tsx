import {
  all_project_list,
  buy_list,
  freq_question,
  rent_list,
  sell_list,
  service_list,
  work_list,
} from "../data/Nav_List";
import { useState } from "react";
import Sider from "./Sider";
import RenderMenu from "../Component/RenderMenu";
import RenderCurrencyButton from "../Component/RenderCurrencyButton";
import RenderLanguageButton from "../Component/RenderLanguageButton";
import { useSetting } from "../Context/context";

function Nav() {
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const menu = [
    buy_list,
    rent_list,
    sell_list,
    all_project_list,
    freq_question,
    service_list,
    work_list,
  ];
const {currentCurrency,setCurrentCurrency,currentLanguage,setCurrentLanguage}=useSetting();
  return (
    <div className="fixed top-0 w-full h-[60px] bg-white flex flex-row flex-wrap items-center">
      <div className="w-fit h-[100%] mx-[10px]">
        {/*logo*/}
        <a href="" className="w-fit h-[100%] flex justify-center items-center">
          <img
            src="https://www.fazwaz.co.th/images/logo.svg"
            alt="fazwz-logo"
            className="h-[46.7%]"
          />
        </a>
      </div>

      <div
        className="w-fit h-[100%] hidden flex-row items-center py-[10px]
      sm:hidden
      custom_810_bp:flex"
      >
        {/*menu*/}
        {menu.map((value, key) => (
          <RenderMenu key={key} id={`${key}`} data={value} />
        ))}
      </div>

      <div
        className="h-[100%] ml-auto hidden flex-row items-center py-[10px] gap-[8px]
      sm:hidden
      md:hidden
      lg:hidden
      custom_1308_bp:flex
      "
      >
        {/* สกุลเงิน language */}
        <RenderCurrencyButton currentCurrency={currentCurrency} setCurrentCurrency={setCurrentCurrency} />
        <RenderLanguageButton currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />

        <button
          className="border-2 border-custom_blue text-custom_blue h-full px-3 rounded-md text-[13px] font-bold
        hover:bg-custom_blue hover:text-white"
        >
          สมัครสมาชิก / เข้าสู่ระบบ
        </button>
        <button
          className="border-2 border-custom_red text-custom_red h-full px-3 rounded-md text-[13px] font-bold
        hover:bg-custom_red hover:text-white"
        >
          ลงประกาศฟรี
        </button>
      </div>
      <div
        className="cursor-pointer ml-auto
        sm:ml-auto
        custom_1308_bp:ml-0"
        onClick={() => {
          setIsSiderOpen(!isSiderOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#006CE3"
          className="size-6 w-10 mr-[10px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <Sider isOpen={isSiderOpen} onClose={() => setIsSiderOpen(false)} />
    </div>
  );
}

export default Nav;
