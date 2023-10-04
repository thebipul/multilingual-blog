import React from "react";

const Searchbar = () => {
  return (
    <div className="flex items-center flex-row w-fit h-fit bg-search_gray font-light text-sm rounded-lg">
      <div className="pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <input
        type="text"
        className="bg-transparent text-white outline-none w-full border-0 px-3 py-2"
        placeholder="Search for blog..."
      />
    </div>
  );
};

export default Searchbar;
