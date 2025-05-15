interface RenderTitleProps {
  title: string;
  sub_title: string;
}

function RenderTitle({ title, sub_title }: RenderTitleProps) {
  return (
    <div className="pl-[35px] mb-6">
      <h2 className="text-[20px] font-bold">{title}</h2>
      <h3 className="text-[13px] font-semibold text-gray-500">{sub_title}</h3>
    </div>
  );
}

export default RenderTitle;
