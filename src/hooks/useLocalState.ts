import { useCallback, useEffect } from "react";

const useLocalState = function (content: unknown[], storageKey: string) {
  useEffect(() => {
    if (content.length) {
      localStorage.setItem(storageKey, JSON.stringify(content));
    }
  }, [content]);

  const load = useCallback(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved === null) {
      return [];
    }
    return JSON.parse(saved);
  }, []);

  const clear = useCallback(() => {
    localStorage.removeItem(storageKey);
  }, []);

  return { load, clear };
};

export default useLocalState;
