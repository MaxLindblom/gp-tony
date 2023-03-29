import { Message } from "../types";
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
      {isLoading && (
        <div style={{ padding: "1rem" }}>
          <div className="loading">Pondering</div>
        </div>
      )}
    </div>
  );
}
