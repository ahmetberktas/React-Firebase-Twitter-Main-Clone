import React, { useState } from "react";

const Header = ({ title }) => {
  const [activeButton, setActiveButton] = useState("sana-ozel");

  return (
    <header className="sticky top-0 z-10 bg-black/[0.65] backdrop-blur-md border-b border-[#2f3336]">
      <h3 className="px-4 h-[53px] flex items-center text-xl font-bold">
        {title}
      </h3>
      <div className="flex">
        <button
          type="button"
          className={`flex-auto text-center ${
            activeButton === "sana-ozel" ? "font-bold" : ""
          }`}
          onClick={() => setActiveButton("sana-ozel")}
        >
          <div className="h-[53px] relative inline-flex items-center">
            Sana özel
            {activeButton === "sana-ozel" && (
              <div className="h-1 absolute bottom-0 left-0 w-full rounded-full bg-[#1D9BF0]"></div>
            )}
          </div>
        </button>
        <button
          type="button"
          className={`flex-auto text-center ${
            activeButton === "takip-edilenler" ? "font-bold" : ""
          }`}
          onClick={() => setActiveButton("takip-edilenler")}
        >
          <div className="h-[53px] relative inline-flex items-center">
            Takip edilenler
            {activeButton === "takip-edilenler" && (
              <div className="h-1 absolute bottom-0 left-0 w-full rounded-full bg-[#1D9BF0]"></div>
            )}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
