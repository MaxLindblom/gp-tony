import useConfig from "../hooks/useConfig";

export default function ProfileDropdowns() {
  const {
    versions,
    currentVersion,
    setNewVersion,
    flavours,
    currenFlavour,
    setNewFlavour,
  } = useConfig();

  return (
    <div className="column-layout profile-container">
      <select
        value={currentVersion}
        onChange={(event) => setNewVersion(event.target.value)}
      >
        {versions.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
      <select
        value={currenFlavour}
        onChange={(event) => setNewFlavour(event.target.value)}
      >
        {flavours.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>
    </div>
  );
}
