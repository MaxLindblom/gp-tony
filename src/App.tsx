import React from "react";
import "./styles/App.css";
import "./styles/Animations.css";
import { Chat } from "./Chat";
import useScroll from "./hooks/useScroll";
import Header from "./components/Header";

export default function App() {
  window.onscroll = useScroll;

  return (
    <div className="App">
      <Header />
      <Chat />
    </div>
  );
}
