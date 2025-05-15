interface Card_FlexProps {
  data: Card_FlexList[];
}

interface Card_FlexList {
  title: string;
  house?: string;
  image_link?: string;
}

function Card_Flex({ data }: Card_FlexProps) {
  return (
    <div className="grid grid-cols-[267px_267px_267px] h-full grid-rows-2 w-fit gap-5">
      <div className="relative min-h-[338px] min-w-[267px] max-w-[267px] rounded-lg col-span-1 row-span-2 overflow-hidden cursor-pointer">
        <img
          src={data[0].image_link}
          alt={`${data[0].title}-image`}
          className="h-full w-full"
        />
        <div className="absolute bottom-0 pb-8 bg-gradient-to-t from-black to-transparent h-1/2 w-full"></div>
        <div className="absolute bottom-0 text-white w-full">
          <div className="flex flex-col justify-center items-center pb-5">
            <span className="text-[16px]">ค้นหาบ้านและคอนโด</span>
            <span className="text-[20px] font-bold">{data[0].title}</span>
          </div>
        </div>
      </div>
      <div className="relative w-full col-span-1 row-span-1 col-start-2 row-start-1 min-w-[267px] max-w-[267px] rounded-lg overflow-hidden">
        <img src={data[1].image_link} alt={`${data[1].title}-image`} />
        <div className="absolute bottom-0 pb-8 bg-gradient-to-t from-black to-transparent h-1/3 w-full"></div>
        <div className="absolute bottom-0 text-white w-full">
          <div className="flex flex-col justify-start items-start pl-5 pb-5">
            <span className="text-[16px] font-bold">{data[1].title}</span>
            <span className="text-[13px]">บ้าน {data[1].house} หลัง</span>
          </div>
        </div>
      </div>

      <div className="relative w-full col-span-1 row-span-1 col-start-3 row-start-1 min-w-[267px] max-w-[267px] rounded-lg overflow-hidden">
        <img src={data[2].image_link} alt={`${data[2].title}-image`} />
        <div className="absolute bottom-0 pb-8 bg-gradient-to-t from-black to-transparent h-1/3 w-full"></div>
        <div className="absolute bottom-0 text-white w-full">
          <div className="flex flex-col justify-start items-start pl-5 pb-5">
            <span className="text-[16px] font-bold">{data[2].title}</span>
            <span className="text-[13px]">บ้าน {data[2].house} หลัง</span>
          </div>
        </div>
      </div>

      <div className="relative w-full col-span-1 row-span-1 col-start-2 row-start-2 min-w-[267px] max-w-[267px] rounded-lg overflow-hidden">
        <img src={data[3].image_link} alt={`${data[3].title}-image`} />
        <div className="absolute bottom-0 pb-8 bg-gradient-to-t from-black to-transparent h-1/3 w-full"></div>
        <div className="absolute bottom-0 text-white w-full">
          <div className="flex flex-col justify-start items-start pl-5 pb-5">
            <span className="text-[16px] font-bold">{data[3].title}</span>
            <span className="text-[13px]">บ้าน {data[3].house} หลัง</span>
          </div>
        </div>
      </div>

        <div className="relative w-full col-span-1 row-span-1 col-start-3 row-start-2 min-w-[267px] max-w-[267px] rounded-lg overflow-hidden">
        <img src={data[4].image_link} alt={`${data[4].title}-image`} />
        <div className="absolute bottom-0 pb-8 bg-gradient-to-t from-black to-transparent h-1/3 w-full"></div>
        <div className="absolute bottom-0 text-white w-full">
          <div className="flex flex-col justify-start items-start pl-5 pb-5">
            <span className="text-[16px] font-bold">{data[4].title}</span>
            <span className="text-[13px]">บ้าน {data[4].house} หลัง</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_Flex;
