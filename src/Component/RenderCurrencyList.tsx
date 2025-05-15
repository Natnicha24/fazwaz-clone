interface RenderCurrencyProps {
  id: string;
  data: Currency;
   currentCurrency: string;
  setCurrentCurrency: (currency: string) => void;
}
interface Currency {
  name: string;
  currency: string;
}

function RenderCurrency({ id, data,currentCurrency,setCurrentCurrency }: RenderCurrencyProps) {
  return (
    <>
      <span
        id={id}
        key={data.name}
        className={`${currentCurrency===data.currency?"border-2 border-gray-300 cursor-default":"border-0 hover:bg-gray-100"}
         w-1/5 px-[8px] rounded-md py-[4px] flex flex-col mt-2`}
         onClick={()=>setCurrentCurrency(data.currency)}
      >
        <span className="text-[13px]">{data.name}</span>
        <span className="text-[13px] text-gray-400 whitespace-nowrap">
          {data.currency}
        </span>
      </span>
    </>
  );
}

export default RenderCurrency;
