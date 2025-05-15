import { useRef } from "react";
import { Slide_Button_Left, Slide_Button_Right } from "./Slide_Button";
import Card_Flex from "./Card_Flex";

interface Card_Flex_SessionProps {
 area: {
    area1: Data[];
    area2: Data[];
    area3: Data[];
    area4: Data[];
    area5: Data[];
    area6: Data[];
  };
}

interface Data {
  title: string;
  house?: string;
  image_link?: string;
}

function Card_Flex_Session({ area }: Card_Flex_SessionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 500;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
      });
    }
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex pl-[35px] flex-nowrap gap-4 max-w-full overflow-x-auto scrollbar-hide scroll-smooth pr-7"
      >
        
        <Card_Flex data={area.area1} />
        <Card_Flex data={area.area2} />
        <Card_Flex data={area.area3} />
        <Card_Flex data={area.area4} />
        <Card_Flex data={area.area5} />
        <Card_Flex data={area.area6} />

        <div onClick={() => scroll("left")} className="hidden md:block">
          <Slide_Button_Left />
        </div>

        <div onClick={() => scroll("right")} className="hidden md:block">
          <Slide_Button_Right />
        </div>
      </div>
    </>
  );
}

export default Card_Flex_Session;
