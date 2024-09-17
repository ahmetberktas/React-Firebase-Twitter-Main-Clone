import { Popover } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2">
      <Link
        to="/main"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Hizmet Şartları
      </Link>
      <Link
        to="/main"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Gizlilik Politikası
      </Link>
      <Link
        to="/main"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Çerez Politikası
      </Link>
      <Link
        to="/main"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Imprint
      </Link>
      <Link
        to="/main"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Erişilebilirlik
      </Link>
      <Link
        to="/main"
        className="text-[#71767b] text-[13px] leading-4 hover:underline"
      >
        Reklam bilgisi
      </Link>
      <div className="w-full flex gap-2">
        <Popover className="relative inline-flex leading-4">
          <Popover.Button className="text-[#71767b] outline-none leading-4 text-[13px] hover:underline inline-flex items-center">
            Daha fazla
            <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
              <path
                fill="#71767b"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              ></path>
            </svg>
          </Popover.Button>
          <Popover.Panel className="w-[180px] max-w-[384px] bg-black shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
            <Link
              to="/main"
              className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181ccc] transition-colors"
            >
              Hakkında
            </Link>
            <Link
              to="/main"
              className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181ccc] transition-colors"
            >
              X uygulamasını indir
            </Link>
            <Link
              to="/main"
              className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181ccc] transition-colors"
            >
              İşletmeler İçin X
            </Link>
            <Link
              to="/main"
              className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181ccc] transition-colors"
            >
              Geliştiriciler
            </Link>
          </Popover.Panel>
        </Popover>
        <p className="text-[#71767b] leading-4 text-[13px]">
          &copy; 2024{" "}
          <Link
            to="https://github.com/ahmetberktas"
            target="_blank"
            className="hover:underline"
          >
            Ahmet Berktas
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
