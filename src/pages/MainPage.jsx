import React from "react";
import { auth } from "./../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar></Sidebar>
      <div className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <button
            onClick={() => {
              signOut(auth);
              navigate("/");
            }}
          >
            Çıkış Yap
          </button>
        </main>
        <RightBar></RightBar>
      </div>
    </div>
  );
};

export default MainPage;
