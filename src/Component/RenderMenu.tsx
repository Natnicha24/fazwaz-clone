import RenderList from "./Renderlist";

interface RenderMenuProps {
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

function RenderMenu({ id, data }: RenderMenuProps) {
  return (
    <div
      id={id}
      className="h-full group bg-white hover:bg-custom_blue hover:text-white rounded-md p-2 text-center px-[10px] py-[12px]
        relative cursor-pointer"
    >
      <ul className="h-fit">
        <li className="flex items-center">
          <span className="text-[14px]">{data.title}</span>
          {data.title === "ร่วมงานกับเรา" ? (
            <span className="ml-1 bg-[#4CAF50] py-0.5 px-2 text-[11px] font-bold text-white rounded-xl">
              ตำแหน่งงานว่าง
            </span>
          ) : (
            <span className="none"></span>
          )}
        </li>
      </ul>
      <div className="absolute left-0 top-full h-4 w-full z-40"></div>
      {data.title !== "คำถามที่พบบ่อย" && (
        <ul
          className={
            "absolute left-0 top-10 mt-2 bg-white border rounded shadow-lg hidden group-hover:block text-black min-w-[150px] text-left"
          }
        >
          <RenderList id={data.title} data={data} />
        </ul>
      )}
    </div>
  );
}

export default RenderMenu;
