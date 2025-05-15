import { useState } from "react";

interface RenderSliderProps {
  title: string;
  data: string[];
}

function RenderSlider({ title, data }: RenderSliderProps) {
  const [isOnClick, setIsOnClick] = useState(false);

  const displayData = isOnClick ? data : data.slice(0, 7);
  return (
    <div className="flex flex-col w-[250px]">
      <div className="text-white text-left">{title}</div>
      <div className="flex flex-col mt-3 gap-2 text-[12px]
      ">
        {displayData.map((data, key) => (
          <a>
            <span className=" text-gray-300 hover:text-white cursor-pointer" key={key}>{data}</span>
          </a> 
        ))}
      </div>
      <button className="w-fit" onClick={()=>setIsOnClick(!isOnClick)}>
        <span className="text-custom_blue text-[12px]">
            {!isOnClick?"เพิ่มเติม...":"ย่อการแสดงผล..."}
        </span>
    
      </button>
    </div>
  );
}

export default RenderSlider;
