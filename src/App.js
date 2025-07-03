import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Ficha from "./pages/Ficha";
import LoginAdmin from "./pages/LoginAdmin";
import AdminPanel from "./pages/AdminPanel";
import Historial from "./pages/Historial";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ficha" element={<Ficha />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/historial" element={<Historial />} />
      </Routes>
    </Router>
  );
}
