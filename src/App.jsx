import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage></AuthPage>}></Route>
        <Route element={<ProtectedRoute></ProtectedRoute>}>
          <Route path="/main" element={<MainPage></MainPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
