import { language_list } from "../data/Language_List"

interface RenderLanguageButtonProps{
  currentLanguage:string,
  setCurrentLanguage:(language:string)=>void
}


function RenderLanguageButton({currentLanguage,setCurrentLanguage}:RenderLanguageButtonProps){

    return(
 <div
          className="h-full group bg-white hover:bg-custom_blue hover:text-white rounded-md p-2 text-center px-[10px] py-[12px]
        relative cursor-pointer "
        >
          <ul className="h-fit">
            <li className="flex items-center">
              <span className="flex flex-row text-[13.5px] font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="gray"
                  className="size-5 group-hover:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p className="text-[13px]">{currentLanguage}</p>
              </span>
            </li>
          </ul>
          <div className="absolute left-0 top-full h-4 w-full z-40"></div>
          <ul className="absolute left-0 top-10 mt-2 pt-2 pb-2 bg-white border rounded shadow-lg hidden group-hover:block text-black min-w-[150px] text-left">
            {language_list.map((value, index) => (
              <li
                key={index}
                className="py-1 px-3 text-[13px] whitespace-nowrap hover:bg-gray-100 cursor-pointer"
                onClick={()=>setCurrentLanguage(value)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
    )
}

export default RenderLanguageButton