import React from "react";

const Premium = () => {
  return (
    <section className="bg-transparent mb-4 rounded-2xl border-[rgb(47,51,54)] border-[1px] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]">
      <h6 className="text-xl font-extrabold leading-6">Premium'a Abone Ol</h6>
      <p className="leading-5 text-[15px] font-bold">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
        geliri payı kazan.
      </p>
      <div className="self-start">
        <button className="bg-[#1d9bf0] text-[15px] font-bold px-4 rounded-full h-[36px] hover:bg-[#1a8cd8] transition-colors">
          Abone ol
        </button>
      </div>
    </section>
  );
};

export default Premium;
