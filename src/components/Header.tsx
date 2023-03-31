import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenuButton = function () {
    setIsMenuOpen((prev) => !prev);
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
    <div className="header-wrapper">
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
              title="Menu button"
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
