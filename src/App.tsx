import React from "react";
import "./styles/App.css";
import "./styles/Animations.css";
import { Chat } from "./Chat";

export default function App() {
  return (
    <div className="App">
      <h1 className="centered">GPTony</h1>
      <Chat />
    </div>
  );
}
