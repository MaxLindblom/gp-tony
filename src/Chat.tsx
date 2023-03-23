import {
  ChatCompletionRequestMessageRoleEnum,
  ChatCompletionResponseMessage,
  ChatCompletionResponseMessageRoleEnum,
} from "openai";
import React, { FormEvent, useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { Conversation } from "./components/Conversation";
import { getErrorMessage } from "./error";
import { getChatCompletion } from "./request";

export function Chat() {
  const [messages, setMessages] = useState<ChatCompletionResponseMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = function (
    event: FormEvent,
    query: string,
    onlyCode: boolean
  ) {
    setMessages((prevState) => [
      ...prevState,
      { role: ChatCompletionResponseMessageRoleEnum.User, content: query },
    ]);
    setIsLoading(true);
    try {
      const prompt = onlyCode ? `${query} Only give me the code` : query;
      getChatCompletion(messages, prompt).then((response) => {
        // TODO: parse response and get only code snippets if onlyCode === true?
        const message = response.data.choices[0].message;
        if (message) setMessages((prevState) => [...prevState, message]);
        setIsLoading(false);
      });
    } catch (error) {
      setMessages((prevState) => [
        ...prevState,
        {
          role: ChatCompletionRequestMessageRoleEnum.System,
          content: getErrorMessage(error),
        },
      ]);
      setIsLoading(false);
    }
    event.preventDefault();
  };

  return (
    <div className="centered column-layout">
      <div className="chat-container">
        <Conversation isLoading={isLoading} messages={messages} />
        <ChatInput isLoading={isLoading} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
