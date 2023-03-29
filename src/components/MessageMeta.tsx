interface MessageMetaProps {
  user: string;
  timestamp: string;
}

export function MessageMeta({ user, timestamp }: MessageMetaProps) {
  return (
    <div className="message-meta">
      {user}, {timestamp}
    </div>
  );
}
