import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="column-layout centered full-height menu">
        <MenuItem path="/" text="Index" />
        <MenuItem path="/config" text="Config" />
        <MenuItem path="/chat" text="Chat" />
        <MenuItem path="/images" text="Images" />
      </div>
    </div>
  );
}
