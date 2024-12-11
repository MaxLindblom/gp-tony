import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePathChange(callback: () => unknown) {
  useLocation();

  useEffect(() => {
    callback();
  }, [callback]);
}

export default usePathChange;
