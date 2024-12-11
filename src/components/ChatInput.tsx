import { type KeyboardEvent, type FormEvent, useState } from "react";

interface ChatInputProps {
  isLoading: boolean;
  onSubmit: (event: FormEvent, query: string, onlyCode: boolean) => void;
  onClear: () => void;
}

export function ChatInput({ isLoading, onSubmit, onClear }: ChatInputProps) {
  const [query, setQuery] = useState("");
  const [onlyCode, setOnlyCode] = useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      document.getElementById("submit-button")?.click();
      event.preventDefault();
    }
  };

  const handleSubmit = (event: FormEvent) => {
    onSubmit(event, query, onlyCode);
    setQuery("");
  };

  return (
    <div className="column-layout">
      <form className="row-layout" onSubmit={handleSubmit}>
        <textarea
          id="input-textarea"
          className="input-textarea"
          value={query}
          rows={3}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          className="button"
          id="submit-button"
          type="submit"
          disabled={isLoading}
        />
      </form>
      <div className="row-layout">
        <label
          className="underlined cursor-pointer"
          onClick={() => setOnlyCode((isChecked) => !isChecked)}
        >
          <input
            className="input-checkbox"
            checked={onlyCode}
            onChange={(e) => setOnlyCode(e.target.checked)}
            type="checkbox"
          />
          Return only code
        </label>
        <button type="button" className="button" onClick={onClear}>
          Clear chat
        </button>
      </div>
    </div>
  );
}
