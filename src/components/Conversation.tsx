import { ChatCompletionResponseMessage } from "openai";
import React from "react";
import { Spinner } from "./Spinner";

interface ConversationProps {
  isLoading: boolean;
  messages: ChatCompletionResponseMessage[];
}

export function Conversation({ isLoading, messages }: ConversationProps) {
  if (isLoading) return <Spinner></Spinner>;
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
