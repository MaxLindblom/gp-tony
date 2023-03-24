import { Message } from "../types";
import { MessageMeta } from "./MessageMeta";

interface ResponseBubbleProps {
  message: Message;
}

const generateCodeSnippet = function (match: string, idx: number) {
  var index = match.indexOf("\n");
  let displayString: string;
  if (index >= 0) {
    displayString = match.substring(index + 1);
  } else {
    displayString = match;
  }
  return (
    <div key={`code-snippet-${idx}`} className="code-snippet">
      <code>{displayString}</code>
      <button
        className="copy-image-button"
        onClick={() => navigator.clipboard.writeText(displayString)}
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
};

export function ResponseBubble({ message }: ResponseBubbleProps) {
  const regex = /(?<=```)[\s\S]*?(?=```)/g;
  const matches = message.content.match(regex);
  const startsWithCode = message.content.startsWith("```");
  const modOperand = startsWithCode ? 0 : 1;
  return (
    <div className="left-bubble-container">
      <div className="left-bubble-content">
        <MessageMeta user={"Tony"} timestamp={message.timestamp} />
        <pre>
          {!startsWithCode && message.content.split("```")[0]}
          {matches?.map((match, idx) => {
            if (idx % 2 === modOperand) {
              return match;
            }
            return generateCodeSnippet(match, idx);
          })}
        </pre>
      </div>
    </div>
  );
}
