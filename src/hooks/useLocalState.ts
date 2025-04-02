import { useCallback, useEffect } from "react";

const useLocalState = (content: any, storageKey: string) => {
  useEffect(() => {
    if (content.length) {
      localStorage.setItem(storageKey, JSON.stringify(content));
    }
  }, [content, storageKey]);

  const load = useCallback(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : null;
  }, [storageKey]);

  const clear = useCallback(() => {
    localStorage.removeItem(storageKey);
  }, [storageKey]);

  return { load, clear };
};

export default useLocalState;
