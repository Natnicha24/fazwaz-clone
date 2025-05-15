interface Card_TextProps {
  project_name: string;
  price: string;
  percent?: number;
  tag: string[];
  image_link: string;
}

function Card_Text({
  project_name,
  price,
  percent,
  tag,
  image_link,
}: Card_TextProps) {
  return (
    <a className="min-w-[267px] rounded-lg overflow-hidden cursor-pointer">
      <img
        src={image_link}
        alt={`${project_name}-image`}
        className="w-[100%] rounded-lg"
      />
      <div className="flex flex-col mt-1 gap-0">
        <span className="text-[16px] font-bold text-gray-600 mb-1">{project_name}</span>
        <span className="text-[14px] text-gray-500 font-semibold">ราคาเริ่มต้น {price}</span>
        {typeof percent === "number" ? (
          percent < 0 ? (
            <span className="text-[12px]">
              <span className="text-green-500 font-semibold mr-1">▼ {percent}%</span>
              ต่ำกว่าราคาตลาด
            </span>
          ) : (
            <span className="text-[12px] text-gray-500">
              <span className="text-red-500 font-semibold mr-1">▲ {percent}%</span>
              สูงกว่าราคาตลาด
            </span>
          )
        ) : null}
        <div className="flex flex-row">
          {tag.map((tag, key) => (
            <span className="text-[12px] text-gray-500" key={key}>
              {tag}
              {key !== tag.length - 1 && ","}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default Card_Text;
