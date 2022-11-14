import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Cart from "./users/Cart";
import Dashboard from "./users/Dashboard";
import MedicineDisplay from "./users/MedicineDisplay";
import Orders from "./users/Oreder";
import Profile from "./users/Profile";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Registration />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Orders />} />
        <Route path="/" element={<Profile />} />
        <Route path="/" element={<Cart />} />
        {/* <Route path="/" element={< />} /> */}
      </Routes>
    </Router>
  );
}
