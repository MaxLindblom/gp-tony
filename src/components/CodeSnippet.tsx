import { useState } from "react";

interface CodeSnippetProps {
  text: string;
  idx: number;
}

export function CodeSnippet({ text, idx }: CodeSnippetProps) {
  const [isClicked, setIsClicked] = useState(false);

  const onClickCopy = function (text: string) {
    setIsClicked(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  var index = text.indexOf("\n");
  let displayString: string;
  if (index >= 0) {
    displayString = text.substring(index + 1);
  } else {
    displayString = text;
  }

  return (
    <div
      key={`code-snippet-${idx}`}
      className={`code-snippet ${isClicked ? "copy-animated" : ""}`}
    >
      <pre>
        <code>{displayString}</code>
      </pre>
      <button
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
