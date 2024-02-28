import { Message } from "../types";
import { MessageMeta } from "./MessageMeta";

interface RequestBubbleProps {
  message: Message;
}

export function RequestBubble({ message }: RequestBubbleProps) {
  if (!message.content || typeof message.content !== "string") {
    message.content = "";
  }
  return (
    <div className="right-bubble-container">
      <div className="right-bubble-content">
        <MessageMeta user={"You"} timestamp={message.timestamp} />
        <div className="right-bubble-message">
          <pre>{message.content}</pre>
        </div>
      </div>
    </div>
  );
}
