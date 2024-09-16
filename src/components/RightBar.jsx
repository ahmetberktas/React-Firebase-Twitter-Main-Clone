import React from "react";
import Search from "./Search";
import Premium from "./Premium";
import Topics from "./Topics";

const RightBar = () => {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search></Search>
      <Premium></Premium>
      <Topics></Topics>
    </aside>
  );
};

export default RightBar;
