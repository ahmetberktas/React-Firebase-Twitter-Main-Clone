import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import Header from "../components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import Post from "../components/Post";
import Form from "../components/Form";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const MainPage = () => {
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState(null);

  /* Kolleksiyonun referansını alma */
  const tweetsCol = collection(db, "tweets");

  /* Tweet sıralama ayarları */
  const option = query(tweetsCol, orderBy("createdAt", "desc"));

  useEffect(() => {
    /* Login Kullanıcı Bilgisi Abone Olundu */
    /* Kullanıcı değiştiği anda mevcut kullanıcı bilgilerini state aktarma*/
    const unSub = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    /* Kullanıcı Çıkış yaparsa Abonelik sonlanır */
    return () => unSub();
  }, []);

  useEffect(() => {
    /* Tweets Koleksiyonuna Abone Olma */
    const unSub = onSnapshot(option, (snapshot) => {
      const tempTweets = [];

      snapshot.forEach((doc) => tempTweets.push({ id: doc.id, ...doc.data() }));

      setTweets(tempTweets);
    });

    return () => unSub();
  }, []);

  return (
    <div className="w-full md:w-[1265px] mx-auto flex">
      <Sidebar user={user}></Sidebar>
      <div className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Header title="Anasayfa"></Header>
          <Form user={user}></Form>
          <Post tweets={tweets}></Post>
        </main>
        <div className="hidden md:block">
          <RightBar></RightBar>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
