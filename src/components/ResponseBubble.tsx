import ReactMarkdown from "react-markdown";
import { Message } from "../types";
import { MessageMeta } from "./MessageMeta";
import remarkGfm from "remark-gfm";

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
      <pre>
        <code className="language-javascript">{displayString}</code>
      </pre>
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
  const endsWithCode = message.content.endsWith("```");
  const modOperand = startsWithCode ? 0 : 1;
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
            console.log("logging", match);
            if (idx % 2 === modOperand) {
              return (
                <ReactMarkdown children={match} remarkPlugins={[remarkGfm]} />
              );
            }
            return generateCodeSnippet(match, idx);
          })}
          {!endsWithCode && (
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
