import type { Message } from "../types";
import { LoadingIndicator } from "./LoadingIndicator";
import { RequestBubble } from "./RequestBubble";
import { ResponseBubble } from "./ResponseBubble";

interface ConversationProps {
  isLoading: boolean;
  messages: Message[];
}

export function Conversation({ isLoading, messages }: ConversationProps) {
  return (
    <div className="column-layout messages">
      {messages.map((message) => {
        if (message.role === "assistant")
          return (
            <ResponseBubble
              key={`${message.role}-message-${message.timestamp}`}
              message={message}
            />
          );
        if (message.role === "user")
          return (
            <RequestBubble
              key={`${message.role}-message-${message.timestamp}`}
              message={message}
            />
          );
        return false;
      })}
      <LoadingIndicator isLoading={isLoading} />
    </div>
  );
}
