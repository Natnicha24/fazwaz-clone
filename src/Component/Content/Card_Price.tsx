interface Card_PriceProps {
  project: Project;
}

interface Project {
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

function Card_Price({ project }: Card_PriceProps) {
  return (
    <a className="relative min-w-[267px] max-w-[267px] rounded-lg overflow-hidden cursor-pointer">
      <img
        src={project.image_link}
        alt={`${project.project_name}-image`}
        className="w-[100%] h-fit rounded-lg"
      />
      <div className="flex flex-col mt-1 gap-0">
        <div className="flex flex-row gap-1 items-center">
          <span className="text-custom_red text-[18px] font-semibold">
            ฿{project.price}
          </span>
          {project.old_price && (
            <span className="text-[13px] font-semibold text-gray-500">
              <del>฿{project.old_price}</del>
            </span>
          )}
        </div>

        <div className="flex flex-row gap-1 items-center">
          <img src="/icons/icon-bed.svg" alt="bed" />
          <span className="pl-1 pr-1 text-[13.5px] whitespace-nowrap">
            {project.bed}
          </span>
          <img src="/icons/icon-bath.svg" alt="bath" />
          <span className="pl-1 pr-1 text-[13.5px]">{project.bath}</span>
          <img src="/icons/icon-size.svg" alt="size" />
          <span className="pr-1 text-[13.5px] whitespace-nowrap">
            {project.area} ตรม.
          </span>
          <img src="/icons/icon-condos.svg" alt="condos" />
          <span className="pr-1 text-[13.5px] whitespace-nowrap">
            {project.type}
          </span>
        </div>
        <span className="text-gray-400 text-[13.5px]">
          {project.project_name}
        </span>
        <div className="flex">
          {project.tag.map((tag, key) => (
            <span key={key} className="text-[12px] text-gray-400">
              {" "}
              {tag}
              {key !== project.tag.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute right-2 top-2">
        <div className="flex flex-col gap-1">
            <img src="/icons/icon-favourite.svg" alt="icon-favourite" />
          <img src="/icons/icon-compare.svg" alt="icon-compare" />
        </div>
      </div>
      {project.benefit && (
        <div className="absolute top-2 left-2 py-0.5 px-1 rounded-md bg-custom_red text-[10px] font-semibold text-white">
          ผลการตอบแทนการเช่า {project.benefit}%
        </div>
      )}
    </a>
  );
}

export default Card_Price;
