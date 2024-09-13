import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase/config";

const ProtectedRoute = () => {
  /* Kullanıcı yetkisi var mı? */
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    /* Anlık olarak kullanıcının oturumunun izliyor */
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  /* Kullanıcı yetkisi yoksa Login'e yönlendirme */
  if (isAuth === false) {
    return <Navigate to={"/"} replace></Navigate>;
  }

  /* Kullanıcı yetkisi varsa alt route izin ver */
  return <Outlet></Outlet>;
};

export default ProtectedRoute;
