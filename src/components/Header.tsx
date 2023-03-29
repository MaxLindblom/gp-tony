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

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header centered" id="header">
        <div className="header-left"></div>
        <div className="header-title">GPTony</div>
        <div className="header-right centered">
          <button
            className="image-button scroll-to-bottom-button centered"
            onClick={handleClickScrollButton}
          >
            <img
              className="scroll-to-bottom-image"
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
