// Vendors
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Component
import NormalRange from "./views/normal-range/normal-range.component";
import FixedRange from "./views/fixed-range/fixed-range.component";
// Styles
import { Wrapper } from "./App.styled";

export default function App() {
  return (
    <Wrapper>
      <nav>
        <div>Select an option:</div>
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
    </Wrapper>
  );
}
