import currencies_list from "../data/Currency_List"
import RenderCurrencyList from "./RenderCurrencyList"


interface RenderCurrencyButtonProps{
  currentCurrency:string,
  setCurrentCurrency:(currency:string)=>void
}

function RenderCurrencyButton({currentCurrency,setCurrentCurrency}:RenderCurrencyButtonProps){
    return(
        <div
          className="h-full group bg-white hover:bg-custom_blue hover:text-white rounded-md p-2 text-center px-[10px] py-[12px]
        relative cursor-pointer "
        >
          <ul className="h-fit">
            <li className="flex items-center">
              <span className="text-[13.5px] font-bold">{currentCurrency}</span>
            </li>
          </ul>
          <div className="absolute right-0 top-full h-4 w-full z-40"></div>
          <ul className=" w-[780px]  absolute right-0 top-10 mt-2 bg-white border rounded shadow-lg hidden group-hover:block text-black min-w-[150px] text-left">
            <p className={`pb-2 pt-3 px-3 text-[14px] whitespace-nowrap`}>
              สกุลเงินทั้งหมด
            </p>
            <div className="flex flex-row flex-wrap justify-between px-3">
              {Object.entries(currencies_list).map(([key, value]) => (
                <RenderCurrencyList key={key} id={key} data={value} currentCurrency={currentCurrency} setCurrentCurrency={setCurrentCurrency} />
              ))}
            </div>
          </ul>
        </div>
    )
}

export default RenderCurrencyButton