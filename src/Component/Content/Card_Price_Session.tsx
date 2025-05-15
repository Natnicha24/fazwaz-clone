import { useRef } from "react";
import Card_Price from "./Card_Price";
import { Slide_Button_Left, Slide_Button_Right } from "./Slide_Button";

interface ProjectProps {
  project_name: string;
  image_link: string;
  price: string;
  old_price?: string;
  bed: number | string;
  bath: number;
  area: number;
  type: string;
  benefit?: number;
  tag: string[];
}

interface ProjectList {
  [key: string]: ProjectProps;
}

interface CardPriceSessionProps {
  project: ProjectList;
}

function Card_Price_Session({ project }: CardPriceSessionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmonut = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmonut : scrollAmonut,
      });
    }
  };
  return (
    <>
      <div
        ref={scrollRef}
        className="flex pl-[35px] flex-nowrap gap-4 max-w-full overflow-x-auto scrollbar-hide scroll-smooth pr-7"
      >
        {Object.entries(project).map(([key, project]) => (
          <Card_Price key={key} project={project} />
        ))}
      </div>
      <div onClick={() => scroll("left")} className="hidden md:block">
        <Slide_Button_Left />
      </div>

      <div onClick={() => scroll("right")} className="hidden md:block">
        <Slide_Button_Right />
      </div>
    </>
  );
}

export default Card_Price_Session;
