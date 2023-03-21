import { ChatCompletionResponseMessage } from "openai";
import React, { FormEvent, useState } from "react";
import { getChatCompletion } from "../request";

interface ChatInputProps {
  messages: ChatCompletionResponseMessage[];
  handleMessage: (message: ChatCompletionResponseMessage) => void;
}

export function ChatInput({ messages, handleMessage }: ChatInputProps) {
  const [query, setQuery] = useState("");
  const [onlyCode, setOnlyCode] = useState(false);

  const onSubmit = function (event: FormEvent) {
    getChatCompletion(messages, query).then((response) => {
      if (response.data.choices[0].message) {
        handleMessage(response.data.choices[0].message);
      }
    });
    event.preventDefault();
  };

  return (
    <form className="centered" onSubmit={onSubmit}>
      <div className="column-layout">
        <label>Enter query:</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
        <div className="row-layout centered">
          <input
            checked={onlyCode}
            onChange={(e) => setOnlyCode(e.target.checked)}
            type="checkbox"
          ></input>
          <label>Return only code</label>
        </div>
        <input className="centered full-width" type="submit" />
      </div>
    </form>
  );
}
