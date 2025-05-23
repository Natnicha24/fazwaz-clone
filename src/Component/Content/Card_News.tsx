interface Card_NewsProps {
  data: Card_NewsList | Card_YoutubeList;
}

interface Card_NewsList {
  title: string;
  sub_title: string;
  image_link: string;
  youtube_link: string;
}

interface Card_YoutubeList {
  title: string;
  sub_title: string;
  image_link: string;
  view: number;
  comment: number;
}

function Card_News({ data }: Card_NewsProps) {
  return (
    <a
      href={"youtube_link" in data ? data.youtube_link : "#"}
      target="_blank"
      className="relative min-w-[267px] max-w-[267px] rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <img
          src={data.image_link}
          alt={`${data.title}-image`}
          className="w-[100%] h-fit rounded-lg"
        />
        {"view" in data && (
          <div
            className="absolute w-full bottom-0 h-1/2 left-0 text-[12px] text-white
          bg-gradient-to-t from-black via-transparent to-transparent"
          >
            <div className="flex gap-3 h-full mt-auto items-end w-full justify-end pb-2 pr-3">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span>{data.view}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

                <span>{data.comment}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col w-[100%] mt-1 gap-1">
        <span className="text-[14px] w-[100%] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
          {data.title}
        </span>
        <span className="text-[12px] text-gray-500 text-wrap">
          {data.sub_title}
        </span>
      </div>
    </a>
  );
}

export default Card_News;
