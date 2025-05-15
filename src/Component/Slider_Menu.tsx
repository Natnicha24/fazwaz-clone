import { useState } from "react";

interface SliderMenuProps {
  id: string;
  data: Data;
}

interface Data {
  title: string;
  data?: List[];
  other?: string[];
}

interface List {
  title: string;
  list?: string[];
}

function Slider_Menu({ id, data }: SliderMenuProps) {
  const [isButonClick, setIsButtonClick] = useState(false);

  return (
    <>
      {" "}
      <button
        className="flex justify-between items-center px-4 py-2" id={id}
        onClick={() => setIsButtonClick(!isButonClick)}
      >
        <div className="flex justify-start">
        <span className="text-[14px]">{data.title}</span>
        {data.title === "ร่วมงานกับเรา" && (
          <span className="ml-2 bg-[#4CAF50] py-0.5 px-2 text-[11px] font-bold text-white rounded-xl">
            ตำแหน่งงานว่าง
          </span>
        )}

        </div>
        {data.title !== "คำถามที่พบบ่อย" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="CurrentColor"
            className={`size-4 ${
              isButonClick ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>
      <div
        className={`${
          isButonClick ? "h-fit block" : "h-0 hidden"
        } text-[13px] transition-transform duration-300 `}
      >
        {data.data?.map((list, key) => (
          <div key={key} className={`pb-1`}>
            <div className="pt-1 pl-4">{list.title}</div>

            <ul className="list-disc list-inside">
              {list.list?.map((list, key) => (
                <li
                  key={key}
                  className="w-full py-1 hover:bg-gray-200 pl-8 cursor-pointer"
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {data.other?.map((other, key) => (
          <div
            key={key}
            className="px-4 py-1 w-full text-[13px] font-bold hover:bg-gray-200 cursor-pointer"
          >
            {other}
          </div>
        ))}
      </div>
    </>
  );
}

export default Slider_Menu;
