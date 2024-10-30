interface LoadingIndicatorProps {
  isLoading: boolean;
}

export function LoadingIndicator({ isLoading }: LoadingIndicatorProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <div className="loading">Pondering</div>
    </div>
  );
}
