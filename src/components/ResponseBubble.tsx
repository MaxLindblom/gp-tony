import ReactMarkdown from "react-markdown";
import { Message } from "../types";
import { MessageMeta } from "./MessageMeta";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

interface ResponseBubbleProps {
  message: Message;
}

const generateCodeSnippet = function (
  match: string,
  onClick: (text: string) => void
) {
  var index = match.indexOf("\n");
  let displayString: string;
  if (index >= 0) {
    displayString = match.substring(index + 1);
  } else {
    displayString = match;
  }
  return (
    <>
      <pre>
        <code>{displayString}</code>
      </pre>
      <button
        className="copy-image-button"
        onClick={() => onClick(displayString)}
      >
        <img
          className="copy-image"
          src={require("../images/copy.png")}
          alt="Copy to clipboard"
          title="Copy to clipboard"
        />
      </button>
    </>
  );
};

export function ResponseBubble({ message }: ResponseBubbleProps) {
  const [isClicked, setIsClicked] = useState(false);
  const regex = /(?<=```)[\s\S]*?(?=```)/g;
  const matches = message.content.match(regex);
  const startsWithCode = message.content.startsWith("```");
  const endsWithCode = message.content.endsWith("```");
  const modOperand = startsWithCode ? 0 : 1;

  useEffect(() => {
    const links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute("target", "_blank");
    }
  });

  const onClickCopy = function (text: string) {
    setIsClicked(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <div className="left-bubble-container">
      <div className="left-bubble-content">
        <MessageMeta user={"Tony"} timestamp={message.timestamp} />
        <pre>
          {!startsWithCode && (
            <ReactMarkdown
              children={message.content.split("```")[0]}
              remarkPlugins={[remarkGfm]}
            />
          )}
          {matches?.map((match, idx) => {
            if (idx % 2 === modOperand) {
              return (
                <ReactMarkdown children={match} remarkPlugins={[remarkGfm]} />
              );
            }
            return (
              <div
                key={`code-snippet-${idx}`}
                className={`code-snippet ${isClicked ? "copy-animated" : ""}`}
              >
                {generateCodeSnippet(match, onClickCopy)}
              </div>
            );
          })}
          {!endsWithCode && matches !== null && (
            <ReactMarkdown
              children={message.content.split("```").slice(-1)[0]}
              remarkPlugins={[remarkGfm]}
            />
          )}
        </pre>
      </div>
    </div>
  );
}
