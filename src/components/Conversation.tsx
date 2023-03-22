import { ChatCompletionResponseMessage } from "openai";
import { RequestBubble } from "./RequestBubble";
import { ResponseBubble } from "./ResponseBubble";
import { Spinner } from "./Spinner";

interface ConversationProps {
  isLoading: boolean;
  messages: ChatCompletionResponseMessage[];
}

export function Conversation({ isLoading, messages }: ConversationProps) {
  if (isLoading) return <Spinner />;
  return (
    <div className="column-layout chat-field">
      {messages.map((message) => {
        if (message.role === "assistant")
          return <ResponseBubble message={message.content} />;
        if (message.role === "user")
          return <RequestBubble message={message.content} />;
        return null;
      })}
    </div>
  );
}
