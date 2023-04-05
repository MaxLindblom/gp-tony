import React from "react";
import "./styles/App.css";
import "./styles/Animations.css";
import { Chat } from "./routes/Chat";
import useScroll from "./hooks/useScroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import { Config } from "./routes/Config";
import { Home } from "./routes/Home";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  window.onscroll = useDebounce(80, useScroll);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="config" element={<Config />} />
            <Route path="chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
