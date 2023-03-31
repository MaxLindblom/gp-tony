import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="column-layout centered full-height menu">
        <div className="menu-item">
          <Link to="/config">Config</Link>
        </div>
        <div className="menu-item">
          <Link to="/chat">Chat</Link>
        </div>
      </div>
    </div>
  );
}
