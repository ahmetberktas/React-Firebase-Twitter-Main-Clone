import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import Header from "../components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import Post from "../components/Post";
import Form from "../components/Form";

const MainPage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    /* Login Kullanıcı Bilgisi Abone Olundu */
    /* Kullanıcı değiştiği anda mevcut kullanıcı bilgilerini state aktarma*/
    const unSub = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    /* Kullanıcı Çıkış yaparsa Abonelik sonlanır */
    return () => unSub();
  }, []);
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar user={user}></Sidebar>
      <div className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Header title="Anasayfa"></Header>
          <Form user={user}></Form>
          <Post></Post>
        </main>
        <RightBar></RightBar>
      </div>
    </div>
  );
};

export default MainPage;
