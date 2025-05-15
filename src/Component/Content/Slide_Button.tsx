function Slide_Button_Left() {
  return (
    <button
      className="
      absolute left-0 top-1/2 -translate-y-1/2 ml-3
      rounded-full bg-white opacity-0 border-1 border-gray-500 p-3
       group-hover:opacity-90 transform duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={5}
        stroke="gray"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
}

function Slide_Button_Right() {
  return (
    <button className="
     absolute right-0 top-1/2 -translate-y-1/2 mr-3
    rounded-full bg-white opacity-0 border-1 border-gray-500 p-3
    group-hover:opacity-90 transform duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={5}
        stroke="gray"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
}

export {Slide_Button_Right,Slide_Button_Left}
