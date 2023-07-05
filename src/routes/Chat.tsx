import {
  ChatCompletionRequestMessageRoleEnum,
  ChatCompletionResponseMessageRoleEnum,
} from "openai";
import React, { FormEvent, useEffect, useState } from "react";
import { ChatInput } from "../components/ChatInput";
import { Conversation } from "../components/Conversation";
import { getErrorMessage } from "../error";
import useLocalState from "../hooks/useLocalState";
import { getChatCompletion } from "../request";
import { Message } from "../types";

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { load, clear } = useLocalState(messages);

  useEffect(() => {
    setMessages(load());
  }, []);

  const onSubmit = async function (
    event: FormEvent,
    query: string,
    onlyCode: boolean
  ) {
    setMessages((prevState) => [
      ...prevState,
      {
        role: ChatCompletionResponseMessageRoleEnum.User,
        content: query,
        timestamp: new Date().toISOString(),
      },
    ]);
    setIsLoading(true);
    try {
      const prompt = onlyCode ? `${query} Only give me the code` : query;
      getChatCompletion(messages, prompt).then((response) => {
        // TODO: parse response and get only code snippets if onlyCode === true?
        const message = response.data.choices[0].message;
        if (message) {
          setMessages((prevState) => [
            ...prevState,
            { ...message, timestamp: new Date().toISOString() },
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
          role: ChatCompletionRequestMessageRoleEnum.Assistant,
          content: getErrorMessage(error),
          timestamp: new Date().toISOString(),
        },
      ]);
      setIsLoading(false);
    }
    event.preventDefault();
  };

  const onClear = function () {
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
