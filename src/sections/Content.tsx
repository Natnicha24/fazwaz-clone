import Slider_Flex from "../Component/Content/Card_Flex";
import RenderTitle from "../Component/Content/RenderTitle";
import { project } from "../data/Content/Project";
import Card_Text_Session from "../Component/Content/Card_Text_Session";
import Card_Price_Session from "../Component/Content/Card_Price_Session";
import { price1, price2, price3 } from "../data/Content/Price";
import Card_News_Session from "../Component/Content/Card_News_Session";
import { news1, youtube } from "../data/Content/New";
import { area } from "../data/Content/Area";
import Card_Flex_Session from "../Component/Content/Card_Flex_Session";

function Content() {
  return (
    <div className="flex flex-col gap-6 py-[50px]">
      <div className="relative group">
        <RenderTitle
          title="จังหวัดและทำเลยอดนิยมในไทย"
          sub_title="Find exclusive listing in the most popular regions of Thailand. Be the first to browse listings before they hit the market."
        />
          <Card_Flex_Session area={area} />
      </div>

      <div className="relative group">
        <RenderTitle
          title="โครงการใหม่ล่าสุดทั่วไทย"
          sub_title="ทั้งโครงการใหม่ที่น่าลงทุน หรือซื้ออยู่อาศัยเอง เรานำมาอัพเดทให้คุณแล้วที่นี่"
        />
        <Card_Text_Session project={project} />
      </div>

      <div className="relative group">
        <RenderTitle
          title="พบข้อเสนอสุดพิเศษในประเทศไทย"
          sub_title="เพราะเรารู้ข้อมูลดีที่สุดในเรื่องบ้านและคอนโด จึงอยากแนะนำยูนิตที่คุณไม่ควรพลาด"
        />
        <Card_Price_Session project={price1} />
      </div>

      <div className="relative group">
        <RenderTitle
          title="ชมยูนิตแบบวิวเสมือนจริง"
          sub_title="พาคุณเข้าชมยูนิตได้เสมือนเรากำลังเดินเข้าไปชมในยูนิตจริง"
        />
        <Card_Price_Session project={price2} />
      </div>

      <div className="relative group">
        <RenderTitle
          title="บ้านและคอนโดลดราคา ขายด่วน!"
          sub_title="โอกาสในการซื้อบ้านราคาถูก ช่วยคุณประหยัดเงินหาไม่ได้ง่ายๆ รีบตัดสินใจก่อนโดนคนอื่นชิงตัดหน้าไป"
        />
        <Card_Price_Session project={price3} />
      </div>

      <div className="relative group">
        <RenderTitle
          title="วิดีโอแนะนำโครงการจาก FazWaz.co.th"
          sub_title="เรามีรีวิวโครงการในรูปแบบวิดีโอ เพื่อให้คุณเห็นภาพทุกอย่างได้ชัดเจนในทุกมุมมอง"
        />
        <Card_News_Session data={youtube} />
      </div>

      <div className="relative group">
        <RenderTitle
          title="วิดีโอแนะนำโครงการจาก FazWaz.co.th"
          sub_title="เรามีรีวิวโครงการในรูปแบบวิดีโอ เพื่อให้คุณเห็นภาพทุกอย่างได้ชัดเจนในทุกมุมมอง"
        />
        <Card_News_Session data={news1} />
      </div>
    </div>
  );
}

export default Content;
