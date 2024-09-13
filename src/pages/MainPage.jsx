import React from "react";
import { auth } from "./../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          signOut(auth);
          navigate("/");
        }}
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default MainPage;
