import { useState } from "react";
import { PopUp } from "../components/PopUp";
import { setModel } from "../request";
import {
  API_STORAGE_KEY,
  clearApiKey,
  getSavedApiKey,
  setApiKey,
} from "../storage";

interface ApiKeyState {
  exists: boolean;
  lastFour: string;
}

let message: string;

export function Config() {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const isValidInput = inputValue.length > 4;

  const onClickTest = () => {
    const apiKey = getSavedApiKey();
    const newKeyState: ApiKeyState = apiKey
      ? {
          exists: true,
          lastFour: apiKey.slice(-4),
        }
      : {
          exists: false,
          lastFour: "",
        };
    message = newKeyState.exists
      ? `There is an API key saved! The last 4 characters are ${newKeyState.lastFour}`
      : "No API key saved";
    setIsActive(true);
  };

  const setNewModel = (model: string) => {
    message =
      model === "gpt-4"
        ? "Cutting edge, boss! Now using gpt-4 model"
        : `Now using ${model} model`;
    setIsActive(true);
    setModel(model);
  };

  const onClickSet = () => {
    if (isValidInput) {
      setApiKey(inputValue);
      message = `Set openAiApiKey to ${inputValue}`;
      setIsActive(true);
      setInputValue("");
    }
  };

  const onClickClear = () => {
    clearApiKey();
    message = "API key has been cleared from local storage";
    setIsActive(true);
  };

  return (
    <div className="centered">
      <PopUp
        isActive={isActive}
        setInactive={() => setIsActive(false)}
        message={message}
      />
      <div className="content-wrapper column-layout route-container">
        <h1>Config</h1>
        <div>
          <p>
            On this page you can set up your API key to get yourself ready to
            use GPTony
          </p>
        </div>
        <div>
          <p>
            The API key is stored in local storage. Check if there is an API key
            saved:
          </p>
        </div>
        <div>
          <button
            type="button"
            className="button test-api-key"
            onClick={onClickTest}
          >
            Test API key
          </button>
        </div>
        <div>
          <p>
            If there is no API key saved, you can enter one here. Generate one
            from the{" "}
            <a
              href="https://platform.openai.com/account/api-keys"
              target="blank"
            >
              OpenAi Website
            </a>
            , and keep in mind you will need to have billing enabled.
            Alternatively, you can add it manually to local storage. The key is{" "}
            <code>{API_STORAGE_KEY}</code>
          </p>
        </div>
        <div className="row-layout">
          <input
            value={inputValue}
            className="api-key-input use-body-font"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="button"
            type="button"
            onClick={onClickSet}
            disabled={!isValidInput}
          >
            Set
          </button>
        </div>
        <div>
          If you wish to clear your API key from local storage, you can do so
          here:
        </div>
        <div>
          <button
            type="button"
            className="button test-api-key"
            onClick={onClickClear}
          >
            Clear API key
          </button>
        </div>
        <div>
          <p>
            GPTony uses the gpt-4 model by default. If you don't have access to
            it, you can use the earlier gpt-3.5-turbo model instead:
          </p>
        </div>
        <div className="row-layout">
          <button
            type="button"
            className="button model-button"
            onClick={() => setNewModel("gpt-4")}
          >
            Use gpt-4
          </button>
          <button
            type="button"
            className="button model-button"
            onClick={() => setNewModel("gpt-3.5-turbo")}
          >
            Use gpt-3.5-turbo
          </button>
        </div>
      </div>
    </div>
  );
}
