import { MessageMeta } from "./MessageMeta";

interface RequestBubbleProps {
  message: string;
}

export function RequestBubble({ message }: RequestBubbleProps) {
  const current = new Date();
  return (
    <div className="right-bubble-container">
      <div className="right-bubble-content">
        <MessageMeta user={"You"} timestamp={current} />
        {message}
      </div>
    </div>
  );
}
