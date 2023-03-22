interface ResponseBubbleProps {
  message: string;
}

export function ResponseBubble({ message }: ResponseBubbleProps) {
  return (
    <div className="left-bubble-container">
      <div className="left-bubble-content">{message}</div>
    </div>
  );
}
