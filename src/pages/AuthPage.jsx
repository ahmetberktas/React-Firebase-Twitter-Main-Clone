import React from "react";

const AuthPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen text-white">
      <div className="flex justify-start items-start md:h-auto md:flex-1 md:justify-center md:items-center">
        <img
          src="./x-icon.png"
          alt="logo"
          className="object-contain ml-2 mt-2 h-16 w-16 md:h-40 md:w-40 lg:h-60 lg:w-60"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-[800] mb-4">
          Şu anda olup <br /> bitenler
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-8">Hemen katıl.</h2>

        <button className="flex items-center justify-center bg-white text-black rounded-full px-4 py-2 w-full max-w-xs md:max-w-md mb-3 shadow-md">
          <span>Google ile oturum açın</span>
          <img src="./google.png" alt="Google" className="h-6 w-6 ml-2" />
        </button>

        <div className="flex items-center my-3 w-full">
          <div className="border-t border-gray-500 w-32"></div>
          <span className="mx-2 text-sm">veya</span>
          <div className="border-t border-gray-500 w-32"></div>
        </div>

        <button className="bg-blue-500 text-white font-semibold rounded-full px-4 py-2 w-full max-w-xs md:max-w-md mb-3">
          Hesap oluştur
        </button>

        <p className="text-xs text-gray-400 text-left max-w-xs mb-6">
          By signing up, you agree to the{" "}
          <a href="#" className="text-blue-400">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-400">
            Privacy Policy
          </a>
          , including{" "}
          <a href="#" className="text-blue-400">
            Cookie Use
          </a>
          .
        </p>

        <p className="text-sm mb-5 text-left mt-10">
          Zaten bir hesabın var mı?
        </p>

        <button className="border border-gray-500 text-blue-400 font-semibold rounded-full px-4 py-2 w-full max-w-xs md:max-w-md">
          Giriş yap
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
