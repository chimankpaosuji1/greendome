import React from "react";
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Admission from "./pages/admission/Admission";
import Home from "./pages/home/Homes";
import Payment from "./pages/payment/Payment";
import Prepdone from "./pages/prepdone/Prepdone";
import Regpage from "./pages/regpage/Regpage";
import Successpage from "./pages/successpage/Successpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admission" element={<Admission />} />
        <Route path="regpage" element={<Regpage />} />
        <Route path="prepdone" element={<Prepdone />} />
        <Route path="payment" element={<Payment />} />
        <Route path="success" element={<Successpage />} />
      </Routes>
    </BrowserRouter>
  );
}
