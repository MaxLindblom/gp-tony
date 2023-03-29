import ReactMarkdown from "react-markdown";
import { Message } from "../types";
import { MessageMeta } from "./MessageMeta";
import remarkGfm from "remark-gfm";
import { useEffect } from "react";
import { CodeSnippet } from "./CodeSnippet";

interface ResponseBubbleProps {
  message: Message;
}

export function ResponseBubble({ message }: ResponseBubbleProps) {
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
            return <CodeSnippet text={match} idx={idx} />;
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
