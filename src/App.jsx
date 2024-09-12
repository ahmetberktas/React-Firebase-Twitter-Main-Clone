import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage></AuthPage>}></Route>
        <Route path="/main" element={<MainPage></MainPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
