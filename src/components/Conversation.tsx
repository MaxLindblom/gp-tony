import { Message } from "../types";
import { RequestBubble } from "./RequestBubble";
import { ResponseBubble } from "./ResponseBubble";
import { Spinner } from "./Spinner";

interface ConversationProps {
  isLoading: boolean;
  messages: Message[];
}

export function Conversation({ isLoading, messages }: ConversationProps) {
  if (isLoading) return <Spinner />;
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
        return null;
      })}
    </div>
  );
}
