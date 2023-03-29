import React from "react";
import "./styles/App.css";
import "./styles/Animations.css";
import { Chat } from "./Chat";
import useScroll from "./hooks/useScroll";

export default function App() {
  window.onscroll = useScroll;

  return (
    <div className="App">
      <div className="header-wrapper">
        <h1 className="centered" id="header">
          GPTony
        </h1>
      </div>
      <Chat />
    </div>
  );
}
