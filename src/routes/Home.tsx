import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="centered">
      <div className="content-wrapper column-layout">
        <h1>Hey how you doin'? Welcome to GPTony.</h1>
        <p>
          This is a web-based wrapper for chatGPT, using the{" "}
          <a href="https://platform.openai.com/docs/guides/chat" target="blank">
            openai Chat completions API
          </a>
          . It behaves mostly the same way as the regular chatGPT chat but with
          some fun alterations, all packaged within a beautiful brutalist UI.
        </p>
        <p>
          To use GPTony, you will need a working API key from openai, that has
          billing enabled.
        </p>
        <p className="bold">
          NOTE: GPTony will perform requests that charge your account.
        </p>
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
        <p>
          In the chat window, you have the option to make Tony only respond with
          code. This is experimental, and what it does is append a prompt to the
          end of the query to only respond with code. Results may vary.
        </p>
        <p>
          The first thing to do would be to set up your API key. Read more about
          that on <Link to="/config">the Config page</Link>. If that's already
          set up, jump right in to <Link to="/chat">the chat</Link>!
        </p>
      </div>
    </div>
  );
}
