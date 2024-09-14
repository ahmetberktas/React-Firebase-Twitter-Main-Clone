import React from "react";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";

const MainPage = () => {
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar></Sidebar>
      <div className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          Main Page
        </main>
        <RightBar></RightBar>
      </div>
    </div>
  );
};

export default MainPage;
