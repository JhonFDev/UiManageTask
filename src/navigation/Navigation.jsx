import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../screens/register";
import Login from "../screens/login";
import MainManageTask from "../screens/mainManageTask";

export default function Navigation() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainManageTask />} />
      </Routes>
    </BrowserRouter>
  );
}
