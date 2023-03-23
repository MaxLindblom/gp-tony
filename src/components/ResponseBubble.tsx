import { MessageMeta } from "./MessageMeta";

interface ResponseBubbleProps {
  message: string;
}

export function ResponseBubble({ message }: ResponseBubbleProps) {
  const current = new Date();
  return (
    <div className="left-bubble-container">
      <div className="left-bubble-content">
        <MessageMeta user={"Tony"} timestamp={current} />
        {message}
      </div>
    </div>
  );
}
