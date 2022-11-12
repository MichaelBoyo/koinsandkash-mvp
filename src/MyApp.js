import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonAppBar from "./myPages/AppBar";
import SignIn from "./myPages/SignIn";
import SignUp from "./myPages/SignUp";
import ForgotPassword from "./myPages/ForgotPassword";
import Dashboard from "./myPages/Dashboard";

const App = () => {
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;
