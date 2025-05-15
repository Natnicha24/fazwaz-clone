import { useState } from "react";

function Banner() {
  const [selectedButton, setSelectedButton] = useState<"buy" | "rent" | "sell">(
    "buy"
  );

  const handleButtonClick = (button_name: "buy" | "rent" | "sell") => {
    setSelectedButton(button_name);
  };

  return (
    <div className="w-[100%] px-[15px] rounded-lg overflow-hidden z-0">
      <div className="relative w-[100%] bg-cover bg-center bg-[url(https://cdn.fazwaz.com/nw/1fxL_7zqJt29k3DlA1bmfnKYpO4/3800x960/site-config/96/home-slide-compress.jpeg)] h-[492px] rounded-lg">
        <div className="absolute w-full max-w-[758px] flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-white w-[100%] text-center mb-[35px]"> {/*text*/ }
            <h1 className="text-[36px] font-bold text-wrap px-5">
              ซื้อ ขาย ให้เช่า บ้านและคอนโด
            </h1>
            <h3 className="text-[18px] font-bold px-5
            sm:px-0">
              ประกาศซื้อขาย บ้านใหม่ บ้านมือสอง คอนโด ที่ดิน ทั้งแบบเป็น โครงการ
              และ เจ้าของขายเอง
            </h3>
          </div>
          <div className="bg-black bg-opacity-30 w-fit h-[41px] rounded-lg mb-3">
            <button
              onClick={() => handleButtonClick("buy")}
              className={`${
                selectedButton === "buy"
                  ? "bg-white text-custom_blue"
                  : "text-white bg-none"
              } py-2 px-6 rounded-lg text-[18px] font-bold transform duration-200
                hover:bg-white hover:text-custom_blue`}
            >
              ซื้อ
            </button>

            <button
              onClick={() => handleButtonClick("rent")}
              className={`${
                selectedButton === "rent"
                  ? "bg-white text-custom_blue"
                  : "text-white bg-none"
              } py-2 px-6 rounded-lg text-[18px] font-bold transform duration-200
                hover:bg-white hover:text-custom_blue`}
            >
              เช่า
            </button>

            <button
              onClick={() => handleButtonClick("sell")}
              className={`${
                selectedButton === "sell"
                  ? "bg-white text-custom_blue"
                  : "text-white bg-none"
              } py-2 px-6 rounded-lg text-[18px] font-bold transform duration-200
                hover:bg-white hover:text-custom_blue`}
            >
              ขาย
            </button>
          </div>
          <div className="w-[100%] px-3 rounded-lg
          sm:px-20">
            <form action="" className="relative">
              <input
                type="text"
                placeholder="ค้นหาด้วย ชื่อโครงการ, ทำเล, หรือสถานีรถไฟฟ้า"
                maxLength={50}
                className="bg-white w-[100%] h-[21px] py-7 px-4 rounded-lg
                 outline-none truncate"
              />
              <button className="bg-custom_blue absolute h-full px-4 right-0 rounded-e-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="white"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
