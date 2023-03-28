import { Message } from "../types";
import { MessageMeta } from "./MessageMeta";

interface RequestBubbleProps {
  message: Message;
}

export function RequestBubble({ message }: RequestBubbleProps) {
  return (
    <div className="right-bubble-container">
      <div className="right-bubble-content">
        <MessageMeta user={"You"} timestamp={message.timestamp} />
        <div className="right-bubble-message">{message.content}</div>
      </div>
    </div>
  );
}
