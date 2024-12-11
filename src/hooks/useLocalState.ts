import { useCallback, useEffect } from "react";

const useLocalState = (content: unknown[], storageKey: string) => {
  useEffect(() => {
    if (content.length) {
      localStorage.setItem(storageKey, JSON.stringify(content));
    }
  }, [content, storageKey]);

  const load = useCallback(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved === null) {
      return [];
    }
    return JSON.parse(saved);
  }, [storageKey]);

  const clear = useCallback(() => {
    localStorage.removeItem(storageKey);
  }, [storageKey]);

  return { load, clear };
};

export default useLocalState;
