import { useState } from "react";

interface CodeSnippetProps {
  text: string;
}

export function CodeSnippet({ text }: CodeSnippetProps) {
  const [isClicked, setIsClicked] = useState(false);

  const onClickCopy = (text: string) => {
    setIsClicked(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  const index = text.indexOf("\n");
  let displayString: string;
  if (index >= 0) {
    displayString = text.substring(index + 1);
  } else {
    displayString = text;
  }

  return (
    <div className={`code-snippet ${isClicked ? "copy-animated" : ""}`}>
      <pre>
        <code>{displayString}</code>
      </pre>
      <button
        type="button"
        className="copy-image-button image-button"
        onClick={() => onClickCopy(displayString)}
      >
        <img
          className="copy-image"
          src={require("../images/copy.png")}
          alt="Copy to clipboard"
          title="Copy to clipboard"
        />
      </button>
    </div>
  );
}
