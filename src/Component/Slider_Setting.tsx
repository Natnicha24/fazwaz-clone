import { useState } from "react";

interface SliderSettingProps {
  data: {
    title: string;
    items: Record<
      string,
      { full: string; short: string } | { name: string; currency: string }
    >; // ข้อมูลภาษา หรือ สกุลเงิน
  };
  Current: string;
  setCurrent: (item: string) => void;
}
function Slider_Setting({ data, Current, setCurrent }: SliderSettingProps) {
  const [isButtonClick, setIsButtonClick] = useState(false);

  return (
    <>
      <button
        className="flex items-center w-full h-fit px-4 py-2"
        onClick={() => setIsButtonClick(!isButtonClick)}
      >
        {data.title === "language" ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="size-5 group-hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <div className="flex items-center w-full whitespace-nowrap m-0 pb-0.5 text-center text-[13px] font-bold">
              <span className="ml-1 leading-none">ภาษา</span>
              <span className="ml-auto">{Current.split(" - ")[1]}</span>
            </div>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
            <div className="flex items-center w-full whitespace-nowrap m-0 pb-0.5 text-center text-[13px] font-bold">
              <span className="ml-1 leading-none">สกุลเงิน</span>
              <span className="ml-auto">{Current.split(" - ")[0]}</span>
            </div>
          </>
        )}
      </button>

      <div
        className={`
        flex-col w-full transition-transform duration-300 text-[13px]
        ${isButtonClick ? "h-fit flex" : "h-0 hidden"} `}
      >
        {Object.entries(data.items).map(([key, item]) => {
          const label = "full" in item ? item.full : item.name;
          const isActive =
            Current ===
            `${"short" in item ? `${label} - ${item.short}` : item.currency}`;
          return (
            <button
              key={key}
              className={`${isActive?"bg-custom_blue text-white font-bold ":"bg-white hover:bg-gray-100"}
              flex justify-between px-4 py-2 `}
            onClick={()=>setCurrent(`${"short" in item ? `${label} - ${item.short}` : item.currency}`)}
            >
              <div>{label}</div>
              <div className="text-left">
                {"short" in item ? item.short:item.currency}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
export default Slider_Setting;

// {Object.entries(data.items).map(([key, item]) => {
//   const label = "full" in item ? item.full : item.name;
//   const isActive = Current === `${label} - ${"short" in item ? item.short : item.currency}`;

//   return (
//     <button
//       key={key}
//       onClick={() => setCurrent(`${label} - ${"short" in item ? item.short : item.currency}`)}
//       className={`flex justify-between px-4 py-2 hover:bg-gray-100 ${
//         isActive ? "bg-blue-500 text-white" : ""
//       }`}
//     >
//       <div>{label}</div>
//       <div className="text-left">
//         {"short" in item ? item.short : item.currency}
//       </div>
//     </button>
//   );
// })}
