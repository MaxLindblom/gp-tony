import React, { FormEvent, useState } from "react";

interface ChatInputProps {
  isLoading: boolean;
  onSubmit: (event: FormEvent, query: string, onlyCode: boolean) => void;
}

export function ChatInput({ isLoading, onSubmit }: ChatInputProps) {
  const [query, setQuery] = useState("");
  const [onlyCode, setOnlyCode] = useState(false);

  return (
    <form
      className="centered"
      onSubmit={(event) => onSubmit(event, query, onlyCode)}
    >
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
        <input
          className="centered full-width"
          type="submit"
          disabled={isLoading}
        />
      </div>
    </form>
  );
}
