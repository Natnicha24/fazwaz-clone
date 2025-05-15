import Card_Text from "./Card_Text";
import { useRef } from "react";
import { Slide_Button_Left, Slide_Button_Right } from "./Slide_Button";

interface ProjectProps {
  project_name: string;
  price: string;
  percent?: number;
  tag: string[];
  image_link: string;
}

interface ProjectList {
  [key: string]: ProjectProps;
}

interface CardTextSessionProps {
  project: ProjectList;
}

function Card_Text_Session({ project }: CardTextSessionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmonut = 300;
      scrollRef.current?.scrollBy({
        left: direction === "left" ? -scrollAmonut : scrollAmonut,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex pl-[35px]  flex-nowrap gap-4 max-w-full overflow-x-auto scrollbar-hide scroll-smooth pr-7"
      >
        {Object.entries(project).map(([key, project]) => (
          <Card_Text
            key={key}
            project_name={project.project_name}
            price={project.price}
            tag={project.tag}
            image_link={project.image_link}
            {...("percent" in project ? { percent: project.percent } : {})}
          />
        ))}
      </div>
      <div onClick={() => scroll("left")} className="hidden md:block">
        <Slide_Button_Left />
      </div>

      {/* ปุ่มขวา */}
      <div onClick={() => scroll("right")} className="hidden md:block">
        <Slide_Button_Right />
      </div>
    </>
  );
}

export default Card_Text_Session;
