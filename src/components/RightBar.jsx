import React from "react";
import Search from "./Search";
import Premium from "./Premium";

const RightBar = () => {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search></Search>
      <Premium></Premium>
    </aside>
  );
};

export default RightBar;
