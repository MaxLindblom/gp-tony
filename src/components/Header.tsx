import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Menu from "./Menu";

export default function Header() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useClickOutside(menuRef, () => setIsMenuOpen(false));

  const handleClickMenuButton = function (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setIsMenuOpen((prev) => !prev);
    event.preventDefault();
  };

  const handleClickScrollButton = function () {
    if (window.innerHeight + window.scrollY < document.body.scrollHeight) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      const input = document.getElementById("input-textarea");
      if (input !== null) {
        setTimeout(() => {
          input.focus();
        }, 500);
      }
    }
  };

  return (
    <div ref={menuRef} className="header-wrapper">
      <div className="header centered" id="header">
        <div className="header-left centered">
          <button
            className="image-button menu-button centered"
            onClick={handleClickMenuButton}
          >
            <img
              className={`header-image menu-image ${
                isMenuOpen ? "rotated" : ""
              }`}
              src={require("../images/cross.png")}
              alt="Menu button"
              title="Toggle menu"
            />
          </button>
        </div>
        {isMenuOpen ? <Menu /> : false}
        <div className="header-title">GPTony</div>
        <div className="header-right centered">
          <button
            className="image-button scroll-to-bottom-button centered"
            onClick={handleClickScrollButton}
          >
            <img
              className="header-image"
              src={require("../images/arrow-down.png")}
              alt="Scroll to bottom"
              title="Scroll to bottom"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
