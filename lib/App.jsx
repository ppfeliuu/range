import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NormalRange from "./views/normal-range/normal-range.component";
import FixedRange from "./views/fixed-range/fixed-range.component";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/normal">Normal Range</Link>
          </li>
          <li>
            <Link to="/fixed">Fixed values range</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/normal" element={<NormalRange />} />
        <Route path="/fixed" element={<FixedRange />} />
      </Routes>
    </div>
  );
}
