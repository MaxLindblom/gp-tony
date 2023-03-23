import React, { FormEvent, useState } from "react";

interface ChatInputProps {
  isLoading: boolean;
  onSubmit: (event: FormEvent, query: string, onlyCode: boolean) => void;
}

export function ChatInput({ isLoading, onSubmit }: ChatInputProps) {
  const [query, setQuery] = useState("");
  const [onlyCode, setOnlyCode] = useState(false);

  return (
    <div className="column-layout">
      <form
        className="row-layout"
        onSubmit={(event) => onSubmit(event, query, onlyCode)}
      >
        <textarea
          className="use-body-font full-width"
          value={query}
          rows={3}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="submit-button" type="submit" disabled={isLoading} />
      </form>
      <div className="row-layout">
        <input
          className="input-checkbox"
          checked={onlyCode}
          onChange={(e) => setOnlyCode(e.target.checked)}
          type="checkbox"
        ></input>
        <label
          className="underlined cursor-pointer"
          onClick={() => setOnlyCode((isChecked) => !isChecked)}
        >
          Return only code
        </label>
      </div>
    </div>
  );
}
