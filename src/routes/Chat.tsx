import { type FormEvent, useEffect, useState } from "react";
import { ChatInput } from "../components/ChatInput";
import { Conversation } from "../components/Conversation";
import { CONVERSATION_STORAGE_KEY } from "../config";
import { getErrorMessage } from "../error";
import useLocalState from "../hooks/useLocalState";
import { getChatCompletion } from "../request";
import type { Message } from "../types";

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { load, clear } = useLocalState(messages, CONVERSATION_STORAGE_KEY);

  useEffect(() => {
    const loaded = load();
    setMessages(loaded ?? []);
  }, [load]);

  const onSubmit = async (
    event: FormEvent,
    query: string,
    onlyCode: boolean,
  ) => {
    setMessages((prevState) => [
      ...prevState,
      {
        role: "user",
        content: query,
        timestamp: new Date().toISOString(),
      },
    ]);
    setIsLoading(true);
    try {
      const prompt = onlyCode ? `${query} Only give me the code` : query;
      getChatCompletion(messages, prompt).then((response) => {
        // TODO: parse response and get only code snippets if onlyCode === true?
        const message = response.choices[0].message;
        if (message) {
          setMessages((prevState) => [
            ...prevState,
            {
              role: message.role,
              content: message.content ?? "",
              timestamp: new Date().toISOString(),
            },
          ]);
          setIsLoading(false);
          return;
        }
        throw Error("Sorry, I couldn't generate a response");
      });
    } catch (error) {
      setMessages((prevState) => [
        ...prevState,
        {
          role: "assistant",
          content: getErrorMessage(error),
          timestamp: new Date().toISOString(),
        },
      ]);
      setIsLoading(false);
    }
    event.preventDefault();
  };

  const onClear = () => {
    setMessages([]);
    clear();
    const input = document.getElementById("input-textarea");
    if (input !== null) {
      input.focus();
    }
  };

  return (
    <div className="centered column-layout">
      <div className="chat-container route-container">
        <Conversation isLoading={isLoading} messages={messages} />
        <ChatInput
          isLoading={isLoading}
          onSubmit={onSubmit}
          onClear={onClear}
        />
      </div>
    </div>
  );
}
