interface ListProps {
  id: string;
  data: Data;
}

interface Data {
  data?: List[];
  other?: string[];
}

interface List {
  title: string;
  list?: string[];
}

function RenderList({ id, data }: ListProps) {
  return (
    <>
      {data.data?.map((data, key) => (
        <div key={key}>
          <p
            key={id}
            className={`${
              data.list ? "pb-2" : "pb-0.5"
            } pt-3 px-3 text-[14px] whitespace-nowrap`}
          >
            {data.title}
          </p>
          {data.list?.map((value, key) => (
            <li
              key={key}
              className="py-1 px-3 text-[13px] whitespace-nowrap hover:bg-gray-100 cursor-pointer"
            >
              {value}
            </li>
          ))}
        </div>
      ))}
      <div className={`${data.data ? "mt-2" : "mt-0"}`}>
        {!data.data &&
          data.other?.map((value, key) => (
            <li
              key={key}
              className={`py-2 px-3 text-[13px] hover:bg-gray-100 cursor-pointer border border-gray-300 border-b-1 border-t-0 border-x-0 whitespace-nowrap`}
            >
              {value}
            </li>
          ))}

        {data.data &&
          data.other?.map((value, key) => (
            <li
              key={key}
              className="py-2 px-3 text-[13px] hover:bg-gray-100 cursor-pointer border border-gray-300 border-top-1 border-b-0 border-x-0 whitespace-nowrap"
            >
              {value}
            </li>
          ))}
      </div>
    </>
  );
}

export default RenderList;
