interface MessageMetaProps {
  user: string;
  timestamp: Date;
}

export function MessageMeta({ user, timestamp }: MessageMetaProps) {
  return (
    <div className="message-meta">
      {user}, {timestamp.toISOString()}
    </div>
  );
}
