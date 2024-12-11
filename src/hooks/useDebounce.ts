import { useCallback, useRef } from "react";

const useDebounce = (waitTime: number, callback: (...args: any[]) => any) => {
  const timeout = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: any[]) => {
      const later = () => {
        clearTimeout(timeout.current);
        callback(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, waitTime);
    },
    [waitTime, callback]
  );
};

export default useDebounce;
