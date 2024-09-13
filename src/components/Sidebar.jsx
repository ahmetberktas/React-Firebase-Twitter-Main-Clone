import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <aside className="w-[275px] min-h-screen px-2">
      <div className="py-0.5">
        <Link
          to="/main"
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors"
        >
          <img src="./x-icon.png" width={30} height={30}></img>
        </Link>
      </div>
      <Menu></Menu>
    </aside>
  );
};

export default Sidebar;
