import { useEffect, useState } from "react";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

const LOADING_STRINGS = [
  "Pondering",
  "Thinking",
  "Calculating",
  "Generating",
  "Computing",
  "Simulating",
  "Analyzing",
  "Evaluating",
  "Processing",
  "Optimizing",
  "Compiling",
  "Decoding",
  "Encoding",
  "Decrypting",
  "Encrypting",
  "Validating",
  "Verifying",
  "Authenticating",
];

const randomizeLoadingString = () =>
  LOADING_STRINGS[Math.floor(Math.random() * LOADING_STRINGS.length)];

export function LoadingIndicator({ isLoading }: LoadingIndicatorProps) {
  const [loadingString, setLoadingString] = useState(randomizeLoadingString());

  useEffect(() => {
    const loadingInterval = setInterval(
      () => setLoadingString(randomizeLoadingString()),
      2000
    );
    return () => clearInterval(loadingInterval);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <div className="loading">{loadingString}</div>
    </div>
  );
}
