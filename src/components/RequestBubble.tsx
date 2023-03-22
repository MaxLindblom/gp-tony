interface RequestBubbleProps {
  message: string;
}

export function RequestBubble({ message }: RequestBubbleProps) {
  return (
    <div className="right-bubble-container">
      <div className="right-bubble-content">{message}</div>
    </div>
  );
}
