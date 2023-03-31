import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

interface PopUpProps {
  isActive: boolean;
  setInactive: () => void;
  message: string;
}

export function PopUp({ isActive, setInactive, message }: PopUpProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useClickOutside(contentRef, setInactive);

  if (!isActive) return null;

  return (
    <div className={`overlay ${isActive ? "active" : "inactive"}`}>
      <div
        ref={contentRef}
        className={`pop-up ${isActive ? "active" : "inactive"}`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}
