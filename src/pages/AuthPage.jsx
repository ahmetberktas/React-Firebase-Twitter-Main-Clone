import React, { useState, useRef } from "react";
import { days, months, years } from "../constants/date";

const AuthPage = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const registerRef = useRef(null);
  const loginRef = useRef(null);

  const openRegister = () => {
    setIsRegisterOpen(true);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeRegister = () => {
    setIsRegisterOpen(false);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="flex justify-start items-start md:h-auto md:flex-1 md:justify-center md:items-center">
          <img
            src="./x-icon.png"
            alt="logo"
            className="object-contain ml-2 mt-2 h-16 w-16 md:h-40 md:w-40 lg:h-60 lg:w-60"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-start px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Şu anda olup <br /> bitenler
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-8">
            Hemen katıl.
          </h2>

          <button className="flex items-center justify-center bg-white text-black rounded-full px-4 py-2 w-full max-w-xs md:max-w-md mb-3 shadow-md hover:bg-gray-200 transition duration-300">
            <span>Google ile oturum açın</span>
            <img src="./google.png" alt="Google" className="h-6 w-6 ml-2" />
          </button>

          <div className="flex items-center my-3 w-full">
            <div className="border-t border-gray-500 w-32"></div>
            <span className="mx-2 text-sm">veya</span>
            <div className="border-t border-gray-500 w-32"></div>
          </div>

          <button
            type="button"
            onClick={openRegister}
            className="bg-blue-500 text-white font-semibold rounded-full px-4 py-2 w-full max-w-xs md:max-w-md mb-3 hover:bg-blue-600 transition duration-300"
          >
            Hesap oluştur
          </button>

          <p className="text-xs text-gray-400 text-left max-w-xs mb-6">
            Kaydolarak{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Hizmet Şartlarını
            </a>{" "}
            ve{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Gizlilik Politikasını
            </a>{" "}
            kabul etmiş olursunuz.
          </p>

          <p className="text-sm mb-5 text-left mt-10">
            Zaten bir hesabın var mı?
          </p>

          <button
            onClick={openLogin}
            className="border border-gray-500 text-blue-400 font-semibold rounded-full px-4 py-2 w-full max-w-xs md:max-w-md hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Giriş yap
          </button>
        </div>
      </div>

      {/* Hesap Oluştur Modal */}
      {isRegisterOpen && (
        <div
          ref={registerRef}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-90 transition-opacity"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-black">
            <div className="flex items-center p-4 md:p-5 rounded-t dark:border-gray-600">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeRegister}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <img src="./x-icon.png" className="h-6 w-6 mx-auto" alt="Logo" />
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <form className="space-y-4" action="#">
                <h1 className="font-bold text-3xl pb-2 text-center">
                  Hesabını Oluştur
                </h1>

                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-black border border-gray-400 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Email"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-black border border-gray-400 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Password"
                    required
                    autoComplete="off"
                  />
                </div>

                <h3 className="font-bold text-lg pt-6">Doğum Tarihi</h3>
                <p className="text-sm text-gray-500">
                  Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme,
                  evcil hayvan veya başka bir şey için olsa bile kendi yaşını
                  doğrulaman gerekir.
                </p>

                <div className="flex space-x-2">
                  <select
                    className="w-full md:w-1/2 bg-gray-200 border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-black dark:border-gray-500 dark:text-white"
                    name="month"
                    id="month"
                    required
                  >
                    <option value="">Ay</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>

                  <select
                    className="w-full md:w-1/4 bg-gray-200 border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-black dark:border-gray-500 dark:text-white"
                    name="day"
                    id="day"
                    required
                  >
                    <option value="">Gün</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>

                  <select
                    className="w-full md:w-1/4 bg-gray-200 border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-black dark:border-gray-500 dark:text-white"
                    name="year"
                    id="year"
                    required
                  >
                    <option value="">Yıl</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold rounded-full px-4 py-2 hover:bg-gray-400 transition duration-300"
                >
                  Hesabını oluştur
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Login Modal */}
      {isLoginOpen && (
        <div
          ref={loginRef}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-90 transition-opacity"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-black">
            <div className="flex items-center p-4 md:p-5 rounded-t dark:border-gray-900">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeLogin}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <img src="./x-icon.png" className="h-6 w-6 mx-auto" alt="Logo" />
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <form className="space-y-4" action="#">
                <h1 className="font-bold text-3xl pb-2 text-center">
                  X'e giriş yap
                </h1>

                <div className="text-center mb-6">
                  <button
                    type="button"
                    className="flex items-center justify-center bg-white text-black rounded-full px-4 py-2 w-full max-w-xs md:max-w-md mx-auto shadow-md"
                  >
                    <span>Google ile giriş yap</span>
                    <img
                      src="./google.png"
                      alt="Google"
                      className="h-6 w-6 ml-2"
                    />
                  </button>

                  <div className="flex items-center my-3 w-full justify-center">
                    <div className="border-t border-gray-500 w-32"></div>
                    <span className="mx-2 text-sm">veya</span>
                    <div className="border-t border-gray-500 w-32"></div>
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-black border border-gray-400 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Email"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-black border border-gray-400 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Password"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="flex justify-between text-sm">
                  <a href="#" className="text-blue-500 hover:underline">
                    Şifrenizi mi unuttunuz?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold rounded-full px-4 py-2 hover:bg-gray-400 transition duration-300"
                >
                  Giriş Yap
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Henüz bir hesabınız yok mu?{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:underline"
                    onClick={() => {
                      closeLogin();
                      openRegister();
                    }}
                  >
                    Kaydol
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
