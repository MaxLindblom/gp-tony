import { ChatCompletionResponseMessage } from "openai";
import React from "react";

interface ConversationProps {
  messages: ChatCompletionResponseMessage[];
}

export function Conversation({ messages }: ConversationProps) {
  return (
    <div className="column-layout">
      {messages.map((message) => (
        <>
          <p>{message.role}</p>
          <p>{message.content}</p>
        </>
      ))}
    </div>
  );
}
