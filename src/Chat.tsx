import {
  ChatCompletionRequestMessageRoleEnum,
  ChatCompletionResponseMessageRoleEnum,
} from "openai";
import React, { FormEvent, useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { Conversation } from "./components/Conversation";
import { getErrorMessage } from "./error";
import { getChatCompletion } from "./request";
import { Message } from "./types";

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
        timestamp: new Date(),
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
            { ...message, timestamp: new Date() },
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
          role: ChatCompletionRequestMessageRoleEnum.System,
          content: getErrorMessage(error),
          timestamp: new Date(),
        },
      ]);
      setIsLoading(false);
    }
    event.preventDefault();
  };

  const onClear = function () {
    setMessages([]);
  };

  return (
    <div className="centered column-layout">
      <div className="chat-container">
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
