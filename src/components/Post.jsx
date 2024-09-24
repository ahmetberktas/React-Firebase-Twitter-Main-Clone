import React from "react";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import "moment/locale/tr";
import { auth } from "../firebase/config";

const Post = ({ tweets }) => {
  // Eğer tweets verisi yoksa veya bir dizi değilse, yükleniyor mesajını göster
  if (!tweets || !Array.isArray(tweets)) {
    return "Yükleniyor";
  }

  return tweets.map((tweet, index) => {
    // Tweet atılma zamanını hesaplama
    const date = tweet.createdAt
      ? moment(tweet.createdAt.toDate()).fromNow()
      : "birkaç saniye önce";

    return (
      <div
        key={index}
        className="px-4 py-3 gap-3 border-b border-[#2f3336] flex hover:bg-white/[0.03]"
      >
        <img
          src={
            tweet.user && tweet.user.photo ? tweet.user.photo : "./avatar.jpg"
          }
          className="w-10 h-10 rounded-full object-cover"
          alt="user"
        />

        <div className="flex-1">
          <header className="leading-5 flex items-center gap-2 mb-0.5">
            <Link
              to="/main"
              className="hover:underline flex items-center font-bold"
            >
              {tweet.user.name}
            </Link>
            <div className="text-[#71767b] flex items-center gap-2">
              <div>
                @
                {tweet?.user?.name
                  ? tweet.user.name.toLowerCase().replace(" ", "_")
                  : "username"}
              </div>

              <div className="w-0.5 h-0.5 rounded-full bg-[#71767b]"></div>
              <div>{date}</div>
            </div>
            {tweet.user.id === auth.currentUser.uid && (
              <Popover className="ml-auto relative">
                <Popover.Button>
                  <svg viewBox="0 0 24 24" width={20} height={20}>
                    <path
                      fill="#e7e9ea"
                      d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                    ></path>
                  </svg>
                </Popover.Button>
                <Popover.Panel className="w-[100px] absolute top-5 right-0 bg-black shadow-box rounded-xl overflow-hidden">
                  <button className="px-4 h-10 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
                    Sil
                  </button>
                </Popover.Panel>
              </Popover>
            )}
          </header>

          <div>
            {tweet.textContent && <p>{tweet.textContent}</p>}

            {tweet.imageContent && tweet.imageContent.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mt-2 mb-2">
                {tweet.imageContent.map((image, index) => (
                  <div key={index} className="w-full h-48">
                    <img
                      src={image}
                      alt={`tweet image ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex -ml-1.5">
            <div className="flex-1 group flex items-center gap-px">
              <div className="w-[2.172rem] h-[2.172rem] flex items-center justify-center group-hover:bg-[#1d9bf0] rounded-full group-hover:text-[#1d9bf0]">
                <svg viewBox="0 0 24 24" className="h-[1.172rem]">
                  <path
                    className="group-hover:fill-[#fff]"
                    fill="#71767b"
                    d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                  ></path>
                </svg>
              </div>
              <span className="text-[0.813rem] text-[#71767b] group-hover:text-[#1d9bf0]">
                13.7 B
              </span>
            </div>
            <div className="flex-1 group flex items-center gap-px">
              <div className="w-[2.172rem] h-[2.172rem] flex items-center justify-center group-hover:bg-[#00ba7c19] rounded-full group-hover:text-[#00ba7c19]">
                <svg viewBox="0 0 24 24" className="h-[1.172rem]">
                  <path
                    className="group-hover:fill-[#fff]"
                    fill="#71767b"
                    d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                  ></path>
                </svg>
              </div>
              <span className="text-[0.813rem] text-[#71767b] group-hover:text-[#00ba7c91]">
                1.7 B
              </span>
            </div>
            <div className="flex-1 group flex items-center gap-px">
              <div className="w-[2.172rem] h-[2.172rem] flex items-center justify-center group-hover:bg-[#f9188019] rounded-full group-hover:text-[#f9188019]">
                <svg viewBox="0 0 24 24" className="h-[1.172rem]">
                  <path
                    className="group-hover:fill-[#fff]"
                    fill="#71767b"
                    d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                  ></path>
                </svg>
              </div>
              <span className="text-[0.813rem] text-[#71767b] group-hover:text-[#f9181877]">
                7 B
              </span>
            </div>
            <div className="flex-1 group flex items-center gap-px">
              <div className="w-[2.172rem] h-[2.172rem] flex items-center justify-center group-hover:bg-[#1d9bf0] rounded-full group-hover:text-[#1d9bf0]">
                <svg viewBox="0 0 24 24" className="h-[1.172rem]">
                  <path
                    className="group-hover:fill-[#fff]"
                    fill="#71767b"
                    d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                  ></path>
                </svg>
              </div>
              <span className="text-[0.813rem] text-[#71767b] group-hover:text-[#1d9bf0]">
                245 B
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Post;
