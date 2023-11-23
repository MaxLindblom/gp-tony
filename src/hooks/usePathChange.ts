import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePathChange(callback: () => unknown) {
  const location = useLocation();

  useEffect(() => {
    callback();
  }, [location.pathname]);
}

export default usePathChange;
