import { Link } from "react-router-dom";
import usePathChange from "../../hooks/usePathChange";
import { useState } from "react";

interface MenuItemProps {
  path: string;
  text: string;
}

export default function MenuItem({ path, text }: MenuItemProps) {
  const [isSelected, setIsSelected] = useState(false);
  usePathChange(() => setIsSelected(window.location.pathname === path));

  return (
    <div className={`menu-item ${isSelected ? "menu-item-selected" : ""}`}>
      <Link className="full-width" to={path}>
        {text}
      </Link>
    </div>
  );
}
