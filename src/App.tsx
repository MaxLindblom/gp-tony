import React from "react";
import "./App.css";
import { ChatInput } from "./components/ChatInput";

export default function App() {
  return (
    <div className="App">
      <ChatInput
        messages={[]}
        handleMessage={(message) => console.log(message)}
      />
    </div>
  );
}
