import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { Popover } from "@headlessui/react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ user }) => {
  const navigate = useNavigate();
  return (
    <aside className="w-[70px] md:w-[275px] max-h-screen min-h-screen px-2 flex flex-col sticky top-0">
      <div className="py-0.5">
        <Link
          to="/main"
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors"
        >
          <img src="./x-icon.png" width={30} height={30}></img>
        </Link>
      </div>
      <Menu></Menu>
      <div className="md:mt-auto">
        <Popover className="relative">
          <Popover.Button className="my-3 p-1 md:p-3 rounded-full md:hover:bg-[#eff3f41a] w-full flex text-left items-center outline-none">
            <img
              src={!user ? "./avatar.jpg" : user.photoURL}
              className="w-10 h-10 rounded-full"
            ></img>
            <div className="mx-3 text-[15px] hidden md:block">
              <h6 className="font-bold leading-[20px]">
                {!user ? "fullname" : user.displayName}
              </h6>
              <div className="text-[#71767b]">
                {!user
                  ? "username"
                  : user.displayName
                  ? user.displayName.toLowerCase().replace(" ", "_")
                  : "username"}
              </div>
            </div>
          </Popover.Button>
          <Popover.Panel className="absolute bottom-full py-3 w-[300px] overflow-hidden left-[150px] md:left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl">
            <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[#e7e9ea] text-[15px] font-bold">
              Var olan bir hesap ekle
            </button>
            <button
              onClick={() => {
                signOut(auth);
                navigate("/");
              }}
              className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[#e7e9ea] text-[15px] font-bold"
            >
              {!user
                ? "@username"
                : "@" +
                  (user.displayName
                    ? user.displayName.toLowerCase().replace(" ", "_")
                    : "username")}{" "}
              hesabından çıkış yap
            </button>
          </Popover.Panel>
        </Popover>
      </div>
    </aside>
  );
};

export default Sidebar;
