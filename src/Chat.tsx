import { ChatCompletionResponseMessage } from "openai";
import React, { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { Conversation } from "./components/Conversation";

export function Chat() {
  const [messages, setMessages] = useState<ChatCompletionResponseMessage[]>([]);

  return (
    <div className="centered column-layout">
      <ChatInput
        messages={messages}
        handleMessage={(message) => setMessages((prev) => [...prev, message])}
      />
      <Conversation messages={messages} />
    </div>
  );
}
