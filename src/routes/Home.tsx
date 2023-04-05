import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="centered">
      <div className="content-wrapper column-layout">
        <h1>Hey how you doin'? Welcome to GPTony</h1>
        <div>
          <p>
            This is a web-based wrapper for chatGPT, using the{" "}
            <a
              href="https://platform.openai.com/docs/guides/chat"
              target="blank"
            >
              openai chat completions API
            </a>
            . It behaves mostly the same way as the regular chatGPT chat but
            with some fun alterations, all packaged within a beautiful brutalist
            UI.
          </p>
        </div>
        <div>
          <p>
            To use GPTony, you will need a working API key from openai, that has
            billing enabled.
          </p>
        </div>
        <div>
          <p className="bold">
            NOTE: GPTony will perform requests that charge your account.
          </p>
        </div>
        <div>
          <p>
            The amount billed will be up to you and your usage. GPTony does not
            perform superflous requests. Read more about pricing, billing, and
            setting up your account{" "}
            <a
              href="https://platform.openai.com/account/billing/overview"
              target="blank"
            >
              on openai's website
            </a>
            .
          </p>
        </div>
        <div>
          <p className="bold">
            ALSO NOTE: GPTony is client-side only, and exposes your API key in
            the request header. It is saved in your browser's local storage.
          </p>
        </div>
        <div>
          <p>
            Your key will be saved between sessions, and as with all local
            storage, will remain until it's explicitly cleared. You can clear
            your key in the config page if you wish. The other thing that's
            stored is the current conversation, also in local storage. Other
            than that, no data is kept about you or your session.
          </p>
        </div>
        <div>
          <p>
            In the chat window, you have the option to make Tony only respond
            with code. This is experimental, and what it does is append a prompt
            to the end of the query to only respond with code. Results may vary.
          </p>
        </div>
        <div>
          <p>
            The first thing to do would be to set up your API key. Read more
            about that on <Link to="/config">the config page</Link>. If that's
            already set up, jump right in to <Link to="/chat">the chat</Link>!
          </p>
        </div>
      </div>
    </div>
  );
}
