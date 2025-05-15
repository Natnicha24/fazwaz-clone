import { useRef } from "react";
import { Slide_Button_Left, Slide_Button_Right } from "./Slide_Button";
import Card_News from "./Card_News";

interface Card_NewsList {
  title: string;
  sub_title: string;
  image_link: string;
  youtube_link: string;
}

interface Card_YoutubeList {
  title: string;
  sub_title: string;
  image_link: string;
  view: number;
  comment: number;
}

interface DataList {
  [key: string]: Card_NewsList | Card_YoutubeList;
}

interface CardNewsSessionProps {
  data: DataList;
}

function Card_News_Session({ data }: CardNewsSessionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 300;
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
        {Object.entries(data).map(([key, data]) => (
          <Card_News key={key} data={data} />
        ))}
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

export default Card_News_Session;
