import RenderSlider from "../Component/Bottom/RenderSlider";
import {
  province,
  rent_popular,
  sell_popular,
  serch_popular,
} from "../data/Bottom/bottom";

function Bottom() {
  return (
    <div>
      <div className="bg-[#474E52] h-fit py-8 px-[32px] border-b-[1px] border-gray-500">
        <div className="flex flex-row flex-wrap w-full gap-10">
          <RenderSlider title="บ้านและคอนโดทั่วไทย" data={province} />
          <RenderSlider title="คำค้นหายอดนิยม" data={serch_popular} />
          <RenderSlider title="ประกาศขายยอดนิยม" data={sell_popular} />
          <RenderSlider title="ประกาศให้เช่ายอดนิยม" data={rent_popular} />
        </div>
      </div>
      <div className="bg-[#474E52] h-fit py-4 px-[32px] border-b-[1px] border-gray-500">
        <div className="text-gray-300 flex flex-row flex-wrap gap-5 text-[13px]">
          <div className="cursor-default">Fazwaz group Sites</div>
          <div className="flex flex-row flex-wrap gap-2">
            <a className="hover:text-white cursor-pointer">www.fazwaz.cn</a>
            <a className="hover:text-white cursor-pointer">www.fazwaz.ru</a>
            <a className="hover:text-white cursor-pointer">www.fazwaz.fr</a>
            <a className="hover:text-white cursor-pointer">www.fazwaz.de</a>
            <a className="hover:text-white cursor-pointer">www.fazwaz.es</a>
            <a className="hover:text-white cursor-pointer">www.fazwaz.jp</a>
            <a className="hover:text-white cursor-pointer">www.fazwaz.kr</a>
          </div>
        </div>
      </div>
      <div className="bg-[#474E52] h-fit pt-4 px-[32px] border-b-[1px] border-gray-500">
        <div className="text-gray-300 flex flex-row flex-wrap justify-between gap-5 text-[13px]">
          <div className="flex flex-row flex-wrap gap-3">
            <a className="hover:text-white cursor-pointer">นโยบาย</a>
            <a className="hover:text-white cursor-pointer">Terms</a>
            <a className="hover:text-white cursor-pointer">Cookies</a>
            <a className="hover:text-white cursor-pointer">ติดต่อเรา</a>
            <a className="hover:text-white cursor-pointer">สื่อพูดถึงเรา</a>
            <a className="hover:text-white cursor-pointer">Fazwaz</a>
            <a className="hover:text-white cursor-pointer">ร่วมงานกับเรา</a>
            <a className="hover:text-white cursor-pointer">แผนผังเว็บไซต์</a>
            <a className="hover:text-white cursor-pointer">เกี่ยวกับเรา</a>
          </div>
          <div className="flex flex-row items-center flex-wrap">
            <span className="mr-1 pb-4">Copyrights © 2025,FazWaz Group |</span>
            <div className="flex pb-4 flex-row gap-2 flex-wrap">
            <a>
                <img src="/icons/facebook.svg" alt="facebook"
                className="h-[12px]" />
            </a>
             <a>
                <img src="/icons/instagram.svg" alt="instagram"
                className="h-[12px]" />
            </a>
             <a>
                <img src="/icons/youtube-w.svg" alt="youtube"
                className="h-[13px]" />
            </a>
             <a>
                <img src="/icons/twitter.svg" alt="x"
                className="h-[12px]" />
            </a>
              <a>
                <img src="/icons/in.svg" alt="linkin"
                className="h-[12px]" />
            </a>
              <a>
                <img src="/icons/line_i.svg" alt="line"
                className="h-[12px]" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
