import { useState } from "react";
import { PopUp } from "../components/PopUp";

export function Config() {
  const [isActive, setIsActive] = useState(false);

  const onClickTest = function () {
    setIsActive(true);
  };

  return (
    <div className="config-wrapper centered column-layout">
      <h1>Config</h1>
      <p>
        On this page you can set up your api key to get yourself ready to use
        GPTony
      </p>
      <p>
        The API key is stored in local storage. Check if there is an API key
        saved:
      </p>
      <button className="button" onClick={onClickTest}>
        Test API key
      </button>
      <PopUp
        isActive={isActive}
        setInactive={() => setIsActive(false)}
        message="info about API key"
      ></PopUp>
    </div>
  );
}
