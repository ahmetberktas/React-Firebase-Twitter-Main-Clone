import React from "react";
import { Link, NavLink } from "react-router-dom";
import { mainMenu } from "../constants/mainMenu";
import More from "./More";

const Menu = () => {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} className="py-1 block group">
          <div className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]">
            <div className="w-[26.25px] h-[26.25px] relative">
              {menu?.notification && (
                <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                  {menu?.notification}
                </span>
              )}
              {menu.icon}
            </div>
            <div className="pr-4 text-xl">{menu.title}</div>
          </div>
        </NavLink>
      ))}
      <More></More>
      <div className="py-4 w-[90%]">
        <button className="bg-[#1d9bf0] text-[15px] font-bold px-4 flex items-center justify-center rounded-full h-[52px] w-full hover:bg-[#1a8cd8] transition-colors">
          Gönder
        </button>
      </div>
    </nav>
  );
};

export default Menu;
