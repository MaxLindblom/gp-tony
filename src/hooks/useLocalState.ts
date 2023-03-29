import { useCallback, useEffect } from "react";
import { Message } from "../types";

const LOCAL_STORAGE_KEY = "currentConversationState";

const useLocalState = function (messages: Message[]) {
  useEffect(() => {
    if (messages.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const load = useCallback(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved === null) {
      return [];
    }
    return JSON.parse(saved);
  }, []);

  const clear = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, []);

  return { load, clear };
};

export default useLocalState;
