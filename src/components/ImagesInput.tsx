import { type FormEvent, type KeyboardEvent, useState } from "react";

interface ImagesInputProps {
  isLoading: boolean;
  onSubmit: (event: FormEvent, prompt: string) => void;
}

export function ImagesInput({ isLoading, onSubmit }: ImagesInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      document.getElementById("submit-button")?.click();
      event.preventDefault();
    }
  };

  const handleSubmit = (event: FormEvent) => {
    onSubmit(event, prompt);
    setPrompt("");
  };

  return (
    <div className="column-layout">
      <form className="row-layout" onSubmit={handleSubmit}>
        <textarea
          id="input-textarea"
          className="input-textarea"
          value={prompt}
          rows={3}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          className="button"
          id="submit-button"
          type="submit"
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
