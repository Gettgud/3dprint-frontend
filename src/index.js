import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Educational,
  ItemPage,
  PaypalBox,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/educational" element={<Educational />} />
      <Route path="/:itemId" element={<ItemPage />} />
      <Route path="/paypal" element={<PaypalBox />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);
