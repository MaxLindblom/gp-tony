import { Message } from "../types";
import { MessageMeta } from "./MessageMeta";

interface ResponseBubbleProps {
  message: Message;
}

export function ResponseBubble({ message }: ResponseBubbleProps) {
  return (
    <div className="left-bubble-container">
      <div className="left-bubble-content">
        <MessageMeta user={"Tony"} timestamp={message.timestamp} />
        {message.content}
      </div>
    </div>
  );
}
